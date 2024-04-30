import { Linha } from '../../model/linha/linha';
import { Telefone } from '../../model/telefone/telefone';
import { LinhaService } from '../linha/linhaService';

export class TelefoneService {
    private telefones: Telefone[] = [];
    private linhaService: LinhaService;
    private conexaoCounter: number = 1;

    constructor(linhas: LinhaService) {
        this.linhaService = linhas;
    }

    public newTelefone(ligado: boolean, linha: Linha | null): Telefone {
        if (linha && this.linhaService.getLinhaByNumero(linha.numero)) {
            const telefone = new Telefone(ligado, linha, this.conexaoCounter);
            this.conexaoCounter++;
            this.telefones.push(telefone);
            console.log('Telefone inserido');
            return telefone;
        } else if (
            linha &&
            !this.linhaService.getLinhaByNumero(linha.numero)
        ) {
            const telefone = new Telefone(ligado, null, this.conexaoCounter);
            this.conexaoCounter++;
            this.telefones.push(telefone);
            console.log(
                'Telefone inserido mas a linha telefonica está invalida, telefone cadastrado sem uma linha'
            );
            return telefone;
        } else {
            const telefone = new Telefone(ligado, null, this.conexaoCounter);
            this.conexaoCounter++;
            this.telefones.push(telefone);
            console.log('Telefone sem linha telefonica inserido');
            return telefone;
        }
    }

    public getTelefones(): Telefone[] {
        return this.telefones;
    }

    public getTelefonebyConexao(conexao: number): Telefone | null {
        return (
            this.telefones.find((telefone) => telefone.conexao === conexao) ||
            null
        );
    }

    public deleteTelefone(conexao: number): boolean {
        const index = this.telefones.findIndex(
            (telefone) => telefone.conexao === conexao
        );
        if (index !== -1) {
            this.telefones.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }
}
