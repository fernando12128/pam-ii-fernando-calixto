// recapitulando a aula passada
let num1 = 2
const num2 = 3
var msg = "Ola Amigos ! esse é o numero: "

// console.log(msg,num1)
// let again = msg + num1
// console.log(again)

function soma () {
    let resultado = num1 + num2
    console.log(msg, resultado)
}

// soma() -

function somaComParametros(valor1, valor2){
    // console.log("O Resultado é:", valor1 + valor2) -
}

// somaComParametros(300,125) -

const multiplicacao = (n1, n2) => {
    return n1 * n2
    //arrow function precisa de um return para devolver o resultado dela
}
//precisa colocar dentro do console.log
// console.log(multiplicacao(2,3)) -


//json

let usuario = {
    nome:"João",
    idade:35,
    signo:"escopion",
    calvo: true
}

console.log(typeof usuario)
console.log(
    "nome:",usuario.nome,
    "\n idade:", usuario.idade
)


console.log(typeof usuario.calvo)
const nomes = ["joão", "oão"]

console.log(nomes)
console.log(typeof nomes)
console.log(nomes[0])



const somaMelhorada = (n1, n2)=>{
    let resultNvFuncao = '' 
    if(typeof n1 == 'number' && typeof n2 == 'number'){
        resultNvFuncao = n1 + n2
        return "Resultado:", resultNvFuncao
    }

    return "Valores invalidos favor inserir numeros"
}

console.log(somaMelhorada(6,9))
console.log(somaMelhorada(6,"99"))