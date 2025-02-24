const sumar = (a, b) => a + b;

describe("Operaciones de aritmetica", () => {
  it("Debe sumar correctamente dos numeros", () => {
    const resultado = sumar(10, 20);

    expect(resultado).toBe(30);
  });
});
