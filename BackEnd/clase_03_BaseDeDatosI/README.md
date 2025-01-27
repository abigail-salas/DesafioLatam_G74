# Proyecto: Gestión de Usuarios con PostgreSQL y Node.js

## Descripción

Este proyecto consiste en la creación de una base de datos que almacene información de usuarios y permita realizar las siguientes operaciones a través de una API utilizando Node.js y PostgreSQL.

## Requisitos

1. Crear una base de datos llamada `gestion_usuarios`.
2. Crear una tabla `usuarios` con las siguientes columnas:
   - `id` (entero, clave primaria, auto-incremental)
   - `nombre` (cadena, no nulo)
   - `apellido` (cadena, no nulo)
   - `edad` (entero, no nulo)
   - `pais` (cadena, no nulo)

## Consultas

- **Agregar un usuario**: Agregar un usuario individualmente mediante una solicitud `POST` a la ruta `/usuarios`.
- **Obtener todos los usuarios**: Devolver todos los usuarios registrados mediante una solicitud `GET` a la ruta `/usuarios`.
- **Obtener usuarios mayores de edad**: Devolver solo a los usuarios con 18 años o más mediante una solicitud `GET` a la ruta `/usuarios/mayores`.
- **Obtener usuarios por país**: Devolver los usuarios pertenecientes a un país específico mediante una solicitud `GET` a la ruta `/usuarios/:pais`.

## Rutas

- `/usuarios`: Para todas las operaciones relacionadas con usuarios.
- `/usuarios/:pais`: Para filtrar usuarios por un país específico.
- `/usuarios/mayores`: Para filtrar a los usuarios mayores de edad.
