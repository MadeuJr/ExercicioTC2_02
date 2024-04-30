import { Mensagem } from '../../model/mensagem/mensagem';
import { SecretariaEletronica } from '../../model/secretariaEletronica/secretariaEletronica';
import { SecretariaEletronicaService } from '../secretariaEletronica/secretariaEletronicaService';

export class MensagemService {
    private mensagens: Mensagem[] = [];
    private secretariaSevice: SecretariaEletronicaService;

    constructor(secretariaSevice: SecretariaEletronicaService) {
        this.secretariaSevice = secretariaSevice;
    }

    public newMensagem(
        mensagemTexto: string,
        secretariaDonaMensagem: SecretariaEletronica
    ): void {
        const mensagem = new Mensagem(mensagemTexto, secretariaDonaMensagem);
        const index = this.secretariaSevice
            .getSecretariasEletronicas()
            .findIndex(
                (secretaria) => secretaria === mensagem.secretariaDonaMensagem
            );
        index !== 1
            ? this.mensagens.push(mensagem)
            : console.error(
                'Mensagem Não adicionada pois não pode ter uma mensagem sem secretária'
            );
        this.checkForInvalidSecretarias();
    }

    public getMensagens(): Mensagem[] {
        this.checkForInvalidSecretarias();
        return this.mensagens;
    }

    public getMensagemBySecretaria(secretaria: SecretariaEletronica): Mensagem | undefined {
        this.checkForInvalidSecretarias();
        return this.mensagens.find((mensagem) => {
            return mensagem.secretariaDonaMensagem === secretaria;
        });
    }

    private checkForInvalidSecretarias(): void {
        this.mensagens.forEach((mensagem) => {
            if (!this.secretariaSevice.getSecretariasEletronicas().includes(mensagem.secretariaDonaMensagem)) {
                this.mensagens.splice(this.mensagens.indexOf(mensagem), 1);
            }
        });
    }

    public deleteMensagemBySecretaria(secretaria: SecretariaEletronica){
        this.checkForInvalidSecretarias();
        this.mensagens = this.mensagens.filter((mensagem) => {
          mensagem.secretariaDonaMensagem !== secretaria
        })
    }

}
