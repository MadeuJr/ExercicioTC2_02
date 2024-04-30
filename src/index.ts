import { LinhaService } from "./service/linha/linhaService";
import { TelefoneService } from "./service/telefone";

const servicoLinhas = new LinhaService();
const servicoTelefones = new TelefoneService(servicoLinhas);

servicoLinhas.newLinha("12345678910", false)
servicoTelefones.newTelefone(true, null)

console.log(servicoLinhas.getLinhas());
console.log(servicoTelefones.getTelefones())
