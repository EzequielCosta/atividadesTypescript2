import {Comissao} from "./modules/comissao"
import {DadosCovid} from "./modules/covid"



let estatistivaCovid:DadosCovid = new DadosCovid(50,55);
let estatistivaCovid2:DadosCovid = new DadosCovid(50,51);
let estatistivaCovid3:DadosCovid = new DadosCovid(50,70);

console.log(estatistivaCovid.calcularVariacao());
console.log(estatistivaCovid.getClassificacao());
console.log('\n');
console.log(estatistivaCovid2.calcularVariacao());
console.log(estatistivaCovid2.getClassificacao());
console.log('\n');
console.log(estatistivaCovid3.calcularVariacao());
console.log(estatistivaCovid3.getClassificacao());

console.log('\n');


let comissao:Comissao = new Comissao('Lucas',14000);
let comissao2:Comissao = new Comissao('Joao',6000);
let comissao3:Comissao = new Comissao('Maria',20000);
let comissao4:Comissao = new Comissao('Pedro',40000);

console.log(comissao.calculaComissao());
console.log(comissao.salarioTotal());
console.log('\n');
console.log(comissao2.calculaComissao());
console.log(comissao2.salarioTotal());
console.log('\n');
console.log(comissao3.calculaComissao());
console.log(comissao3.salarioTotal());
console.log('\n');
console.log(comissao4.calculaComissao());
console.log(comissao4.salarioTotal());