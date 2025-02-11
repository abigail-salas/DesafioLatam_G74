CREATE DATABASE farmacia;

\c farmacia

CREATE TABLE medicamentos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    stock INT,
    precio INT
);

INSERT INTO medicamentos (nombre, stock, precio) VALUES ('Paracetamol', 100, 100);