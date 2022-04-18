console.clear();
const prompt = require('prompt-sync')();

const historia = `
Um grande guerreiro precisa atravessar uma floresta infernal 
repleta de desafios e criaturas aterrorizantes para enfrentar 
e destruir o terrivel demónio que amaldicoou seu povo 
infestando seu vilarejo com pragas.\n`

console.log(historia);

let lista = [];
cont = 0;

console.log("Responda com [s] para SIM ou [n] para NÃO \n");


while (cont < 1){
    const questionOne = prompt('Você está levando uma espada? ').toLowerCase();
    if (questionOne === `s` || questionOne === `n`){
        lista.push(questionOne);
        cont++;
    } else {
        console.log("Resposta [INCORRETA], responda com [s] ou [n]")
    }
};

while (cont < 2) {
    const questionTwo = prompt('Você possui um mapa? ').toLowerCase();
    if (questionTwo === `s` || questionTwo === `n`){
        lista.push(questionTwo);
        cont++;
    } else {
        console.log("Resposta [INCORRETA], responda com [s] ou [n]")
    }
}

while(cont < 3){
    const questionThree = prompt('Você concertou sua armadura? ').toLowerCase();
    if (questionThree === `s` || questionThree === `n`){
        lista.push(questionThree);
        cont++;
    } else {
        console.log("Resposta [INCORRETA], responda com [s] ou [n]")
    }
};

while(cont < 4){
    const questionFour = prompt('Você comprou as poções? ').toLowerCase();
    if(questionFour === `s` || questionFour ===`n`){
        lista.push(questionFour);
        cont++;
    } else {
        console.log("Resposta [INCORRETA], responda com [s] ou [n]")
    }
};

while(cont < 5){
    const questionFive = prompt('Você pegou o escudo? ').toLowerCase();
    if(questionFive === `s` || questionFive === `n`){
        lista.push(questionFive);
        cont++;
    } else {
        console.log("Resposta [INCORRETA], responda com [s] ou [n]")
    }
};
    
let respostas = 0;
for(var i = 0; i < lista.length; i++){
    if (lista[i] == "s") respostas++;
};

/* console.log(lista)
console.log(respostas) */

if (respostas == 0) {
    console.log("Você falhou miseravelmente em salvar seu povo morreu na floresta")
} else if (respostas <= 2) {
    console.log("Você falhou, mas conseguiu fugir da floresta infernal")
} else if (respostas == 3) {
    console.log("Você atravessou a floresta mas foi derrotado pelo demónio")
} else if (respostas == 4) {
    console.log("Você venceu o demonio que amaldiçoou seu povo mas perdeu seu braço direito que empunhava a espada")
} else if (respostas == 5) {
    console.log("Você triunfa de maneira inquestionável matando o demónio malefico e seus feitos serão lembrados por muitas gerações")
};

console.log();
