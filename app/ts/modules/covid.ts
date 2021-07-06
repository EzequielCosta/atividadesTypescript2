class DadosCovid{

    private _media_de_casos_ha_14_dias:number;
    private _media_de_casos_hoje:number;

    constructor(media_de_casos_ha_14_dias:number, media_de_casos_hoje:number){
        this._media_de_casos_ha_14_dias = media_de_casos_ha_14_dias;
        this._media_de_casos_hoje = media_de_casos_hoje;
    }

    public calcularVariacao():number{
        let valor_variacao:number;
        valor_variacao = (100 * this._media_de_casos_hoje) / this._media_de_casos_ha_14_dias;
        valor_variacao -= 100;
        return valor_variacao;
    }


    public getClassificacao():string{
        let valor_variacao:number = this.calcularVariacao();
        let retorno:string;
        if (valor_variacao < 15 && valor_variacao > 7){
            retorno =  'Em Estabilidade';
        }else if (valor_variacao <= 7 ){
            retorno = 'Em Queda';
        }else if (valor_variacao >= 15 ){
            retorno = 'Em Alta';
        }   
        return retorno;
    }

}

export {DadosCovid}