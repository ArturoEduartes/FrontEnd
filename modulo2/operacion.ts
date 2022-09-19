// @filename opercion.ts
// SuperClase
class Operacion {
    protected valorA: number;
    protected valorB: number;
    protected resultado: number;


    constructor() {
        this.valorA = 0;
        this.valorB = 0;
        this.resultado = 0;
    }

    set ValorA(value: number) {
        this.valorA = value;
    }
    set ValorB(value: number) {
        this.valorB = value;
    }

    get Resultado(): number {
        return this.resultado;
    }
}

// SubClases
export class Suma extends Operacion {

    Sumar() {
        this.resultado = this.valorA + this.valorB;
    }
}

export class Resta extends Operacion {

    Restar() {
        this.resultado = this.valorA - this.valorB;
    }
}
