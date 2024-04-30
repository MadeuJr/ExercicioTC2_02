import { MensagemService } from '../../service/mensagem/mensagemService';
import { Mensagem } from '../mensagem/mensagem';
import { Telefone } from '../telefone/telefone';

export class SecretariaEletronica {
    private _status: boolean;
    private _telefone: Telefone | null;
    private _numero: number;

    constructor(status: boolean, telefone: Telefone | null, numero: number) {
        this._status = status;
        this._telefone = telefone;
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
     * Getter telefone
     * @return {Telefone}
     */
    public get telefone(): Telefone | null {
        return this._telefone;
    }

    /**
     * Setter telefone
     * @param {Telefone} value
     */
    public set telefone(value: Telefone | null) {
        this._telefone = value;
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

    public configurar(mensagem: string, mensagemService:MensagemService) {
        mensagemService.newMensagem(mensagem, this)
    }

    public reiniciar() {
        console.log('Reiniciando');
    }

    public reproduzir() {
        console.log('Reproduzindo');
    }
}
