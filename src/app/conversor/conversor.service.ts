import { Injectable } from "@angular/core";
import { Unidades } from "./unidades";

@Injectable()
export class ConversorService {
    constructor() { }

    getUnidades() {
        return Unidades.map((unidade) => unidade.unidade)
    }

    isNumber(n: any) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    }

    formatarUnidade(unidadeString: string) {
        const partes = unidadeString.split(' ')
        const valor = parseFloat(partes[0])

        if (!this.isNumber(valor)) {
            return null
        }
        const unidade = Unidades.filter((unidade) => partes[1].toLowerCase() === unidade.unidade)

        if (!unidade[0]) {
            return null
        }

        return {
            val: valor,
            uni: unidade[0].unidade
        }
    }

    converterParaUnidade(valor: number, recebido: string, tratado: string) {
        var conversao;
        conversao = valor / Unidades.find((unidade) => unidade.unidade === recebido).paraMetros
        conversao *= Unidades.find((unidade) => unidade.unidade === tratado).paraMetros
        return parseFloat(conversao.toFixed(6));
    }

}