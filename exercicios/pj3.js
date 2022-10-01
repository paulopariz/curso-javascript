// DIVISIVEL POR 3 => Fizz
// DIVISIVEL POR 5 => Buzz
//  DIVISIVEL POR 3 E 5 => FizzBuzz
//  NAO DIVISIVEL PO 3 E 5 => entrada
//  NAO É UM NUMERO => 'Nao é um numero'

const resultado = fizzBuzz('string');
console.log(resultado);

function fizzBuzz(entrada){
    if ( typeof entrada !== 'number')
        return 'Nao é um numero';

    if((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';

    if(entrada % 3 === 0)
        return 'Fizz';

    if(entrada % 5 === 0)
        return 'Buzz';


    return entrada;
}