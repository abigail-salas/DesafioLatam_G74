### Crear una base de datos

- `CREATE DATABASE blog_db`

### Conectamos

- `\c blog_db`

### Creamos una tabla

- `CREATE TABLE posts(id SERIAL PRIMARY KEY, title VARCHAR(500), content TEXT);`

### Insertar datos en la tabla

```
INSERT INTO posts (title, content) VALUES
('Artículo 1', 'LOREM IPSUM ET... '),
('Artículo 2', 'LOREM IPSUM ET... '),
('Artículo 3', 'LOREM IPSUM ET... '),
('Artículo 4', 'LOREM IPSUM ET... '),
('Artículo 5', 'LOREM IPSUM ET... ');
```

### Creamos una tabla

- `CREATE TABLE comments(id SERIAL PRIMARY KEY, content TEXT, post_id INT);`

### Insertar datos en la tabla

```
INSERT INTO comments (content, post_id) VALUES
('comentario 1', 1),
('comentario 2', 1),
('comentario 1', 2),
('comentario 1', 3),
('comentario 1', 4),
('comentario 2', 4),
('comentario 3', 4),
('comentario 1', 5),
('comentario 2', 5);
```

## CONSULTAS Y REPORTES

- `SELECT * FROM comments c, posts p WHERE c.post_id = p.id;`
  | Comando | Descripcion |
  | :---: | ---- |
  | `FROM comments, posts` | Indica las tablas comments y posts de las cuales se seleccionarán los datos. |
  | `WHERE post_id = id` | Filtra los registros donde el valor de post_id en comments coincide con el valor de id en posts, es decir, solo se seleccionan los registros relacionados. |

  > Este comando combina las tablas "comments" y "posts" y devuelve solo los registros en los que "post_id" de la tabla "comments" coincida con "id" de la tabla "posts". Esto es equivalente a un INNER JOIN.

### INNER JOIN

- `SELECT * FROM posts INNER JOIN comments ON posts.id = comments.post_id;`
  | Comando | Descripcion |
  | :---: | ---- |
  | `INNER JOIN` | Devuelve solo las filas donde hay una coincidencia en ambas tablas, es decir, solo muestra los registros que tienen un post_id en comments que coincide con el id en posts. |
  | `ON posts.id = comments.post_id` | Establece la condición de coincidencia entre las tablas posts y comments. |

  > Este comando selecciona todos los campos de las tablas "posts" y "comments", pero solo incluye aquellas filas donde hay una coincidencia entre el id de "posts" y el post_id de "comments". Si un post_id no tiene un comentario correspondiente, esa fila no será incluida en el resultado.

- EQUIVALENTE: `SELECT * FROM posts, comments WHERE posts.id = comments.post_id;`

- `SELECT posts.title, comments.content FROM posts INNER JOIN comments ON posts.id = comments.post_id;`

### LEFT JOIN

- `SELECT * FROM posts LEFT JOIN comments ON posts.id = comments.post_id;`
  | Comando | Descripcion |
  | :---: | ---- |
  | `LEFT JOIN` | Devuelve todas las filas de la tabla de la izquierda (posts) y las filas coincidentes de la tabla de la derecha (comments). Si no hay coincidencia, los campos de la tabla de la derecha se llenan con NULL. |
  | `ON posts.id = comments.post_id` | Condición de coincidencia entre las tablas posts y comments. |

  > Este comando selecciona todos los campos de las tablas posts y comments. Devuelve todas las filas de la tabla posts, incluso si no tienen coincidencias en comments. Para los posts que no tienen comentarios, los campos correspondientes de comments serán NULL.

### CROSS JOIN

- `SELECT * FROM posts CROSS JOIN comments;`
  | Comando | Descripcion |
  | :---: | ---- |
  | `CROSS JOIN` | Realiza un producto cartesiano, combinando cada fila de la tabla posts con cada fila de la tabla comments. Esto significa que se generan todas las combinaciones posibles entre las filas de ambas tablas. |

  > Este comando selecciona todos los campos de las tablas posts y comments y genera un resultado que contiene todas las combinaciones posibles de filas entre ambas tablas. Si posts tiene 3 filas y comments tiene 4 filas, el resultado será de 12 filas.

  - EQUIVALENTE: `SELECT * FROM posts, comments;`

    > Es equivalente a un CROSS JOIN, ya que se omite la condición de coincidencia, lo que resulta en un producto cartesiano de las dos tablas.

### FULL JOIN

- `SELECT * FROM posts FULL JOIN comments ON posts.id = comments.post_id;`
  | Comando | Descripcion |
  | :---: | ---- |
  | `FULL JOIN` | Devuelve todas las filas cuando hay una coincidencia en una de las tablas o en ambas. Las filas sin coincidencias en posts tendrán valores NULL en comments, y viceversa. |

  > Este comando selecciona todos los campos de las tablas posts y comments. El resultado incluirá todas las filas de ambas tablas: _ Si hay una coincidencia entre posts.id y comments.post_id, se muestra la combinación de las filas. _ Si una fila en posts no tiene un comentario correspondiente en comments, se mostrará la fila de posts con valores NULL para los campos de comments. \* Si una fila en comments no tiene un post correspondiente en posts, se mostrará la fila de comments con valores NULL para los campos de posts.

## Resumen de todos los joins

- ### INNER JOIN:

  Devuelve solo las filas coincidentes entre ambas tablas

- ### LEFT JOIN:

  Devuelve todas las filas de la tabla de la izquierda, con las coincidencias de la tabla de la derecha, o NULL (o vacio) si no hay coincidencias

- ### FULL JOIN:

  Devuelve toas las filas de ambas tablas, con NULL (o vacio) si no hay coincidencias

- ### CROSS JOIN:

  Devuelve TODAS las combinaciones posibles entre las filas de ambas tablas.

---

## EJERCICIO

### Preparacion de la Base de Datos, Tablas y Valores

1. **Crear la base de datos**:

   ```sql
   CREATE DATABASE blog_y_tienda;
   ```

2. **Conectarse a la base de datos creada**:

   ```sql
   \c blog_y_tienda
   ```

3. **Crear las siguientes tablas**:

   - Tabla `posts` (Publicaciones del blog):

     ```sql
     CREATE TABLE posts(
       id SERIAL PRIMARY KEY,
       title VARCHAR(100),
       content TEXT
     );
     ```

   - Tabla `comments` (Comentarios en publicaciones):

     ```sql
     CREATE TABLE comments(
       id SERIAL PRIMARY KEY,
       content TEXT,
       post_id INTEGER REFERENCES posts(id)
     );
     ```

   - Tabla `productos` (Productos de la tienda):

     ```sql
     CREATE TABLE productos(
       id SERIAL PRIMARY KEY,
       nombre VARCHAR(100),
       precio INT
     );
     ```

   - Tabla `ventas` (Ventas de productos):

     ```sql
     CREATE TABLE ventas(
       id SERIAL PRIMARY KEY,
       producto_id INTEGER REFERENCES productos(id),
       cantidad INT,
       fecha_venta DATE
     );
     ```

4. **Insertar datos en las tablas**:

   - Insertar registros en la tabla `posts`:

     ```sql
     INSERT INTO posts (title, content) VALUES
     ('Post 1', 'Contenido del primer post'),
     ('Post 2', 'Contenido del segundo post'),
     ('Post 3', 'Contenido del tercer post');
     ```

   - Insertar registros en la tabla `comments`:

     ```sql
     INSERT INTO comments (content, post_id) VALUES
     ('Comentario 1 en Post 1', 1),
     ('Comentario 2 en Post 1', 1),
     ('Comentario 1 en Post 2', 2),
     ('Comentario 1 en Post 3', 3);
     ```

   - Insertar registros en la tabla `productos`:

     ```sql
     INSERT INTO productos (nombre, precio) VALUES
     ('Laptop', 1000),
     ('Celular', 800),
     ('Escritorio', 200),
     ('Silla', 150);
     ```

   - Insertar registros en la tabla `ventas`:

     ```sql
     INSERT INTO ventas (producto_id, cantidad, fecha_venta) VALUES
     (1, 2, '2024-10-01'),
     (2, 1, '2024-10-02'),
     (3, 3, '2024-10-03'),
     (4, 1, '2024-10-04');
     ```

### Consultas con JOINs y Subconsultas

1. **INNER JOIN** - Mostrar todas las publicaciones con sus comentarios:

   - Consulta para obtener todas las publicaciones y sus comentarios, utilizando un `INNER JOIN`.

2. **LEFT JOIN** - Mostrar todas las publicaciones con comentarios (o NULL si no tienen):

   - Usa un `LEFT JOIN` para mostrar todas las publicaciones, incluso aquellas sin comentarios (donde los comentarios serán `NULL`).

3. **FULL JOIN** - Mostrar todas las publicaciones y todos los comentarios, incluso si no coinciden:

   - Realiza una consulta que incluya todas las publicaciones y todos los comentarios, incluso si no tienen coincidencia.

4. **CROSS JOIN** - Mostrar todas las combinaciones posibles entre publicaciones y comentarios:

   - Realiza una consulta con `CROSS JOIN` que genere un producto cartesiano entre las publicaciones y los comentarios.

5. **Subconsulta** - Mostrar los productos cuyo precio es mayor al promedio:

   - Realiza una subconsulta para encontrar los productos cuyo precio es mayor al precio promedio de todos los productos.

6. **INNER JOIN** con función de agregación - Mostrar el total de ventas por producto:

   - Muestra cuántas unidades se han vendido de cada producto, utilizando `INNER JOIN` y la función de agregación `SUM()`.

### Consultas Avanzadas con Subconsultas y Condicionales

1. **Mostrar las publicaciones que no tienen ningún comentario**:

   - Usa un `LEFT JOIN` y una condición para mostrar las publicaciones que no tienen comentarios.

2. **Mostrar las publicaciones que tienen más de 1 comentario**:

   - Utiliza `GROUP BY` y `HAVING` para mostrar solo las publicaciones que tienen más de un comentario.

3. **Contar el total de combinaciones posibles entre publicaciones y comentarios (CROSS JOIN)**:

   - Utiliza un `CROSS JOIN` para contar cuántas combinaciones posibles existen entre las publicaciones y los comentarios.
