import { Linha } from "../../model/linha/linha";

export class LinhaService {
    private linhas: Linha[] = [];
  
    constructor() {}
  
    criarLinha(numero: string, ocupada: boolean): Linha | null {
      const linha = new Linha(numero, ocupada);
      if (linha) {
        this.linhas.push(linha);
        return linha;
      } else {
        return null;
      }
    }
  
    getLinhas(): Linha[] {
      return this.linhas;
    }
  
    getLinhaByNumero(numero: string): Linha | null {
      return this.linhas.find((linha) => linha.numero === numero) || null;
    }
  
    updateLinha(linha: Linha): boolean {
      const index = this.linhas.indexOf(linha);
      if (index!== -1) {
        this.linhas[index] = linha;
        return true;
      } else {
        return false;
      }
    }
  
    deleteLinha(numero: string): boolean {
      const index = this.linhas.findIndex((linha) => linha.numero === numero);
      if (index!== -1) {
        this.linhas.splice(index, 1);
        return true;
      } else {
        return false;
      }
    }
  }