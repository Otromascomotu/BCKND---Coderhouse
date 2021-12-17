async function operaciones() {
  console.log(await operacion(1, 2, "suma"));
  console.log(await operacion(2, 3, "resta"));
}

async function operacion(num1: number, num2: number, operation: string) {
  try {
    let { Suma } = await import("./suma.js");
    let { Resta } = await import("./resta.js");

    if (operation === "suma") {
      let suma = new Suma(num1, num2);
      return suma.resultado();
    }
    if (operation === "resta") {
      let resta = new Resta(num2, num2);
      return resta.resultado();
    }
  } catch (error) {
    console.log(error);
  }
}

operaciones();