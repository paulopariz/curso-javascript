// Velocidade maxima de ate 40km
// a cada 5km acima do limite vice ganha 1 ponto
//caso pontos maior que 12 -> "Carteira suspendida"

velocidade(51)

function velocidade(velocidade){
    const velocidadeMax = 40;
    const KmPorPonto = 5;

    if(velocidade <= velocidadeMax)
    console.log('ok');

    else{
        const pontos = Math.floor(((velocidade - velocidadeMax) / KmPorPonto));
        if(pontos >= 12)
            console.log('Carteira suspensa');
            
        else
        console.log('Pontos',pontos);
    }

}