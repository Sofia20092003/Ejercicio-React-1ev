
# Documentación técnica — The Hidden Chapter

## 1. Introducción

The Hidden Chapter es una aplicación web de una librería ficticia, desarrollada como proyecto académico de Desarrollo Web en Entorno Cliente (DWEC), del Ciclo Superior de Desarrollo de Aplicaciones Web (DAW).

El objetivo es desarrollar una aplicación con React y TypeScript que permita consultar libros, filtrarlos, buscar títulos, consultar sus detalles y gestionar un carrito de compra.

La aplicación está especializada en cuatro categorías:

- Fantasía
- Romantasy
- Romance
- Juvenil

Su diseño sigue una estética Dark Academia y fantasía, utilizando colores oscuros, detalles dorados y recursos visuales relacionados con la literatura.

Este documento registra las fases de desarrollo, las decisiones técnicas, los archivos modificados, los problemas detectados y las tareas pendientes.

**Estado a 14 de noviembre de 2026:** proyecto en desarrollo. La versión publicada contiene una vista principal con catálogo, filtros y búsqueda. Existe una primera versión de `CatalogoPage.tsx` sin conectar y `HomePage.tsx` está vacío; las páginas independientes y sus rutas siguen pendientes.

---

## 2. Entorno de desarrollo

### 2.1. Herramientas

| Herramienta | Utilización |
| --- | --- |
| Visual Studio Code | Editor de código |
| Git | Control de versiones |
| GitHub | Repositorio remoto |
| GitHub Desktop | Gestión visual de commits |
| Node.js 24 | Entorno de ejecución |
| npm 11 | Gestión de dependencias |
| Vite 8 | Servidor de desarrollo y compilación |
| React 19 | Construcción de interfaces |
| TypeScript 6 | Tipado del código |
| CSS3 | Diseño responsive |

Las versiones exactas de las dependencias se consultan en `package.json` y `package-lock.json`.

### 2.2. Configuración

El proyecto utiliza Vite con React y TypeScript.

Los principales archivos de configuración son:

- `package.json`: dependencias y scripts.
- `package-lock.json`: versiones instaladas.
- `vite.config.ts`: configuración de Vite.
- `tsconfig.json` y archivos asociados: configuración de TypeScript.
- `eslint.config.js`: reglas de análisis de código.

No se utiliza servidor backend ni base de datos.

---

## 3. Organización del proyecto

Se ha organizado el código en componentes, datos, tipos y estilos.

### Componentes

- `Header.tsx`: cabecera y navegación.
- `Hero.tsx`: sección principal de presentación.
- `Intro.tsx`: introducción a la librería.
- `Footer.tsx`: pie de página.
- `BookCard.tsx`: tarjeta reutilizable de un libro.
- `SearchOverlay.tsx`: buscador integrado en la cabecera.

### Páginas en preparación

- `src/pages/CatalogoPage.tsx`: muestra los libros con `BookCard` y `.map()`; todavía no se importa en `App.tsx` ni incluye filtros o búsqueda.
- `src/pages/HomePage.tsx`: archivo vacío, pendiente de implementación.

La vista activa y la lógica de filtros y búsqueda siguen en `App.tsx`.

### Datos y tipos

- `books.json`: catálogo de libros.
- `books.ts`: importación tipada de los datos.
- `Book.ts`: interfaz TypeScript de un libro.

### Estilos

- `index.css`: estilos globales, variables de color y fondo.
- `App.css`: estilos de componentes y diseño responsive.

### Recursos

- `public/images/`: portadas, logo y fondo.
- `public/icons/`: favicon e iconos SVG.

---

## 4. Registro del desarrollo

### Fase 1. Inicialización del proyecto

**Objetivo:** crear la base de una aplicación React con TypeScript utilizando Vite.

**Trabajo realizado:**

1. Crear el proyecto con Vite.
2. Instalar las dependencias mediante npm.
3. Preparar la estructura inicial.
4. Configurar los estilos globales.
5. Comprobar el funcionamiento del servidor de desarrollo.

**Conceptos utilizados:**

- Componentes de React.
- JSX.
- Importaciones y exportaciones.
- TypeScript.
- Scripts de npm.

**Archivos principales:** `package.json`, `main.tsx`, `App.tsx`, `index.css`.

---

### Fase 2. Diseño de la identidad visual

**Objetivo:** establecer una estética reconocible para la librería.

Se decidió utilizar una combinación de Dark Academia y fantasía cinematográfica.

**Paleta de colores:**

| Variable | Color | Uso |
| --- | --- | --- |
| `--color-ink` | `#151316` | Fondo oscuro |
| `--color-plum` | `#2d1722` | Superficies |
| `--color-burgundy` | `#713448` | Elementos secundarios |
| `--color-ivory` | `#eae0d2` | Texto |
| `--color-gold` | `#b99a68` | Detalles y acentos |

**Trabajo realizado:**

1. Definir variables CSS.
2. Crear y añadir un logo ilustrado.
3. Incorporar un favicon personalizado.
4. Añadir iconos SVG para búsqueda y carrito.
5. Incorporar un fondo ilustrado con ambientación fantástica.
6. Ajustar colores, dimensiones y separación de elementos.

**Decisión técnica:** utilizar variables CSS para mantener la coherencia visual y facilitar modificaciones posteriores.

**Archivos principales:** `index.css`, `App.css`, `index.html` y recursos de `public/`.

---

### Fase 3. Creación de componentes

**Objetivo:** dividir la interfaz en partes reutilizables.

Se crearon los componentes:

- `Header`
- `Hero`
- `Intro`
- `Footer`
- `BookCard`

**Decisión técnica:** evitar concentrar toda la interfaz en `App.tsx`.

Esto mejora la organización y permite reutilizar componentes en futuras páginas.

**Conceptos utilizados:**

- Componentes funcionales.
- JSX.
- Props.
- Composición de componentes.

---

### Fase 4. Creación del catálogo

**Objetivo:** representar los libros mediante datos estructurados.

Se creó `books.json`, con 24 libros distribuidos entre las cuatro categorías previstas.

Cada libro incluye:

- ID.
- Título.
- Autor.
- Descripción.
- Categoría.
- Precio.
- Imagen.
- Idioma.
- Stock.

Se creó la interfaz `Book` para definir los tipos de estas propiedades.

El archivo `books.ts` permite importar los datos JSON utilizando la interfaz TypeScript.

**Conceptos utilizados:**

- JSON.
- Interfaces TypeScript.
- Arrays de objetos.
- Tipado de datos.

**Archivos principales:**

- `src/data/books.json`
- `src/data/books.ts`
- `src/types/Book.ts`

---

### Fase 5. Visualización de los libros

**Objetivo:** mostrar el catálogo mediante tarjetas reutilizables.

Se creó `BookCard.tsx`, que recibe un objeto `Book` mediante props.

Para generar las tarjetas se utiliza el método `.map()`.

Se añadió una cuadrícula responsive mediante CSS Grid.

**Conceptos utilizados:**

- Props.
- Método `.map()`.
- Propiedad `key`.
- Renderizado de listas.
- CSS Grid.

**Archivos principales:** `BookCard.tsx`, `App.tsx` y `App.css`.

---

### Fase 6. Filtros por categoría

**Objetivo:** permitir que el usuario seleccione un género literario.

Se implementaron botones para:

- Todos.
- Fantasía.
- Romantasy.
- Romance.
- Juvenil.

Se utiliza el hook `useState` para almacenar la categoría seleccionada.

El método `.filter()` permite obtener los libros correspondientes.

**Conceptos utilizados:**

- `useState`.
- Eventos `onClick`.
- Métodos de arrays.
- Condiciones lógicas.
- Clases CSS dinámicas.

**Incidencia pendiente:** unificar los valores `Todos` y `todos`, así como `Romantasy` y `romantasy`, para garantizar un filtrado correcto.

---

### Fase 7. Búsqueda de libros

**Objetivo:** permitir localizar libros mediante texto.

Se añadió un campo que permite buscar por:

- Título.
- Descripción.

La búsqueda se combina con el filtro de categorías.

Se utilizan:

- `.filter()`
- `.includes()`
- `.trim()`
- `.toLowerCase()`

También se añadió un mensaje cuando no se encuentran resultados.

**Conceptos utilizados:**

- Inputs controlados.
- Eventos `onChange`.
- Estado de React.
- Renderizado condicional.

---

### Fase 8. Buscador global del Header

**Objetivo:** incorporar una búsqueda accesible desde la cabecera.

Se desarrolló un campo de búsqueda expandible, integrado en la navegación.

**Funcionalidades:**

1. Abrir el buscador pulsando la lupa.
2. Mantener visibles los enlaces Inicio y Catálogo.
3. Desplazar ligeramente la navegación mediante una transición CSS.
4. Cerrar el buscador mediante la X.
5. Cerrar el buscador con Escape.
6. Mostrar hasta cuatro resultados.
7. Incluir miniaturas de las portadas.

**Conceptos utilizados:**

- `useState`.
- `useEffect`.
- `useRef`.
- Eventos de teclado.
- Limpieza de eventos.
- Renderizado condicional.
- Transiciones CSS.

**Archivos principales:**

- `Header.tsx`
- `SearchOverlay.tsx`
- `App.css`

**Pendiente:** conectar los resultados con las futuras páginas de detalle de cada libro.

---

### Fase 9. Adaptación responsive

**Objetivo:** adaptar la interfaz a diferentes dispositivos.

Se realizaron ajustes de:

- Cabecera.
- Logo.
- Navegación.
- Buscador.
- Tarjetas.
- Separaciones.
- Tamaño de los elementos.

Se utilizaron:

- Media queries.
- Flexbox.
- CSS Grid.
- Unidades `rem`.
- `clamp()`.
- Transiciones CSS.

Se realizaron pruebas visuales con herramientas de desarrollo del navegador, especialmente en tamaños móviles próximos a 320 px y 393 px.

**Estado:** se han incorporado ajustes responsive, pero la validación final sigue pendiente.

---

## 5. Incidencias detectadas

### 5.1. Valor inicial de categoría

En `App.tsx` se utiliza:

`useState('Todos')`

Sin embargo, la condición del filtro compara con:

`categoria === 'todos'`

**Efecto:** al iniciar, la comparación no coincide y pueden aparecer cero resultados hasta seleccionar un filtro.

**Solución prevista:** utilizar el mismo valor en ambos lugares.

### 5.2. Diferencias en las categorías del JSON

El primer libro utiliza `Romantasy`, mientras que otros libros utilizan `romantasy`.

**Solución prevista:** normalizar todos los valores de categoría.

### 5.3. Referencias a archivos públicos

En algunos archivos se utilizan rutas que comienzan por `/public/`.

En Vite, los recursos de esa carpeta deben referenciarse desde la raíz.

Por ejemplo:

`/images/logo-the-hidden-chapter.png`

**Solución prevista:** revisar las rutas del Header y el favicon.

### 5.4. Idioma del documento HTML

El archivo `index.html` declara actualmente `lang="en"`.

**Solución prevista:** cambiarlo a `lang="es"`.

### 5.5. Navegación provisional

Los enlaces de Inicio, Catálogo y Carrito todavía utilizan anclas HTML.

**Solución prevista:** configurar rutas independientes cuando se creen las cuatro páginas.

Estas incidencias están documentadas, pero no corregidas mediante esta actualización.

---

## 6. Próximas fases

### Fase 10. Organización de páginas

Completar `HomePage.tsx`, continuar `CatalogoPage.tsx` y crear las páginas de detalle y carrito. Configurar las rutas y trasladar los componentes y la lógica a sus páginas correspondientes. El nombre actual del archivo es `CatalogoPage.tsx`.

### Fase 11. Catálogo y paginación

Incorporar paginación y revisar la combinación entre categorías, búsqueda y resultados.

### Fase 12. Detalle de libro

Crear una página individual que muestre la información del libro seleccionado.

### Fase 13. Carrito

Implementar:

- Añadir libros.
- Modificar cantidades.
- Eliminar productos con confirmación.
- Vaciar el carrito con confirmación.
- Calcular el importe total.

### Fase 14. Pruebas finales

Comprobar:

- Navegación.
- Funcionalidades.
- Responsive.
- Accesibilidad.
- Errores de consola.
- ESLint.
- Compilación de producción.

---

## 7. Comprobaciones

### Revisión anterior — 9 de noviembre de 2026

En una revisión anterior del proyecto se comprobaron:

- Instalación de dependencias desde la caché local.
- Ejecución de ESLint.
- Compilación de producción.

La prueba de navegación en aquel entorno quedó pendiente.

### Revisión — 14 de noviembre de 2026

Se revisó el código publicado en GitHub y se comprobó la existencia de:

- Componentes React.
- Catálogo JSON de 24 libros.
- Modelo TypeScript.
- Búsqueda y filtros.
- Buscador integrado en la cabecera.
- Recursos gráficos.

No se ejecutaron nuevamente los comandos `npm run lint` ni `npm run build` durante esta revisión.

---

### Revisión local de documentación — 14 de noviembre de 2026

- Se inspeccionaron el estado de Git, `App.tsx`, las páginas existentes, la cabecera, el buscador y la configuración.
- Se corrigió la descripción de `pages/` en `README.md` y en esta bitácora, y se aclaró la incidencia del filtro inicial.
- No se ha modificado código ni se han ejecutado instalación, ESLint, compilación o pruebas en navegador durante esta revisión. Esas comprobaciones quedan pendientes para la próxima implementación.

---

## 8. Mantenimiento de la documentación

Después de cada nueva implementación se registrará:

1. Fecha del cambio.
2. Objetivo.
3. Archivos creados o modificados.
4. Explicación de la implementación.
5. Conceptos utilizados.
6. Problemas y soluciones.
7. Comprobaciones realizadas.
8. Tareas pendientes.

En cada implementación se revisarán y actualizarán `README.md` y `DOCUMENTACION.md` en español para reflejar los cambios realizados, las comprobaciones y los pendientes, sin presentar como realizadas pruebas que no se hayan ejecutado.

---

## 9. Repositorio

https://github.com/Sofia20092003/Ejercicio-React-1ev
