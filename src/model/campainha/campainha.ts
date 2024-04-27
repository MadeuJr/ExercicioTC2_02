class Campainha {
    private _status: boolean;

    constructor(status: boolean) {
        this._status = status;
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
        // TODO Fazer metodo tocar
    }

    public reiniciar() {
        // TODO Fazer metodo reiniciar
    }
}
