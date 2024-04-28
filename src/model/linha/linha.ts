import { parse, format } from 'telefone';

class Linha {
    private _numero: String;
    private _ocupada: boolean;

    constructor(numero: String, ocupada: boolean) {
       this._numero = numero;
        this._ocupada = ocupada;
    }

    /**
     * Getter numero
     * @return {String}
     */
	public get numero(): String {
		return this._numero;
	}

    /**
     * Setter numero
     * @param {String} value
     */
	public set numero(value: String) {
		this._numero = value;
	}

    /**
     * Getter ocupada
     * @return {boolean}
     */
    public get ocupada(): boolean {
        return this._ocupada;
    }

    /**
     * Setter ocupada
     * @param {boolean} value
     */
    public set ocupada(value: boolean) {
        this._ocupada = value;
    }

    public discar(numeroLinha: number) {
        //TODO Fazer metodo discar
    }

    private checkNumeroLinha(numeroLinha: String){

    }


}
