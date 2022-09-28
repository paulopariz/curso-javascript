//VARIAVEIS

let nome = 'Paulo';
let idade = 18;
let sexo = 'masculino';
//console.log(nome, idade, sexo)




//CONSTANTES - valores nao redefinidos

const precoProduto = 15;
//console.log (precoProduto)



//TIPOS PRIMITIVOS

let amigo = 'Joao' //string
let valor = 50; // number
let aprovado = true; //boolean
let sobrenome ; //undefined
let cor = null //redefinir um valor




//OBJETOS

let pessoa = { 
    nome: 'Diego',
    idade2: 12,
    reprovado: false,
};

//console.log(pessoa)




//ARRAYS

let valores = [23,44,99,true];
//console.log(valores [0])



//FUNCTIONS

let idUsuario = "112233";
function deletar(id){
    idUsuario = id;
};

//console.log(idUsuario);
//deletar("445566");
//console.log(idUsuario)


//TIPOS DE FUNCAO

//NAO DEVOLVE NADA

function dizerNome(){
    //console.log('Paulo');
}
dizerNome();



//RETORNA ALGO

function multiplicar(valor){
    return valor* 3;
}
//console.log(multiplicar(10));

let resultado = multiplicar(5);

//console.log(resultado)



//OPERADORES


//OPERADORES ARITIMRTICOS
let salario = 100;
// + , - , / , **

// console.log(salario + salario)
// console.log(salario - salario)
// console.log(salario * salario)
// console.log(salario / salario)
// console.log(2 ** 2)

// ++ --

let valorX = 50;
// valor = valor + valor;
//valor = valor - valor;

valor +=valor;
// console.log(valor)


//OPERADORES DE IGUALDADE
//IGUALDADE ESTRITA
// console.log(3 === 3);
// console.log('2' === 2);



//OPERADOR TERNARIO

//  Tem um cliente, 100 premium, comum

let pontos = 200;
let tipo = pontos > 100 ? 'premium' : 'comum';
// console.log(tipo);





//OPERADOS LOGICOS



// OPERADOR LOFIGO e -> &&
//RETORNAR TRUE SE OS DOIS OPERANDOS FOREM TRUE
// console.log(true && false);

let maiorDeIdade = true;
let carteiraDeTrabalho = true;
let aplicar = maiorDeIdade && carteiraDeTrabalho;

// console.log(aplicar)



//OPERADOR LOGICO ou -> ||
//RETORNAR TRUE SE UM DOS OPERANDO FOREM TRUE
let maiorDeIdade1 = false;
let carteiraDeTrabalho1 = false;
let aplicar1 = maiorDeIdade || carteiraDeTrabalho;

// console.log('pode aplicar ',aplicar1)


//OPERADOR NOT -> !
let candidatoRecusado = !aplicar;

// console.log('candidato recusado',candidatoRecusado);




//COMPARACOES NAO BOLEANOS 

//FALSY
//undefined
//null
//0
//false
//''
//NaN


//TRUTHY
let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

// console.log(corPerfil);







//IF , ELSE

//Se a hora estiver entre 06:00 ate 12:00 : Bom dia!
//Se estiver entre 12:00 ate 18:00 : Boa Tarde!
// Caso contrario : Boa Noite!


let hora = 22;

if (hora > 6 && hora < 12){
    console.log("Bom dia!");
}

else if (hora > 12 && hora < 18){
    console.log("Boa tarde!")
}

else{
    console.log("Boa noite!")
}