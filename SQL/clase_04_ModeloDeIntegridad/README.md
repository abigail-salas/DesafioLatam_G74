## Primary key (Clave Primaria)

**Definicion:**

Es un conjunto de atributos que identifivan de manera única a una fila en una tabla. No pueden haber dos filas con el mismo valor, y este valor tampoco puede ser nulo (NULL)

**Caracteristicas:**

1. **Única:** Cada valor de la PK de ser único en la tabla
2. **No Nula:** Los valores de la PK no pueden ser nulos
3. **Estable:** Los valores de la PK no deben cambiar con el tiempo

```sql
CREATE TABLE Clientes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100)
);
```

## Foreign key (Clave Foranea)

**Definicion:**

La clave foranea es un atributo en una tabla que referencia la _CLave Primaria (PK)_ de otra tabla. Se utiliza para crear una relacion entre estas dos tablas y asegurar una integridad referencial

**Caracteristicas:**

1. **Referencial:** La FK apunta siempre a una PK de otra tabla
2. **Integridad:** Asegura los valores de la FK deben coincidir con los valores de la PK en la tabla referenciada

```sql
CREATE TABLE Pedidos (
    id SERIAL PRIMARY KEY,
    clientes_id INT,
    fecha_pedido DATE,
    total_pedido DECIMAL CHECK (total_pedido > 0) --- Restriccion CHECK
    FOREIGN KEY (clientes_id) REFERENCES Clientes (id)
);
```

**Integridad de datos**

```sql
INSERT INTO Pedidos (clientes_id, fecha_pedido, total_pedido) VALUES (3, '02-05-2024', 100);
```

- Al intentar crear un nuevo archivo dentro de la tabla Pedidos, el mismo fallará ya que NO EXISTE un cliente con el 3, por ende, saldrá el siguiente error:

`ERROR: inserción o actualización en la tabla «pedidos» viola la llave foránea «pedidos_clientes_id_fkey»
DETALLE: La llave (clientes_id)=(3) no está presente en la tabla «clientes».`

```sql
INSERT INTO Clientes (id, nombre, email) VALUES (1, 'Lautaro', 'mail@mail');
```

```sql
INSERT INTO Clientes (id, nombre, email) VALUES (1, 'Virginia', 'mail@mail');
```

- En este caso, al intentar escribir dos id's iguales, tambien tendremos un error:

`ERROR: llave duplicada viola restricción de unicidad «clientes_pkey»
DETALLE: Ya existe la llave (id)=(1).`

## Integridad de Datos

1. Intento de inserción en la tabla `Pedidos`

Al intentar insertar un registro en la tabla `Pedidos` con un valor en `clientes_id` que **no existe** en la tabla `Clientes`, obtendremos un error.

```sql
INSERT INTO Pedidos (clientes_id, fecha_pedido, total_pedido)
VALUES (3, '02-05-2024', 100);
```

**Resultado:**

```
ERROR: inserción o actualización en la tabla «pedidos» viola la llave foránea «pedidos_clientes_id_fkey»
DETALLE: La llave (clientes_id)=(3) no está presente en la tabla «clientes».
```

**Explicación:**

El error ocurre porque no existe un cliente con el `id = 3` en la tabla `Clientes`. La restricción de **llave foránea** asegura que el valor en `clientes_id` de la tabla `Pedidos` coincida con un `id` válido en la tabla `Clientes`.

2. Intento de inserción duplicada en la tabla `Clientes`

Si intentamos insertar dos registros con el mismo `id` en la tabla `Clientes`, la base de datos lanzará un error debido a la restricción de **clave primaria**.

```sql
INSERT INTO Clientes (id, nombre, email) VALUES (1, 'Lautaro', 'mail@mail');
```

```sql
INSERT INTO Clientes (id, nombre, email) VALUES (1, 'Virginia', 'mail@mail');
```

**Resultado:**

```
ERROR: llave duplicada viola restricción de unicidad «clientes_pkey»
DETALLE: Ya existe la llave (id)=(1).
```

**Explicación:**  
El error ocurre porque la columna `id` en la tabla `Clientes` está definida como **clave primaria**, lo que significa que no puede contener valores duplicados.

### Restricciones

Las restricciones son reglas que van a aplicar a algunas columnas para asegurar la integridad u la validez de los datos. Las más comunes son `NOT NULL`, `UNIQUE`, `CHECK`, `DEFAULT`

`NOT NULL`: Asegura que una columna no acepte valores nulos
`UNIQUE`: Asegura que todos los valores en una columna sean únicos
`CHECK`: Define una condicion que los valores en una columna deben seguir
`DEFAULT`: Establece un valor por default para una columna cuando no se proporciona ningun valor

## Modelos de Datos: Conceptual, Lógico y Físico

### Modelo de Datos Conceptual

**Definición:**
El modelo de datos conceptual es una representación abstracta de los datos que se centra en describir la estructura general y las relaciones entre entidades sin preocuparse por los detalles técnicos. Es utilizado principalmente en la fase inicial de diseño de la base de datos.

**Características:**

- Representa las entidades principales y sus relaciones.
- No incluye detalles específicos sobre el tipo de base de datos o la implementación.
- Enfocado en qué datos se deben almacenar, no en cómo se almacenan.

**Ejemplo:**
En un sistema de ventas, el modelo conceptual podría identificar las entidades "Cliente", "Pedido", y "Producto", y mostrar que un "Cliente" puede realizar muchos "Pedidos", y que cada "Pedido" puede incluir muchos "Productos".

### Modelo de Datos Lógico

**Definición:**
El modelo de datos lógico es una representación más detallada que el modelo conceptual. Define las estructuras de datos de manera más precisa, incluyendo las claves primarias y foráneas, pero sigue siendo independiente del tipo de base de datos que se usará.

**Características:**

- Define tablas, columnas, claves primarias y foráneas.
- Describe la estructura lógica de la base de datos sin especificar detalles físicos como índices o particiones.
- Se utiliza como paso intermedio antes de la implementación física.

**Ejemplo:**
Basado en el modelo conceptual anterior, el modelo lógico podría definir las tablas "Clientes", "Pedidos" y "Productos", con detalles como los tipos de datos y las relaciones entre ellas, utilizando claves primarias y foráneas.

### Modelo de Datos Físico

**Definición:**
El modelo de datos físico describe cómo los datos se almacenan realmente en la base de datos. Incluye detalles específicos de la implementación, como el tipo de base de datos, índices, particiones, y otras optimizaciones de rendimiento.

**Características:**

- Define cómo se almacenan los datos físicamente en el sistema.
- Incluye detalles específicos de la implementación como índices, compresión, y estructura de almacenamiento.
- Está completamente ligado a la tecnología de base de datos seleccionada (SQL Server, PostgreSQL, MySQL, etc.).

**Ejemplo:**
El modelo físico podría especificar que la tabla "Clientes" se almacenará en un archivo particular, con un índice en la columna `email` para acelerar las búsquedas, y con ciertas configuraciones de compresión para optimizar el uso del espacio.

LINK A EJEMPLO GRAFICO [LUCID](https://lucid.app/lucidchart/beb507f1-b785-473c-ab53-e6ad3ef360e6/edit?beaconFlowId=7CB5FAA66575BEEA&invitationId=inv_bfed397a-4d5a-4494-a3c6-bc4bc14326bc&page=0_0#)
