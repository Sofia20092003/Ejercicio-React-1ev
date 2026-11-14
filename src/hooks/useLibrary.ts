import { useSyncExternalStore } from 'react'
import { books } from '../data/books'

const changeEvent = 'hidden-chapter-change'
const favoriteKey = 'hidden-chapter-favoritos'
const cartKey = 'hidden-chapter-carrito'

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback)
  window.addEventListener(changeEvent, callback)
  return () => {
    window.removeEventListener('storage', callback)
    window.removeEventListener(changeEvent, callback)
  }
}

function read(key: string) {
  try { return localStorage.getItem(key) ?? '[]' } catch { return '[]' }
}

function parse(value: string): number[] {
  try {
    const data: unknown = JSON.parse(value)
    return Array.isArray(data) ? data.filter((id): id is number => Number.isInteger(id)) : []
  } catch { return [] }
}

function write(key: string, ids: number[]) {
  try {
    localStorage.setItem(key, JSON.stringify(ids))
    window.dispatchEvent(new Event(changeEvent))
    return true
  } catch { return false }
}

export function useLibrary() {
  const favorites = parse(useSyncExternalStore(subscribe, () => read(favoriteKey), () => '[]'))
  const cart = parse(useSyncExternalStore(subscribe, () => read(cartKey), () => '[]'))

  function toggleFavorite(id: number) {
    const current = parse(read(favoriteKey))
    return write(favoriteKey, current.includes(id) ? current.filter(item => item !== id) : [...current, id])
  }

  function addToCart(id: number): 'added' | 'limit' | 'error' {
    const current = parse(read(cartKey))
    const book = books.find(item => item.id === id)
    if (!book || current.filter(item => item === id).length >= book.stock) return 'limit'
    return write(cartKey, [...current, id]) ? 'added' : 'error'
  }

  function decreaseQuantity(id: number) {
    const current = parse(read(cartKey))
    if (current.filter(item => item === id).length <= 1) return false
    current.splice(current.indexOf(id), 1)
    return write(cartKey, current)
  }

  function removeFromCart(id: number) {
    return write(cartKey, parse(read(cartKey)).filter(item => item !== id))
  }

  return { favorites, cart, toggleFavorite, addToCart, decreaseQuantity, removeFromCart }
}
