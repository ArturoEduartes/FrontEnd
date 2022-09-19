/* eslint-disable @typescript-eslint/no-inferrable-types */
export class Cubierta {
    private cabinaTripulacion: boolean = false;
    private cabinaVuelo: boolean = false;
    private sistemaEmergencia: boolean = false;
    private numTanquesCombustible: number = 0;
    private numPuertasSalida: number = 0;

    public constructor(
        pcabinaTripulacion: boolean,
        pcabinaVuelo: boolean,
        psistemaEmergencia: boolean,
        pnumTanquesCombustible: number,
        pnumPuertasSalida: number
    ) {
        this.cabinaTripulacion = pcabinaTripulacion;
        this.cabinaVuelo = pcabinaVuelo;
        this.sistemaEmergencia = psistemaEmergencia;
        this.numTanquesCombustible = pnumTanquesCombustible;
        this.numPuertasSalida = pnumPuertasSalida;
    }
    public toString() {
        let mensaje = "Cubierta compuesta de: ";
        if (this.cabinaVuelo) {
            mensaje += " Cubierta de Vuelo,";
        }
        if (this.cabinaTripulacion) {
            mensaje += " Cubierta de Tripulacion,";
        }
        if (this.sistemaEmergencia) {
            mensaje += " Sistema de Emergencia,";
        }

        mensaje += this.numTanquesCombustible + "Tanques de Combustible, ";
        mensaje += this.numPuertasSalida + " Puertas de salida.";

        return mensaje;
    }
}
