// Variaveis
// Tipos de Variaveis

// Interage - INT
let idade = 38;

//String - STR
let nome = "Samuel"

console.log("Eu sou "+ nome +" e tenho "+ idade+ " Anos");

// Booleana - Bool
let logado = true

// Array e Objetos
let Onimusha_3_Demon_Siege = ["Samanosuke Akechi", 
    "Jacques Blanc"
];

console.log(Onimusha_3_Demon_Siege[0])

let personagem ={
    nome: "Samanosuke Akechi",
    nivel: 85,
    forca: 950,
    magia: 900,
    vida: 9200,
    mana: 8200,
}

console.log(personagem)

// Função e Metodos
function somar(a, b) {// Imput = Recebe tudo aquilo que o usuario manda.Exemplo: a, b
    let resultado = a + b;// Process = O metodo que o computador resolve a logica.Exemplo: 1 + 1
    return resultado // Output = E enfim retorna o resultado
}

let x = somar (15, 5)
let y = somar (65, 80)

console.log(x)
console.log(y)

// Arrow Function - Função Seta - Transforma uma Variavel em Função
let somar2 = (a, b) =>{
    let resultado = a + b
    return resultado
}

let y2 = somar2(365, 780)
console.log(y2)

// Condicionais - Sempre que algo der true, faça algo.
// Ou sempre que algo der false, também faça algo
if(idade >= 18) {
    console.log("Parabéns! Agora você pode ser preso")
} else{
    console.log("Parabéns! Agora você pode ir para FEBEM")
}

