class Comissao{

    public nome_do_vendedor:string;
    public total_de_vendas_no_mes:number;
    private _salario:number = 1100;

    constructor(nome_do_vendedor:string,total_de_vendas_no_mes:number ){
        this.nome_do_vendedor = nome_do_vendedor;
        this.total_de_vendas_no_mes = total_de_vendas_no_mes;
    }

    public calculaComissao():number{
        let retorno:number = 0;
        if ((this.total_de_vendas_no_mes > 5000 ) && (this.total_de_vendas_no_mes <= 10000)){
            let valor_faixa:number = this.total_de_vendas_no_mes - 5000;
            let valor_comissao:number = valor_faixa * 0.05; 
            retorno += valor_comissao;
        }else if ((this.total_de_vendas_no_mes > 10000 ) && (this.total_de_vendas_no_mes <= 30000)) {
            let valor_faixa:number = this.total_de_vendas_no_mes - 10000;
            let valor_comissao:number = (valor_faixa * 0.10) + (5000 * 0.05); 
            retorno += valor_comissao;
        }else if (this.total_de_vendas_no_mes > 30000){
            let valor_comissao:number = (this.total_de_vendas_no_mes * 0.20); 
            retorno += valor_comissao;
        }
        return retorno;
    }

    public salarioTotal():number{
        return (this.calculaComissao() + this._salario);
    }

}

export {Comissao}