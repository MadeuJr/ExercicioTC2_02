class Linha {
    private _ocupada: boolean;

    constructor(ocupada: boolean) {
        this._ocupada = ocupada;
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

}
