export class Turbina {

    private numTurbinas: number;

    public constructor(n: number) {
        this.numTurbinas = n;
    }

    public toString() {
        return this.numTurbinas + " Turbinas/s";
    }
}