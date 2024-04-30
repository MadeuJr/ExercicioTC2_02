import { Linha } from '../../model/linha/linha';

export class LinhaService {
    private linhas: Linha[] = [];

    constructor() {}

    public newLinha(numero: string, ocupada: boolean): Linha | null {
        const linha = new Linha(numero, ocupada);
        if (linha.numero === '0') {
            console.error('Numero de linha inserido é inválido');
            return null;
        } else {
            this.linhas.push(linha);
            console.log('Linha inserida');
            return linha;
        }
    }

    public getLinhas(): Linha[] {
        return this.linhas;
    }

    public getLinhaByNumero(numero: string | null): Linha | null {
        return this.linhas.find((linha) => linha.numero === numero) || null;
    }

    public updateLinha(linha: Linha): boolean {
        const index = this.linhas.indexOf(linha);
        if (index !== -1) {
            this.linhas[index] = linha;
            return true;
        } else {
            return false;
        }
    }

    public deleteLinha(numero: string): boolean {
        const index = this.linhas.findIndex((linha) => linha.numero === numero);
        if (index !== -1) {
            this.linhas.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }
}
