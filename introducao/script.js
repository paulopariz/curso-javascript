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
    //  console.log("Bom dia!");
}

else if (hora > 12 && hora < 18){
    //  console.log("Boa tarde!")
}

else{
    //  console.log("Boa noite!")
}


 //SWITCH CASE
let permissao; //comum, gerente, diretor
permissao = 'gerente'

switch(permissao){
    case 'comum':
    // console.log('usuario comum');
    break;

    case 'gerente':
    // console.log('ususario gerente');
    break;

    case 'diretor':
    //  console.log('usuario diretor');
    break;


    default:
    // console.log('usuario nao reconhecido')
}


//LAÇO/LOOOR FOR
//1.FOR
//2.WHILE
//3.DO..WHILE
//4.FOR.IN
//5.FOR..OF

//FOR
for( let i = 5;i >= 1; i-- ){
    if(i % 2 !== 0){
        // console.log(i);
    }
}



// while loop

let i = 5;

while(i >= 1){
    if(i % 2 !== 0){
    //    console.log(i);
    }
    i--;
}

//DO..WHILE
do {
    // console.log('digitando', i);
    i++;

}while(i < 10)


//FOR-IN
const pessoaY = {
    nomeX: 'Paulo',
    idadeX: 18
};

for(let chave in pessoaY){
    // console.log(chave,pessoaY['nomeX']);
}




//FOR-OF
const cores = ['vermelho', 'azul', 'verde'];

for(let cor of cores){
    // console.log(cor);
}


//Factory Functions

const celular = {
    marcaCelular : 'ASUS',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    },
    capacidadeBateria: 5000,
    ligar : function(){
        // console.log("Fazendo Ligação...")
    }
}

function criarCelular (marcaCelular, tamanhoTela,capacidadeBateria){
    return{
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            // console.log("Fazendo Ligação...")
        }
    }
}

const celular1 = criarCelular('Zenfone', 5.5,5000);
// console.log(celular1)


// MATH



// DATE




//CONSTRUCTOR FUNCTION

// Criar um objeto postagem
// titulo,mensagem, autor, visualizacoes, comentarios, estaaovivo

function Postagem(titulo,mensagem,autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this,comentarios = [],
    this.estaAoVivo = false
}

let postagem = new Postagem('a','b','c');
// console.log(postagem);



// INTRODUÇÃO A ARRAYS
// Add novos elementos
// Encontrar Elementos
// Remover Elementos
// Dividir elementos
// Dividir Arrays
// Combinar Arrays



// 1- ADCIONANDO ELEMENTOS
const numeros = [1,2,3];

//ADD NO INICIO
numeros.unshift(0);
// console.log(numeros);

//ADD NO MEIO
numeros.splice(1,0,'a');
// console.log(numeros);

//ADD NO FINAL
numeros.push(5);
// console.log(numeros);



// 2- ENCONTRAR ELEMENTOS(PRIMITIVOS)

const encontrarNumeros = [1,2,3,1,4];
// console.log(encontrarNumeros.indexOf(3));
// console.log(encontrarNumeros.lastIndexOf(1));

// console.log( encontrarNumeros.indexOf(2) !== -1);

// console.log(numeros.includes(2));



// 3- ENCONTRAR ELEMENTOS(TIPOS DE REFERENCIA)
const marcas = [
    {id:1 , nome: 'a'},
    {id:2 , nome: 'b'},
];

const marca = marcas.find(function(marca){
    return marca.nome === 'a';
});

// console.log(marca);



// 3- ARROW FUNCTIONS
const marcas2 = [
    {id:1, nome:'a'},
    {id:2, nome:'b'},
];

// console.log(marcas.find((marca) => marca.nome === 'a'));




// 4- REMOVER ELEMENTOS
const removerNumeroa = [1,2,3,4,5,6];

//remover no final
const ultimo = removerNumeroa.pop();
// console.log(ultimo);
// console.log(removerNumeroa);

//remover no inicio
const primeiro = removerNumeroa.shift();
// console.log(primeiro);
// console.log(removerNumeroa);

//remover no meio
const meio = removerNumeroa.splice(2,1);
// console.log(meio);
// console.log(removerNumeroa);



// 5- ESVAZIAR UM ARRAY
let esvaziarNumeros = [1,2,3,4,5,6];
let outros = esvaziarNumeros;

esvaziarNumeros.length = 0;
// console.log(esvaziarNumeros);
// console.log(outros)



// 6- COMBINANDO E CORTANDO ARRAYS
const primeiro1 = [1,2,3];
const segundo1 = [4,5,6];

//COMBINAR
const combinado = primeiro1.concat(segundo1);
// console.log(combinado);

//DIVIDIR
const cortado = combinado.slice();
// console.log(cortado);


//7- OPERADOR SPREAD
const primeiro2 = [1,2,3];
const segundo2 = [4,5,6];

//const combinado = primeiro.concat(segundo)
const combinado1 = [...primeiro2,'a', ...segundo2,'#'];
// console.log(combinado1);

//const cortado = combinado.slice()
const clonado = [...combinado1];
// console.log(clonado);


//8- Iterando um array
const numeros3 = [1,2,3,4,5];

//forEach
// numeros3.forEach((numero,indice) => console.log(numero,indice))


//9- combinando arrays
const numeros4 = [1,2,3,4,5];

const combinado2 = numeros4.join('.');
// console.log(combinado2);

const frase = "ola, seja muito bem vindo";
const resultado1 = frase.split(' ');
// console.log(resultado1);

// console.log(resultado1.join('.'));


