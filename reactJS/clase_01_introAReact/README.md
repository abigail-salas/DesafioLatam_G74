# Instalacion de proyecto REACT + VITE

### 1. Instalar el proyecto con vite

`npm create vite`

> Intalar vite de manera global `npm install vite -g` <----- EXTRA

### 2. Ponerle un nombre al proyecto

_*Proyecto-react-vite*_

### 3. Seleccionar la opcion de **_React_**

### 4. Seleccionar la opcion de **_Javascript_**

### 5. Cambiar de directorio

`cd proyecto-react-vite`

### 6. Instalacion de dependencias

`npm install` = `npm i`

### 7. Levantar el servidor

`npm run dev`

## Limpieza del proyecto

Borrar archivo `App.css`, `vite.svg` y `react.svg`

Dentro de _App.jsx_ solo se dejan las llaves sin nombre _<> </>_, se borra el _useState_ y tambien se borran todos los _imports_

Su archivo _App.jsx_ deberia quedar de la siguiente forma:

```jsx
import React from "react";

function App() {
  return <></>;
}

export default App;
```

Dentro de index.css pueden borrar todo o dejar solo el root

## Creando un nuevo componente

- Siempre el nombre del archivo va la primera con Mayuscula y luego .jsx

---

# Instalacion de proyecto REACT

### 1. Inicializar un proyecto con raect

`npx create-react-app proyecto-react`

### 2. Cambia de directorio

`cd Proyecto-react-vite`

### 3. Instalar las dependencias

`npm i`

### 4. Abrir VS CODE

`code .`s

### 5. Levantar el servidor

`npm start`
