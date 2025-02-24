const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD", () => {
  it("Debe devolver un status code 200 en GET /productos", async () => {
    const response = await request(server).get("/productos").send();

    expect(response.statusCode).toBe(200);
  });

  it("Debe devolver un array de productos", async () => {
    const response = await request(server).get("/productos").send();
    expect(response.body).toBeInstanceOf(Array);
  });

  it("Debe devolver un Objeto de un producto", async () => {
    const response = await request(server).get("/productos/1").send();
    expect(response.body).toBeInstanceOf(Object);
  });

  it("Debe agregar un nuevo producto", async () => {
    const id = Math.floor(Math.random() * 999);

    const nuevoProducto = { id, nombre: "Nuevo Producto" };

    const response = await request(server)
      .post("/productos")
      .send(nuevoProducto);

    expect(response.body).toContainEqual(nuevoProducto);
  });
});
