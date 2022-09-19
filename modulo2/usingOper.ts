//Sumas y restas
import { Suma } from "./operacion.js";
import { Resta } from "./operacion.js";


const suma = new Suma();
const resta = new Resta();

suma.ValorA = 45;
suma.ValorB = 10;
suma.Sumar();

resta.ValorA = 10;
resta.ValorB = 45;
resta.Restar();

let resultado:string = "<h1> Resultado de la suma: " + suma.Resultado + "</h1>";
resultado += "<h1> Resultado de la resta: " + resta.Resultado + "</h1>";

resta.ValorA = 45;
resta.ValorB = 10;
resta.Restar();
resultado += "<h1> Nuevo Resultado de la resta: " + resta.Resultado + "</h1>";

const appDiv:HTMLElement = document.getElementById("app") as HTMLElement;
appDiv.innerHTML = resultado;