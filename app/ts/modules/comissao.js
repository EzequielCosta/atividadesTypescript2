"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comissao = void 0;
var Comissao = /** @class */ (function () {
    function Comissao(nome_do_vendedor, total_de_vendas_no_mes) {
        this._salario = 1100;
        this.nome_do_vendedor = nome_do_vendedor;
        this.total_de_vendas_no_mes = total_de_vendas_no_mes;
    }
    Comissao.prototype.calculaComissao = function () {
        var retorno = 0;
        if ((this.total_de_vendas_no_mes > 5000) && (this.total_de_vendas_no_mes <= 10000)) {
            var valor_faixa = this.total_de_vendas_no_mes - 5000;
            var valor_comissao = valor_faixa * 0.05;
            retorno += valor_comissao;
        }
        else if ((this.total_de_vendas_no_mes > 10000) && (this.total_de_vendas_no_mes <= 30000)) {
            var valor_faixa = this.total_de_vendas_no_mes - 10000;
            var valor_comissao = (valor_faixa * 0.10) + (5000 * 0.05);
            retorno += valor_comissao;
        }
        else if (this.total_de_vendas_no_mes > 30000) {
            var valor_comissao = (this.total_de_vendas_no_mes * 0.20);
            retorno += valor_comissao;
        }
        return retorno;
    };
    Comissao.prototype.salarioTotal = function () {
        return (this.calculaComissao() + this._salario);
    };
    return Comissao;
}());
exports.Comissao = Comissao;
//# sourceMappingURL=comissao.js.map