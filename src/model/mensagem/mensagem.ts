export class Mensagem {
    private _conteudo: String;

    constructor(conteudo: String) {
        this._conteudo = conteudo;
    }

    /**
     * Getter conteudo
     * @return {String}
     */
    public get conteudo(): String {
        return this._conteudo;
    }

    /**
     * Setter conteudo
     * @param {String} value
     */
    public set conteudo(value: String) {
        this._conteudo = value;
    }
}
