import { Telefone } from "../telefone/telefone";

export class Campainha {
    private _status: boolean;
    private _numero: number;
    private _telefoneDono: Telefone | null;


    constructor(status: boolean, telefone: Telefone | null, numero: number) {
        this._status = status;
        this._telefoneDono = telefone;
        this._numero = numero;
    }


    /**
     * Getter numero
     * @return {number}
     */
	public get numero(): number {
		return this._numero;
	}

    /**
     * Setter numero
     * @param {number} value
     */
	public set numero(value: number) {
		this._numero = value;
	}


    /**
     * Getter telefoneDono
     * @return {Telefone }
     */
    public get telefoneDono(): Telefone | null {
        return this._telefoneDono;
    }

    /**
     * Setter telefoneDono
     * @param {Telefone } value
     */
    public set telefoneDono(value: Telefone) {
        this._telefoneDono = value;
    }


    /**
     * Getter status
     * @return {boolean}
     */
    public get status(): boolean {
        return this._status;
    }

    /**
     * Setter status
     * @param {boolean} value
     */
    public set status(value: boolean) {
        this._status = value;
    }

    public tocar() {
        console.log("Campainha tocando");
    }

    public reiniciar() {
        console.log("Campainha tocando de novo");
    }
}
