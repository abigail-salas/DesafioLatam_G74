### Crear una base de datos

- `CREATE DATABASE nombre_db`

### Conectamos

- `\c nombre_db`

### Creamos una tabla

- `CREATE TABLE monedas (nombre VARCHAR(50))`

### Insertar datos en la tabla

```
INSERT INTO monedas (nombre) VALUES
('Guarani'),
('Rupiah'),
('Ruble'),
('Peso'),
('Peso'),
('Yuan Renminbi'),
('Yuan Renminbi'),
('Yuan Renminbi'),
('Euro'),
('Ariary'),
('Denar'),
('Rupiah'),
('Ruble'),
('Yuan Renminbi'),
('Lek');

```

## CONSULTAS Y REPORTES

- ### Selecciones

  - `SELECT COUNT(*) FROM monedas;`

    > Cuenta los registros

  - `SELECT COUNT(*) FROM monedas WHERE nombre = 'Peso';`

    > Cuenta los registros que hay en "peso"

  - `SELECT COUNT(*) FROM monedas WHERE nombre = 'Peso' or nombre = 'Ariary';`

    > Cuenta los registros que hay en "peso" y "Ariary"

  - `SELECT DISTINCT(nombre) FROM monedas;`

    > Lista todos los registros sin repetir

  - `SELECT COUNT(DISTINCT(nombre)) FROM monedas;`

    > Cuenta todos los registro sin repetir

  - `SELECT nombre, COUNT(*) FROM monedas GROUP BY nombre;`

    > Lista cuantas veces aparece un registro

### Creamos una tabla

- `CREATE TABLE ventas (categoria VARCHAR(50), monto INT);`

### Insertar datos en la tabla

```
INSERT INTO ventas (categoria, monto) VALUES
('Books', 214),
('Games', 293),
('Baby', 241),
('Tools', 719),
('Tools', 385),
('Movies', 882),
('Outdoors', 654),
('Baby', 332),
('Grocery', 332),
('Toys', 952),
('Games', 682),
('Books', 527),
('Kids', 980),
('Grocery', 300);

```

## Comandos para tablas agrupadas

- `SELECT SUM(monto) AS total_monto FROM ventas;`
  | Comando | Descripcion |
  | :---: | ---- |
  | `SUM()` | Calcula la suma total de todos los valores en la columna monto. |

- `SELECT categoria, SUM(monto) AS total_monto FROM ventas GROUP BY categoria;`

- `SELECT categoria, AVG(monto) AS promedio_monto FROM ventas GROUP BY categoria;`
  | Comando | Descripcion |
  | :---: | ---- |
  | `AVG()` | Calcula el valor promedio de todos los valores en la columna monto para cada categoría.|

- `SELECT MAX(monto) AS monto_maximo FROM ventas;`
  | Comando | Descripcion |
  | :---: | ---- |
  | `MAX()` | Encuentra el valor máximo en la columna monto.|

- `SELECT MIN(monto) AS monto_minimo FROM ventas;`
  | Comando | Descripcion |
  | :---: | ---- |
  | `MIN()` | Encuentra el valor mínimo en la columna monto para cada categoría.|

- `SELECT categoria, MIN(monto) AS monto_minimo FROM ventas GROUP BY categoria;`

## Diferencia entre WHERE y HAVING

- `SELECT categoria, monto FROM ventas WHERE monto > 500` Muestra todas las ventas donde monto sea mayor a 500
  | Comando | Descripcion |
  | :---: | ---- |
  | `WHERE` | Filtra los registros de la tabla ventas y solo muestra aquellos donde el monto sea mayor a 500 |

- `SELECT categoria, SUM(monto) AS total_monto FROM ventas  GROUP BY categoria HAVING SUM(monto) > 900;` Muestra la categoria de ventas donde tienen un monto total o superor a 900
  | Comando | Descripcion |
  | :---: | ---- |
  | `HAVING` | Filtra las categorias de venta despues de aplicar la funcion `SUM` |

- `SELECT categoria, SUM(monto) as total_monto FROM ventas WHERE monto > 500 GROUP BY categoria HAVING SUM(monto) > 900;`
  | Comando | Descripcion |
  | :---: | ---- |
  | `HAVING` | Filtra las categorías agrupadas donde la suma total `(SUM(monto))` es superior a 900. |
  | `WHERE` | Filtra las ventas individuales donde monto es mayor a 500. |

### COMPARACION

| `WHERE`                                                                                                                                             | `HAVING`                                                                                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Se usa para filtrar registros antes de cualquier operación de agrupamiento. No se puede usar con funciones de agregado como SUM o AVG directamente. | Se usa para filtrar grupos de registros, después de que se haya aplicado una operación de agrupamiento. Se utiliza principalmente con funciones de agregado para restringir los resultados agrupados. |

## Subconsultas

- `SELECT categoria, monto FROM ventas WHERE monto > (SELECT AVG(monto) FROM ventas);` Encuentra todas las categorias de ventas cuyyo
  | Comando | Descripcion |
  | :---: | ---- |
  | `WHERE` |Filtra las ventas donde el monto es mayor al promedio calculado por la subconsulta (SELECT AVG(monto) FROM ventas). |

- `SELECT categoria FROM ventas WHERE categoria IN (SELECT nombre FROM monedas)`
  | Comando | Descripcion |
  | :---: | ---- |
  | `IN` | Filtra las categorías de ventas que coinciden con algún nombre en la tabla monedas. |

## EJERCICIOS

Imagina que estás gestionando una tienda en línea que vende diferentes categorías de productos. Quieres analizar los datos de las ventas realizadas para generar reportes y estadísticas que te ayuden a tomar decisiones comerciales.

1. Crear una tabla de `productos` con los siguientes campos:

   - `ID` (clave primaria, tipo serial)
   - `nombre` (varchar de hasta 100 caracteres)
   - `categoria` (varchar de hasta 50 caracteres)
   - `precio` (entero)

2. Crear una tabla de `ventas` con los siguientes campos:

   - `id` (clave primaria, tipo serial)
   - `producto_id` (entero, referencia a `productos.id`) (producto_id INT REFERENCES productos(id))
   - `cantidad` (entero)
   - `fecha_venta` (tipo date)

3. Insertar datos en la tabla `productos`:

   - Inserta los siguientes productos:

   ```sql
   INSERT INTO productos (nombre, categoria, precio) VALUES
   ('Laptop', 'Electrónica', 1200),
   ('Celular', 'Electrónica', 800),
   ('Escritorio', 'Muebles', 200),
   ('Silla', 'Muebles', 100),
   ('Cámara', 'Electrónica', 500),
   ('Libreta', 'Papelería', 5);
   ```

4. Insertar datos en la tabla `ventas`:

   - Inserta los siguientes registros de ventas:

   ```sql
   INSERT INTO ventas (producto_id, cantidad, fecha_venta) VALUES
   (1, 2, '2024-10-01'),
   (2, 3, '2024-10-01'),
   (3, 1, '2024-10-02'),
   (4, 4, '2024-10-02'),
   (5, 2, '2024-10-03'),
   (6, 10, '2024-10-04');
   ```

### Consultas a realizar:

4. **Encontrar el producto con el precio más alto y más bajo**:

   - Usa `MAX` y `MIN` para encontrar el producto más caro y más barato.
