# Bitácora técnica de The Hidden Chapter

## Estado revisado

La revisión parte del commit [`ddbf98f`](https://github.com/Sofia20092003/Ejercicio-React-1ev/commit/ddbf98f65ed7a66d901434b7ec2752dd7be420cb).

### Implementado

- `index.html` carga `src/main.tsx`, que monta el componente `App` con React en el elemento `#root`.
- `src/App.tsx` presenta la cabecera, la portada, la introducción al catálogo y el pie. «Inicio» apunta a `#inicio`. «Catálogo» y «Explorar libros» apuntan a `#catalogo`. «Carrito» apunta a `#carrito`, el identificador del pie. Son anclas HTML.
- `src/index.css` aplica la paleta oscura, la tipografía base y los estilos de foco y selección. `src/App.css` contiene reglas iniciales de diseño y queda pendiente incorporarlo, ya que los puntos de entrada revisados solo importan `index.css`.
- Vite carga el complemento de React. Los scripts de npm cubren desarrollo, comprobación con ESLint, compilación y vista previa. El archivo de bloqueo registra las versiones de las dependencias.

### Alcance pendiente

La portada plantea una librería en línea. Quedan por definir e implementar el listado de libros y el comportamiento del carrito. La interfaz revisada no carga datos ni imágenes de productos, no guarda compras ni integra pagos. El icono de la pestaña es un recurso local independiente del catálogo.

## Registro de cambios

### 9 de noviembre de 2026 · Documentación de instalación y estado inicial

- Se adaptó el README de la plantilla de React, TypeScript y Vite al proyecto. Se mantuvo la descripción de las herramientas que sí utiliza y se añadieron los requisitos, la instalación desde el archivo de bloqueo, la configuración incluida y los pasos de desarrollo y compilación.
- Se creó esta bitácora para registrar el estado observado y separar las funciones disponibles del alcance pendiente.
- Se verificaron `npm ci --offline` con la caché local, `npm run lint` y `npm run build` sobre una copia de los archivos de GitHub con Node.js 24.21.0 y npm 11.19.0. La compilación generó `dist/`. La comprobación de la página en el navegador quedó pendiente porque el entorno impidió que Vite abriera el puerto local.
