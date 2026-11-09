# The Hidden Chapter

Prototipo web de una librería de fantasía, romantasy, romance y literatura juvenil. La página actual incluye una cabecera, una portada, una introducción al catálogo y un pie de página. Los enlaces del menú son anclas de la misma página.

El proyecto utiliza React para la interfaz, TypeScript para el código, Vite para el desarrollo y la compilación, y ESLint para el análisis estático.

## 1. Preparar el entorno

1. Instala Git desde [su página de descargas](https://git-scm.com/downloads) para obtener el código.
2. Instala **Node.js 24 LTS** desde [la página de Node.js](https://nodejs.org/en/download). El instalador incluye npm, que descarga las dependencias y ejecuta los comandos del proyecto.
3. Abre una terminal (PowerShell en Windows o Terminal en macOS y Linux) y comprueba que los tres comandos muestran una versión. Si acabas de instalar alguna herramienta y el comando no se reconoce, vuelve a abrir la terminal.

```sh
git --version
node --version
npm --version
```

## 2. Descargar e instalar

Desde la carpeta donde quieras guardar el proyecto, ejecuta:

```sh
git clone https://github.com/Sofia20092003/Ejercicio-React-1ev.git
cd Ejercicio-React-1ev
npm ci
```

Ejecuta los comandos de npm desde esa carpeta, donde están `package.json` y `package-lock.json`. `npm ci` instala en `node_modules/` las versiones registradas en el archivo de bloqueo. Para una primera instalación se necesita acceso al registro de npm.

La configuración está incluida. `vite.config.ts` activa el complemento de React, los archivos `tsconfig*.json` configuran TypeScript y `eslint.config.js` define las reglas de análisis. Para ejecutar la página basta con instalar las dependencias. No hay que crear un archivo `.env`, introducir credenciales ni arrancar un servidor de datos.

## 3. Ejecutar en desarrollo

```sh
npm run dev
```

Abre en el navegador la dirección **Local** que imprime Vite, normalmente `http://localhost:5173/`. Si ese puerto está ocupado, usa el que indique la terminal. Verás la portada de The Hidden Chapter. «Explorar libros» enlaza con la introducción al catálogo y «Carrito» enlaza con el pie de página. Mantén la terminal abierta mientras uses la aplicación y pulsa `Ctrl+C` para detenerla.

## 4. Revisar, compilar y previsualizar

```sh
npm run lint
npm run build
npm run preview
```

- `npm run lint` ejecuta ESLint sobre el proyecto.
- `npm run build` comprueba el código con TypeScript y genera la versión compilada en `dist/`.
- `npm run preview` sirve esa carpeta para revisarla localmente. Ejecútalo después de compilar y abre la dirección que muestra Vite, normalmente `http://localhost:4173/`. Pulsa `Ctrl+C` para cerrar la vista previa.

Si npm indica que no encuentra `package.json`, vuelve a la carpeta del repositorio. Si señala una versión incompatible de Node.js, comprueba `node --version` y usa Node.js 24 antes de repetir `npm ci`.

## Estructura principal

- `index.html` contiene el punto de montaje de React y referencia el icono `public/favicon.svg`.
- `src/main.tsx` monta `App` y carga los estilos globales de `src/index.css`.
- `src/App.tsx` contiene la estructura y los textos de la página.

Consulta la [bitácora técnica](DOCUMENTACION.md) para ver el estado de la implementación y el registro de cambios.
