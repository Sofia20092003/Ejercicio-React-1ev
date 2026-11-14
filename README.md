
# 📚 The Hidden Chapter

**The Hidden Chapter** es una aplicación web de una librería ficticia, desarrollada como proyecto académico para la asignatura de Desarrollo Web en Entorno Cliente (DWEC), del Ciclo Superior de Desarrollo de Aplicaciones Web (DAW).

La librería está especializada en cuatro géneros literarios:

- Fantasía
- Romantasy
- Romance
- Literatura juvenil

Su identidad visual combina la estética *Dark Academia* con elementos de fantasía: colores oscuros, detalles dorados, ilustraciones y una ambientación inspirada en mundos literarios.

> **Estado del proyecto:** En desarrollo. Inicio y Catálogo tienen rutas independientes. Inicio muestra cuatro libros destacados y un botón centrado con esquinas redondeadas; los enlaces abren el catálogo en la misma pestaña, desde arriba. Catálogo ofrece búsqueda y filtros. Favoritos y una versión básica del Carrito están disponibles; la página de detalle y el proceso de compra siguen pendientes.

---

## 1. Tecnologías utilizadas

| Tecnología | Utilización |
| --- | --- |
| React 19 | Construcción de interfaces mediante componentes |
| React Router | Navegación entre páginas |
| TypeScript 6 | Tipado y organización del código |
| Vite 8 | Entorno de desarrollo y compilación |
| HTML5 | Estructura base |
| CSS3 | Diseño, estilos y responsive |
| JSON | Almacenamiento local de los libros |
| ESLint | Análisis estático del código |
| Git y GitHub | Control de versiones |

Las versiones exactas de las dependencias se encuentran en `package.json` y `package-lock.json`.

La aplicación no necesita una base de datos ni un servidor backend.

---

## 2. Requisitos previos

Antes de instalar el proyecto, es necesario disponer de:

1. **Git:** https://git-scm.com/downloads
2. **Node.js 24:** https://nodejs.org/en/download
3. **npm:** incluido con Node.js.
4. Un navegador web moderno.
5. Un editor de código, preferiblemente Visual Studio Code.

Para comprobar que Git, Node.js y npm están instalados, ejecutar en la terminal:

```bash
git --version
node --version
npm --version
```

Durante el desarrollo se ha utilizado Node.js 24 y npm 11.

---

## 3. Instalación del proyecto

### 3.1. Clonar el repositorio

Abrir una terminal y ejecutar:

```bash
git clone https://github.com/Sofia20092003/Ejercicio-React-1ev.git
```

### 3.2. Acceder a la carpeta

```bash
cd Ejercicio-React-1ev
```

### 3.3. Instalar las dependencias

```bash
npm ci
```

Este comando instala las dependencias registradas en `package-lock.json`, manteniendo las versiones previstas para el proyecto.

### 3.4. Configuración

El proyecto incluye los archivos necesarios:

- `package.json`: dependencias y comandos.
- `package-lock.json`: versiones de las dependencias.
- `vite.config.ts`: configuración de Vite.
- `tsconfig.json` y archivos asociados: configuración de TypeScript.
- `eslint.config.js`: configuración de ESLint.

Actualmente no es necesario crear archivos `.env`, configurar credenciales ni iniciar una base de datos.

---

## 4. Ejecutar la aplicación

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará una dirección local, normalmente:

http://localhost:5173/

Abrir esa dirección en el navegador.

Para detener el servidor, utilizar `Ctrl+C` en la terminal.

---

## 5. Comandos disponibles

| Comando | Función |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Comprueba TypeScript y genera la compilación |
| `npm run preview` | Permite visualizar la versión compilada |
| `npm run lint` | Analiza el código mediante ESLint |

Para comprobar y compilar el proyecto:

```bash
npm run lint
npm run build
```

Para previsualizar la compilación:

```bash
npm run preview
```

La versión compilada se genera en la carpeta `dist/`.

---

## 6. Estructura del proyecto

```text
Ejercicio-React-1ev/
├── public/
│   ├── icons/
│   │   ├── favicon-the-hidden-chapter.png
│   │   ├── search.svg
│   │   └── shopping-bag.svg
│   └── images/
│       ├── hero-background.png
│       ├── logo-the-hidden-chapter.png
│       └── [portadas de los libros]
│
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Intro.tsx
│   │   ├── Footer.tsx
│   │   ├── BookCard.tsx
│   │   └── SearchOverlay.tsx
│   │
│   ├── pages/
│   │   ├── CatalogoPage.tsx  (catálogo, búsqueda y filtros)
│   │   └── HomePage.tsx      (inicio y libros destacados)
│   │
│   ├── data/
│   │   ├── books.json
│   │   └── books.ts
│   │
│   ├── types/
│   │   └── Book.ts
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
│
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── DOCUMENTACION.md
```

La carpeta `pages/` ya existe. `HomePage.tsx` muestra la portada y cuatro libros destacados. `CatalogoPage.tsx` muestra el catálogo con `BookCard`; `App.tsx` selecciona la página según la ruta.

---

## 7. Funcionalidades implementadas

### 7.1. Componentes reutilizables

La aplicación está organizada mediante componentes de React para separar las distintas partes de la interfaz.

Componentes principales:

- `Header`: cabecera y navegación.
- `Hero`: portada principal.
- `Intro`: presentación de la librería.
- `Footer`: pie de página.
- `BookCard`: representación de un libro.
- `SearchOverlay`: buscador desplegable integrado en la cabecera.

### 7.2. Catálogo de libros

El catálogo contiene 24 libros almacenados en `src/data/books.json`.

Cada libro incluye:

- Identificador
- Título
- Autor
- Descripción
- Categoría
- Precio
- Imagen
- Idioma
- Stock

La estructura está definida mediante la interfaz `Book` en TypeScript.

### 7.3. Filtros de categorías

Se han incorporado filtros para mostrar los libros según su género literario.

La lógica de `CatalogoPage.tsx` utiliza `useState` y `.filter()`. El valor inicial muestra todos los libros y la comparación ignora mayúsculas en las categorías.

### 7.4. Búsqueda de libros

La aplicación permite buscar títulos mediante:

- Título del libro.
- Descripción del libro.

Las búsquedas utilizan métodos de arrays y cadenas de JavaScript.

### 7.5. Buscador global

La cabecera incorpora un buscador expandible que permite:

- Abrir el campo de búsqueda mediante la lupa.
- Cerrar el campo con la X.
- Cerrar el buscador mediante la tecla Escape.
- Mostrar hasta cuatro resultados.
- Visualizar miniaturas de las portadas.

### 7.6. Diseño responsive

Se utilizan CSS Grid, Flexbox, media queries y unidades relativas como `rem` para adaptar la interfaz a distintos tamaños de pantalla.

El diseño utiliza una paleta oscura con tonos burdeos, ciruela, marfil y dorado.

---

## 8. Funcionalidades pendientes

Las páginas y funcionalidades se encuentran en estas fases:

### Inicio — `/`

Implementada: presentación de la librería y cuatro libros destacados.

### Catálogo — `/catalogo`

Implementados el listado, los filtros y la búsqueda. La paginación queda pendiente.

### Detalle — `/libro/:id`

Información individual del libro y opción de añadirlo al carrito.

### Favoritos — `/favoritos`

El corazón de cada tarjeta permite guardar o retirar libros. El corazón dorado de la cabecera abre la página de favoritos. La selección se guarda en el navegador.

### Carrito — `/carrito`

Se pueden añadir libros desde sus tarjetas, ver cantidades y total, y eliminar todas las unidades de un título. Ajustar cantidades, vaciar con confirmación y finalizar la compra siguen pendientes.

**Estado:** están configuradas las rutas `/`, `/catalogo`, `/favoritos` y `/carrito`. La página de detalle sigue pendiente. Los favoritos y el carrito se guardan en este navegador y se sincronizan entre sus pestañas.

---

## 9. Incidencias conocidas

En la revisión del código se han identificado algunos ajustes pendientes:

- Corregir la referencia al favicon, que utiliza `/public/` en lugar de una ruta desde la raíz.
- Cambiar el idioma del documento HTML a español.
- Implementar la ruta de detalle y completar las funciones del carrito.

Estas incidencias están registradas para su corrección durante el desarrollo. Los datos conservan variantes de mayúsculas en categorías; el filtro las compara en minúsculas.

---

## 10. Documentación técnica

El proyecto dispone de un segundo archivo de documentación:

[Consultar DOCUMENTACION.md](DOCUMENTACION.md)

En él se registran:

- Pasos del desarrollo.
- Decisiones técnicas.
- Componentes creados.
- Funcionalidades implementadas.
- Problemas y soluciones.
- Modificaciones de archivos.
- Pruebas y comprobaciones.

La documentación se actualizará conforme avance el proyecto.

---

## 11. Autoría

Proyecto académico desarrollado por Ángela Sofía Rodríguez Arciniegas.

Repositorio: https://github.com/Sofia20092003/Ejercicio-React-1ev
