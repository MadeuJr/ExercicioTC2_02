class Telefone {
    private _ligado: Boolean;
    private _linha: Linha;

    constructor(ligado: Boolean, linha: Linha) {
        this._ligado = ligado;
        this._linha = linha;
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
    public get linha(): Linha {
        return this._linha;
    }

    /**
     * Setter linha
     * @param {Linha} value
     */
    public set linha(value: Linha) {
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
