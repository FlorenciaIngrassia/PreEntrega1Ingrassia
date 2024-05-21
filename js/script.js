let costoNoches = 0;
let noches = 0;
let costoTotal = 0;

saludar();
noches = prompt(
  "Ingresar el número de noches siendo el minimo 2 y máximo 10",
  0
);

while (validarNoches(noches)) {
  alert("Debe ingresar un numero de noches valido");
  noches = prompt(
    "Ingresar el número de noches siendo el minimo 2 y máximo 10",
    0
  );
}
costoTotal = calcularCosto(noches);

console.log("El valor de su reserva es :", costoTotal);
alert("El valor de su reserva es : " + costoTotal);

function saludar() {
  alert("Gracias por elegirnos! Vamos a calcular tu próximo viaje ");
}

function validarNoches(noches) {
  if (noches >= 2 && noches <= 10) {
    return false;
  } else {
    return true;
  }
}

function calcularCosto(noches) {
  costoNoches = 100;
  return costoNoches * noches;
}
