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


const linha1 = servicoLinhas.newLinha("9332857252", false);
const linha2 = servicoLinhas.newLinha("6929241797", true);
const linha3 = servicoLinhas.newLinha("4927856121", false);
const linha4 = servicoLinhas.newLinha("3122496888", true);
const linha5 = servicoLinhas.newLinha("4735562065", false);

const telefone1 = servicoTelefones.newTelefone(true, null);
const telefone2 = servicoTelefones.newTelefone(false, linha1);
const telefone3 = servicoTelefones.newTelefone(true, null);
const telefone4 = servicoTelefones.newTelefone(false, linha4);
const telefone5 = servicoTelefones.newTelefone(true, linha3);

const secretaria1 = servicoSecretaria.newSecretariaEletronica(true, telefone1);
const secretaria2 = servicoSecretaria.newSecretariaEletronica(false, telefone2);
const secretaria3 = servicoSecretaria.newSecretariaEletronica(true, telefone3);
const secretaria4 = servicoSecretaria.newSecretariaEletronica(false, telefone4);
const secretaria5 = servicoSecretaria.newSecretariaEletronica(true, telefone5);


secretaria1.configurar("banana", servicoMensagem);
secretaria2.configurar("chocolate", servicoMensagem);
secretaria3.configurar("não liga mais", servicoMensagem);
secretaria4.configurar("pessego", servicoMensagem);
secretaria5.configurar("nimguem em casa", servicoMensagem);
secretaria1.configurar("goiaba", servicoMensagem);

const campainha1 = servicoCampainha.newCampainha(true, telefone1);
const campainha2 = servicoCampainha.newCampainha(true, telefone2);
const campainha3 = servicoCampainha.newCampainha(true, telefone3);
const campainha4 = servicoCampainha.newCampainha(true, telefone5);
const campainha5 = servicoCampainha.newCampainha(true, telefone4);


console.log(servicoMensagem.getMensagens());
console.log(servicoLinhas.getLinhas());
console.log(servicoTelefones.getTelefones());
console.log(servicoCampainha.getCampainhas());
console.log(servicoSecretaria.getSecretariasEletronicas());

export const linhas = servicoLinhas.getLinhas();
export const telefones = servicoTelefones.getTelefones();
export const secretarias = servicoSecretaria.getSecretariasEletronicas();
export const campainhas = servicoCampainha.getCampainhas();
export const mensagens = servicoMensagem.getMensagens();


