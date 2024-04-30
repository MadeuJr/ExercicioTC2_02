import { SecretariaEletronica } from "../secretariaEletronica/secretariaEletronica";

export class Mensagem {
    private _conteudo: String;
    private _secretariaDonaMensagem: SecretariaEletronica | null;

    constructor(conteudo: String, secretaria: SecretariaEletronica) {
        this._conteudo = conteudo;
        this._secretariaDonaMensagem = secretaria;
    }

    /**
     * Getter secretariaDonaMensagem
     * @return {SecretariaEletronica}
     */
	public get secretariaDonaMensagem(): SecretariaEletronica | null{
		return this._secretariaDonaMensagem;
	}

    /**
     * Setter secretariaDonaMensagem
     * @param {SecretariaEletronica} value
     */
	public set secretariaDonaMensagem(value: SecretariaEletronica) {
		this._secretariaDonaMensagem = value;
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
