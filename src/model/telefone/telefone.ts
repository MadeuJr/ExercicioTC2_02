import { Linha } from "../linha/linha";

export class Telefone {
    private _ligado: Boolean;
    private _linha: Linha | null;
    private _conexao: number;

    constructor(ligado: Boolean, linha: Linha | null, conexao: number) {
        this._ligado = ligado;
        this._linha = linha;
        this._conexao = conexao;
    }  

    /**
     * Getter conexao
     * @return {number}
     */
	public get conexao(): number {
		return this._conexao;
	}


    /**
     * Getter ligado
     * @return {Boolean}
     */
    public get ligado(): Boolean {
        return this._ligado;
    }

    /**
     * Setter ligado
     * @param {Boolean} value
     */
    private set ligado(value: Boolean) {
        this._ligado = value;
    }

    /**
     * Getter linha
     * @return {Linha}
     */
    public get linha(): Linha | null {
        return this._linha;
    }

    /**
     * Setter linha
     * @param {Linha} value
     */
    public set linha(value: Linha | null) {
        this._linha = value;
    }

    /**
     * Liga o telefone
     * @memberof Telefone
     */
    public ligar() {
        this._ligado = true;
    }

    /**
     * Desliga o telefone
     *
     * @memberof Telefone
     */

    public desligar() {
        this._ligado = false;
    }
}
