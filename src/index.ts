let cantidadTotal: number = Number(prompt("cuantos numeros quiere ingresar?"));
let numerosIngresados: number[] = new Array(cantidadTotal);
let cantidadNegativos: number = 0;
let cantidadPositivos: number = 0;
let cantidadCeros: number = 0;

for (let i: number = 0; i < cantidadTotal; i++) {
  let numeroIngresado = Number(prompt("Ingrese un numero"));
  numerosIngresados[i] = numeroIngresado;
  if (numeroIngresado === 0) {
    cantidadCeros++;
  } else if (numeroIngresado % 2 === 0) {
    cantidadPositivos++;
  } else if (numeroIngresado < 0) {
    cantidadNegativos++;
  }
}
console.log(cantidadCeros);
console.log(cantidadNegativos);
console.log(cantidadPositivos);
