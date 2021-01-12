charset="UTF-8"

// Variáveis
var nome = "Thaina Helena";
var idade = 25;
var frase = "Japão é o melhor país do mundo!";
var n1 = 5;
var n2 = 3;
var lista = ["uva", "pera", "abacaxi"];
var fruta = {nome: "maça", cor: "vermelha"}
var graos = [{nome: "arroz", preço: 8.99}, {nome: "castanha", preço: 10.89}, {nome: "ervilha", preço: 5.50}]
var count = 0;
var d = new Date();

// Alert (Script);
//alert(nome + ' tem ' + idade + ' anos');



console.log('#   Printar No Console (Elemento Inspecionar   #');
console.log(nome); 
console.log(idade);
console.log(' ');
console.log('------------------------------------------------');



console.log('#   Replace   #');
console.log(frase.replace("Japão", "Brasil"));
console.log(' ');
console.log('------------------------------------------------');


console.log('#   To Upper Case & to Lower Case   #');
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Operações Aritméticas   #');
console.log(n1 * n2);
console.log(' ');
console.log('------------------------------------------------');



console.log('#   Listas   #');
console.log(lista);
console.log(lista[2]);
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Adicionar Elemento a Lista   #');
console.log(lista.push("laranja"));
console.log(lista);
console.log(lista[1]);
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Subtrair Elemento Adicionado da Lista   #');
console.log(lista.pop());
console.log(lista);
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Tamanho da Lista   #');
console.log('O tamaho da lista: ' + lista.length);
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Inverter a Lista   #');
console.log('Lista Inversa: ' + lista.reverse());
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Trazer uma lista para String   #');
console.log('Lista: ' + lista);
console.log('Elemento 0 da lista: ' + lista[0]);
console.log('Lista em String: ' + lista.toString());
console.log('Elemento 0 da String: ' + lista.toString()[0]);
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Join em Lista   #');

console.log('Lista separada por traços: ' + lista.join(' - '));
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Dicionários   #');
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Dicionários com Listas   #');
console.log(graos);
console.log(graos[1].nome);
console.log(graos[2].preço);
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Estrutura SE   #');
if (idade >= 18) {
    console.log('Você é maior de idade!');
} else {
    console.log("Você é menor de idade!");
}
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Prompt de Comando   #');
var idade1 = prompt('Qual a sua idade?   ')
if (idade1 >= 18) {
    console.log('Você é maior de idade!');
} else {
    console.log("Você é menor de idade!");
}
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Estrutura WHILE   #');
while (count <= 5) {
    console.log(count);
    count = count + 1;
}
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Estrutura FOR   #');
for (count=0; count<=5; count++){
    console.log(count);
};
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Data Atual   #');
console.log(d);
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Mês Atual   #');
console.log(d.getMonth()+1);
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Minutos Atual   #');
console.log(d.getMinutes());
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Hora Atual   #');
console.log(d.getHours());
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Dia Atual   #');
console.log(d.getDate());
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Dia e Mês Atual   #');
console.log('Hoje é ' + d.getDate() + '/' + (d.getMonth()+1));
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Funções: Variável Externa [GLOBAL]   #');
function soma(a1, a2){
    return a1 + a2;
}
console.log((soma(5,10)));
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Funções: Variável Interna [LOCAL]   #');
function ValidaIdade(idade_usuario){
    if (idade_usuario >= 18){
        var validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade_usuario = 18;
    console.log(ValidaIdade(idade_usuario));
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Funções: Botão ALERT   #');
function botao1(){
    document.getElementById("agradecimento");
    alert('Obrigada por clicar!!!');
}   
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Funções: Botão ELEMENTO   #');
function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";
}   
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Funções: Botão REDIRECIONAR PÁGINA   #');
function redirecionar(){
    window.open("https://digitalinnovation.one/");
    /* Abrir na mesma aba ---> window.location.href = "https://digitalinnovation.one/";*/
}   
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Funções: Botão ONMOUSECOVER   #');
function trocar(){
    document.getElementById("trocar").innerHTML = "<b>Obrigada por passar o mouse!!!</b>";
}   
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Funções: Botão ONMOUSEOUT   #');
function voltar(){
    document.getElementById("trocar").innerHTML = "Passe o mouse aqui";
}   
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Funções: ONLOAD   #');
function carregamento(){
    alert('Página Carregada');
}   
console.log(' ');
console.log('------------------------------------------------');


console.log('#   Funções: ONCHANGE   #');
function funcaoChange(elemento){
    console.log(elemento.value)
}
console.log(' ');
console.log('------------------------------------------------');

