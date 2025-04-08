## Distribución de Grupos - Proyecto Final

### 📌 Grupo A

- Sandy Alvarez
- Jeffrey Verdu
- Cecilia Potella

### 📌 Grupo B

- Sergio Corrales
- Fabricio Seidel
- Ignacio Cabello

### 📌 Grupo C

- Sebastian Gomez
- Alfredo Arredondo
- Matias Rojas

### 📌 Grupo D

- Sara Jolly
- Catalina Moya
- Nicolas San Martin

### 🔷 Sin Grupo

- Alexis Aburto
- Rodrigo Martinez

# Despliegue del proyecto en Render

## Orden recomendado:

1. **Desplegar la base de datos** y poblarla con los datos iniciales.
2. **Desplegar el backend**, probar las rutas de la API y verificar la conexión con la base de datos.
3. **Desplegar el frontend** y conectar las llamadas a la API con el backend.

## 1. Desplegar la Base de Datos en Render

### Crear la base de datos en Render:

1. Ve a **Render** y selecciona la opción **PostgreSQL**.
2. Configura el nombre de la base de datos (por ejemplo, `plan_de_viajes`) y ajusta las credenciales si es necesario.
3. Una vez creada, Render te proporcionará las credenciales (host, puerto, usuario, contraseña, nombre de la base de datos).

**Ejemplo de configuración:**

- **Nombre de la base de datos:** `plan_de_viajes_db`
- **Usuario:** `admin_viajes`
- **Contraseña:** `<contraseña_generada>`
- **Host:** `<host_render>`
- **Puerto:** 5432

### Actualizar el archivo `.env` en el backend:

Actualiza el archivo `.env` de tu backend con las credenciales proporcionadas por Render:

```plaintext
PG_HOST=dpg-ctihr2tsvqrc73fvcqv0-a.oregon-postgres.render.com
PG_USER=admin_viajes
PG_PASSWORD=kM09H7ORJNlvSjdsM5YBlWfHwEFNqmsN
PG_PORT=5432
PG_DATABASE=plan_de_viajes_gmpo
```

**Nota:** El valor de `PG_HOST` debe ser la URL externa proporcionada por Render.

### Ejecutar el script para crear la base de datos e insertar datos:

1. Si aún no tienes un archivo `.sql`, puedes crear uno o usar el siguiente script de ejemplo para crear las tablas e insertar datos iniciales:

```js
const pool = require("../config/database");

const createTables = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS viajes (
          id SERIAL PRIMARY KEY,
          destino VARCHAR(255) NOT NULL,
          presupuesto INT NOT NULL
      );
    `);
    console.log('Tabla "viajes" creada correctamente.');
  } catch (error) {
    console.error("Error al crear la tabla:", error);
  }
};

const insertData = async () => {
  try {
    await pool.query(`
      INSERT INTO viajes (destino, presupuesto) VALUES
      ('París', 150000), ('Londres', 120000), ('Nueva York', 180000),
      ('Tokio', 200000), ('Sídney', 220000), ('Roma', 100000);
    `);
    console.log("Datos iniciales insertados correctamente.");
  } catch (error) {
    console.error("Error al insertar datos:", error);
  }
};

const setupDatabase = async () => {
  await createTables();
  await insertData();
  pool.end();
};

setupDatabase();
```

2. Corre el archivo `setupDatabase.js` con el siguiente comando desde el backend:

```bash
node db/setupDatabase.js
```

3. Si todo está bien, se deben crear las tablas e insertar los datos correctamente.

### Solucionar problemas de conexión:

Si encuentras errores como `SSL/TLS required`, asegúrate de habilitar SSL en la conexión a PostgreSQL. Actualiza tu archivo de configuración `config/database.js` de esta forma:

```js
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false, // Importante para evitar errores de certificados no verificados
  },
});

module.exports = pool;
```

Verifica que las credenciales en el archivo .env coincidan con las proporcionadas por Render.

## 2. Desplegar el Backend

### Configurar el backend:

1. Verifica que en el archivo `server.js` la conexión a la base de datos use las variables de entorno correctamente.
2. Asegúrate de que **CORS** permita conexiones desde el frontend:

**Nota:** Una vez subido el Front-End podran cambiar la URL del CORS.

```js
const cors = require("cors");
app.use(cors({ origin: "https://frontend-viajes.onrender.com" }));
```

### Subir el backend a un repositorio:

1. Crea un repositorio en GitHub o GitLab.
2. Subir toda la lógica del backend, asegurándote de no incluir el archivo `.env` en el repositorio (agrega `.env` a `.gitignore`).

**.gitignore:**

```plaintext
node_modules/
.env
```

### Configurar Render para el backend:

1. Ve a **Render** y selecciona **New +** > **Web Service**.
2. Conecta tu repositorio del backend.
3. Configura lo siguiente:

- **Build Command:** `npm install`
- **Start Command:** `npm start` (o el comando que uses para iniciar el servidor, como `node server.js`).
- **Environment Variables:** Añade las variables de entorno de tu archivo `.env`.

4. Después de configurar el backend en Render, deberías obtener una URL como: `https://backrender-2g40.onrender.com`.

**Redirigir la ruta raíz (`/`) a `/viajes`:**

Si quieres que la URL raíz redirija automáticamente a la ruta `/viajes`, agrega lo siguiente en tu `server.js`:

```js
app.get("/", (req, res) => {
  res.redirect("/viajes");
});
```

## 3. Desplegar el Frontend

### Actualizar la URL base de la API:

1. En tu archivo `services/api.js`, actualiza la URL para que apunte al backend de Render:

```js
const BASE_URL = "https://backrender-2g40.onrender.com/viajes";

export async function fetchViajes() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Error al obtener los viajes");
  }
  return response.json();
}
```

2. Alternativamente, puedes configurar la URL como una variable de entorno en un archivo `.env`:

```plaintext
VITE_API_URL=https://backrender-2g40.onrender.com/viajes
```

Y modificar tu `api.js` para usar la variable de entorno:

```js
const BASE_URL = import.meta.env.VITE_API_URL;
```

### Verificar la configuración de `package.json` y `vite.config.js`:

1. Verifica que tu archivo `package.json` tenga los scripts correctos para construir y desplegar:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  }
}
```

2. Asegúrate de que tu archivo `vite.config.js` esté configurado correctamente:

```js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist", // Directorio de salida para los archivos compilados
  },
  server: {
    port: 3000, // Puerto del servidor de desarrollo
  },
});
```

### Instalar dependencias y crear el build:

1. En el directorio de tu frontend, instala las dependencias con:

```bash
npm install
```

2. Luego, corre el comando para crear el build:

```bash
npm run build
```

Esto generará una carpeta `dist` con los archivos optimizados para producción.

### Configurar el despliegue en Render:

1. Ve a **Render** y selecciona **New +** > **Static Site**.
2. Conecta tu repositorio del frontend.
3. Configura las siguientes opciones:

- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

### Probar la conexión frontend-backend:

1. Render te proporcionará una URL para el frontend, como `https://frontend-2g40.onrender.com`.
2. Realiza pruebas en tu aplicación navegando por el frontend y verificando que las llamadas a la API funcionen correctamente (puedes usar la consola del navegador para verificar si hay errores de red).

## Consideraciones adicionales:

- **CORS en el backend:** Asegúrate de que el backend permita solicitudes desde el dominio del frontend:

```js
app.use(cors({ origin: "https://frontend-viajes.onrender.com" }));
```
