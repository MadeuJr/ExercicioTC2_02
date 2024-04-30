import { CampainhaService } from "./service/campainha/campainhaService";
import { LinhaService } from "./service/linha/linhaService";
import { MensagemService } from "./service/mensagem/mensagemService";
import { SecretariaEletronicaService } from "./service/secretariaEletronica/secretariaEletronicaService";
import { TelefoneService } from "./service/telefone/telefoneService";


const servicoLinhas = new LinhaService();
const servicoTelefones = new TelefoneService(servicoLinhas);
const servicoCampainha = new CampainhaService();
const servicoSecretaria = new SecretariaEletronicaService(servicoTelefones);
const servicoMensagem = new MensagemService(servicoSecretaria);


const linha1 = servicoLinhas.newLinha("12345678910", false)
const telefone1 = servicoTelefones.newTelefone(true, null)

const secretaria1 = servicoSecretaria.newSecretariaEletronica(true, telefone1);

secretaria1.configurar("banana", servicoMensagem);

console.log(servicoMensagem.getMensagens);

console.log(servicoLinhas.getLinhas());
console.log(servicoTelefones.getTelefones())
