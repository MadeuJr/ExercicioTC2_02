import { Mensagem } from '../mensagem/mensagem';
import { Telefone } from '../telefone/telefone';

export class SecretariaEletronica {
    private _status: Boolean;
    private _telefone: Telefone;

    constructor(status: Boolean, telefone: Telefone) {
        this._status = status;
        this._telefone = telefone;
    }

    /**
     * Getter telefone
     * @return {Telefone}
     */
    public get telefone(): Telefone {
        return this._telefone;
    }

    /**
     * Setter telefone
     * @param {Telefone} value
     */
    public set telefone(value: Telefone) {
        this._telefone = value;
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

    public configurar(mensagem: Mensagem) {}

    public reiniciar() {
        // TODO fazer metodo reiniciar
    }

    public reproduzir() {
        // TODO fazer metodo reproduzir
    }
}
