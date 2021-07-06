"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DadosCovid = void 0;
var DadosCovid = /** @class */ (function () {
    function DadosCovid(media_de_casos_ha_14_dias, media_de_casos_hoje) {
        this._media_de_casos_ha_14_dias = media_de_casos_ha_14_dias;
        this._media_de_casos_hoje = media_de_casos_hoje;
    }
    DadosCovid.prototype.calcularVariacao = function () {
        var valor_variacao;
        valor_variacao = (100 * this._media_de_casos_hoje) / this._media_de_casos_ha_14_dias;
        valor_variacao -= 100;
        return valor_variacao;
    };
    DadosCovid.prototype.getClassificacao = function () {
        var valor_variacao = this.calcularVariacao();
        var retorno;
        if (valor_variacao < 15 && valor_variacao > 7) {
            retorno = 'Em Estabilidade';
        }
        else if (valor_variacao <= 7) {
            retorno = 'Em Queda';
        }
        else if (valor_variacao >= 15) {
            retorno = 'Em Alta';
        }
        return retorno;
    };
    return DadosCovid;
}());
exports.DadosCovid = DadosCovid;
//# sourceMappingURL=covid.js.map