export class SecretariaEletronica {
    private _status: Boolean;

    constructor(status: Boolean) {
        this._status = status;
    }

    /**
     * Getter status
     * @return {Boolean}
     */
    public get status(): Boolean {
        return this._status;
    }

    /**
     * Setter status
     * @param {Boolean} value
     */
    public set status(value: Boolean) {
        this._status = value;
    }

    public configurar() {
        //TODO fazer metodo configurar
    }

    public reiniciar() {
        // TODO fazer metodo reiniciar
    }

    public reproduzir() {
        // TODO fazer metodo reproduzir
    }
}
