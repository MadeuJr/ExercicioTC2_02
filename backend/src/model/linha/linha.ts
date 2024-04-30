import { parse, format } from 'telefone';

export class Linha {
    private _numero: string;
    private _ocupada: boolean;

    constructor(numero: string, ocupada: boolean) {
        if (this.checkNumeroLinha(numero) === false) {
            this._numero = '0';
            this._ocupada = false;
        } else {
            this._numero = format(numero);
            this._ocupada = ocupada;
        }
    }

    /**
     * Getter numero
     * @return {string}
     */
    public get numero(): string {
        return this._numero;
    }

    /**
     * Setter numero
     * @param {string} value
     */
    public set numero(value: string) {
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

    public discar(numeroLinha: string) {
        //TODO Fazer metodo discar
    }

    private checkNumeroLinha(numeroLinha: string): boolean {
        return parse(numeroLinha) ? true: false;
    }
}
