import { SecretariaEletronica } from '../../model/secretariaEletronica/secretariaEletronica';
import { Telefone } from '../../model/telefone/telefone';
import { TelefoneService } from '../telefone/telefoneService';

export class SecretariaEletronicaService {
    private secretariasEletronicas: SecretariaEletronica[] = [];
    private telefoneService: TelefoneService;
    private numeroSecretarias: number = 1;

    constructor(telefoneService: TelefoneService) {
        this.telefoneService = telefoneService;
    }

    public newSecretariaEletronica(
        status: boolean,
        telefone: Telefone| null
    ): SecretariaEletronica{
        const secretariaEletronica = new SecretariaEletronica(status, telefone, this.numeroSecretarias);
        this.numeroSecretarias++;
        const index = this.telefoneService
            .getTelefones()
            .findIndex((tel) => secretariaEletronica.telefone === tel);
        if (index === -1) {
            secretariaEletronica.telefone = null;
            console.error(
                'Telefone invalido, secretária será inserida sem telefone'
            );
            this.secretariasEletronicas.push(secretariaEletronica);
            return secretariaEletronica;
        } else {
            this.secretariasEletronicas.push(secretariaEletronica);
            console.log('Secretaria eletronica inserida');
            return secretariaEletronica;
        }
    }

    public getSecretariasEletronicas(): SecretariaEletronica[] {
        return this.secretariasEletronicas;
    }

    public getSecretariaEletronicaByTelefone(
        telefone: Telefone
    ): SecretariaEletronica | null {
        return (
            this.secretariasEletronicas.find(
                (secretariaEletronica) => secretariaEletronica.telefone === telefone
            ) || null
        );
    }

    public updateSecretariaEletronicaBy(
        secretariaEletronica: SecretariaEletronica
    ): boolean {
        const index = this.secretariasEletronicas.indexOf(secretariaEletronica);
        if (index !== -1) {
            this.secretariasEletronicas[index] = secretariaEletronica;
            return true;
        } else {
            return false;
        }
    }

    public deleteSecretariabyTelefone(telefone: Telefone): void {
        this.secretariasEletronicas = this.secretariasEletronicas.filter(
            (secretariaEletronica) => secretariaEletronica.telefone !== telefone
        );
    }
}
