interface QuantitySelectorProps {
  cantidad: number
  disponible: number
  onChange: (cantidad: number) => void
  titulo: string
}

function QuantitySelector({ cantidad, disponible, onChange, titulo }: QuantitySelectorProps) {
  return <div className="quantity-picker" role="group" aria-label={`Cantidad para añadir de ${titulo}`}>
    <span>Cantidad</span>
    <button type="button" onClick={() => onChange(cantidad - 1)} disabled={cantidad <= 1} aria-label={`Reducir cantidad de ${titulo}`}>−</button>
    <span aria-live="polite">{cantidad}</span>
    <button type="button" onClick={() => onChange(cantidad + 1)} disabled={cantidad >= disponible} aria-label={`Aumentar cantidad de ${titulo}`}>+</button>
  </div>
}
export default QuantitySelector
