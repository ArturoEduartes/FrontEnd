//* Enumeracion Color
enum Color {
    Blanco,
    Rojo,
    Verde,
}

let a: number; //* Inferencia explicita

let b: string; //* inferencia explicita

const c = 101; //* Inferencia implicita

const list: string[] = ["pimientos", "papa", "tomate"];
const rocosos: boolean[] = [true, false, false, true];
const perdidos: any = [9, true, "asteroides"];
const diametro:[string,number]=['Saturno',116460];

const recursos: string[] = ["memoria", "disco", "procesador", "printer"];

const message = "This is my First Program in Typescript";

const colorAuto: Color = Color.Verde;

console.log("list " + list);

console.log("rocosos " + rocosos);

console.log("perdidos " + perdidos);

console.log("diametro " + diametro);

console.log("ColorAuto " + colorAuto);

console.log("recursos " + recursos);

console.log("message " + message);
