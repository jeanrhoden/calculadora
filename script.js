




function insert(num) {
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
    
}

function clean() {
    document.getElementById('resultado') .innerHTML = ""; 
}

function back() {

    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring( 0, resultado.length -1)
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}

























/*
 function insert(valor){
    resultado.innerHTML += valor;
}

function clean() {
    resultado.innerHTML = '';

}

function back() {
    if (resultado.textContent){  checando se tem algo dentro do resultado 
        let result = document.getElementById('resultado').innerHTML  Através da palavra-chave let podemos declarar variáveis com escopo de bloco, criamos a variavel resul que recebeu o valor contido em resultado, foi selecionado pelo ID 

        resultado.innerHTML = result.substring(0, result.length -1) pegamos o resultado, O método substring() retorna a parte da string entre os índices inicial e final, ou até o final da string, e pagamos o total começando do 0 e diminuimos -1, result.legth pega o tamanho.
    }
}

function igual() {
    var resultado = getElementById('resultado').innerHTML;
    if(resultado){

            document.getElementById('resultado').innerHTML = eval(resultado);
    }
*/ 