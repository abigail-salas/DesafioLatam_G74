# Ejercicios de Testing con Jest y Supertest

## Ejercicio 1: Prueba Unitaria con Jest

1. **Crea una función `multiplicar`** que reciba dos números y devuelva su producto.

2. En el archivo de pruebas (`tests/aritmetica.spec.js`), crea una prueba unitaria para esta función

## Ejercicio 2: Prueba de la Ruta GET para la validacion de propiedades

1. En el archivo `tests/api.spec.js`, crea una prueba para la ruta **GET /productos/:id** que se asegure de que un producto tiene propiedades obligatorias como "id" y "nombre"

- Matcher a utilizar: **toHaveProperty()**

---

## Ejercicio 3: Prueba de la Ruta POST para la verificacion del estado y el mensaje de error

1. En el archivo `tests/api.spec.js`, crea una prueba para la ruta **POST /productos** que compruebe que no se permita agregar un producto con ID duplicado y que devuelva un mensaje de error especifico

- Matcher a utilizar: **toBe()**
- Matcher a utilizar: **toEqual()**
