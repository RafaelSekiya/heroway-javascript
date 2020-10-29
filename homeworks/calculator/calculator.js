// Não permitir strings como valores (notificar o usuário) - OK

function verificarInput() {
    let input1 = document.getElementById('entrada-1').value;
    let input2 = document.getElementById('entrada-2').value;

    if(isNaN(input1) || isNaN(input2)){
        return false;
    }else{
        return true;
    }
}

// Implemente as funções de uma calculadora. - OK

// Soma
let btnSoma = document.getElementById('btn-soma');
btnSoma.addEventListener('click', () => {
    let input1 = document.getElementById('entrada-1').value;
    let input2 = document.getElementById('entrada-2').value;
    if(isNaN(input1) || isNaN(input2)){
        console.log("Informe apenas números!")
    }
    else{
        let resultado = parseFloat(input1) + parseFloat(input2);
        console.log(resultado);
    }
    /*
    if(verificarInput()){
        let resultado = parseFloat(input1) + parseFloat(input2);
        console.log(resultado);
    }else{
        console.log("Informe apenas números!")
    }
    */
 
})
// Subtração
let btnSubtracao = document.getElementById('btn-subtracao');
btnSubtracao.addEventListener('click', () => {
    let input1 = document.getElementById('entrada-1').value;
    let input2 = document.getElementById('entrada-2').value;
    
    if(isNaN(input1) || isNaN(input2)){
        console.log("Informe apenas números!")
    }
    else{
        let resultado = parseFloat(input1) - parseFloat(input2);
        console.log(resultado);
    }

})
// Multiplicação 
let btnMultiplica = document.getElementById('btn-multiplicacao');
btnMultiplica.addEventListener('click', () => {
    let input1 = document.getElementById('entrada-1').value;
    let input2 = document.getElementById('entrada-2').value;

    if(isNaN(input1) || isNaN(input2)){
        console.log("Informe apenas números!")
    }
    else{
        let resultado = parseFloat(input1) * parseFloat(input2);
        console.log(resultado);
    }

})



// Divisão - OK
// Não permitir divisões por zero. - OK
let btnDivisao = document.getElementById('btn-divisao');
btnDivisao.addEventListener('click', () => {
    let input1 = document.getElementById('entrada-1').value;
    let input2 = document.getElementById('entrada-2').value;

    if(isNaN(input1) || isNaN(input2)){
        console.log("Informe apenas números!")
    }
    else{
        if(input2 == 0){
            console.log("Divisão por 0 não permitida!");

        }else{
            let resultado = parseFloat(input1) / parseFloat(input2);
            console.log(resultado);
        }
    }

/*
    if(verificarInput()){
        if(input2 == 0){
            console.log('Divisão por 0 não aceita');
        }else{
            let resultado = parseFloat(input1) / parseFloat(input2);
            console.log(resultado);
        }
    }else{
        console.log("Informe apenas números!");
    }
*/
})

let btnClear = document.getElementById('btn-clear');
btnClear.addEventListener('click', () => {
    document.getElementById('entrada-1').value = "";
    document.getElementById('entrada-2').value = "";
  
})

