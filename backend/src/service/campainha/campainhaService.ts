import { Campainha } from '../../model/campainha/campainha';
import { Telefone } from '../../model/telefone/telefone';

export class CampainhaService {

    private campainhas: Campainha[] = [];
    private numeroCampainhas: number = 1;

    constructor() { }

    public newCampainha(status: boolean, telefoneDono: Telefone | null): Campainha | null {
        const campainha = new Campainha(status, telefoneDono, this.numeroCampainhas);
        this.numeroCampainhas++;
        this.campainhas.push(campainha);
        console.log('Campainha inserida');
        return campainha;

    }

    public getCampainhas(): Campainha[] {
        return this.campainhas;
    }

    public getCampainhaByNumero(numero: number): Campainha | null {
        return this.campainhas.find((campainha) => campainha.numero === numero) || null;
    }

    public updateCampainha(campainha: Campainha): boolean {
        const index = this.campainhas.indexOf(campainha);
        if (index !== -1) {
            this.campainhas[index] = campainha;
            return true;
        } else {
            return false;
        }
    }

    public deleteCampainha(numero: number): boolean {
        const index = this.campainhas.findIndex((campainha) => campainha.numero === numero);
        if (index !== -1) {
            this.campainhas.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

}