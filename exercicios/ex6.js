//CRIAR UM METODO PARA LER PROPRIEDADES DE UM OBJETO E
//EXIBIR SOMENTE AS PROPRIEDADES DO TIPO STRING QUE ESTAO NESSE ONJETO

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
}
exibirPropriedades(filme);
function exibirPropriedades(obj){
    for (prop in obj)
    if(prop in obj)
    if(typeof obj [prop] === 'string')
    console.log(prop, obj[prop])
}