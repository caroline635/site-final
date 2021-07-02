


const nome = prompt ('Qual é o seu nome?');
const ano =  prompt ('Qual ano você nasceu?');
const idade = 2021 - ano;
alert ('Olá seu nome é  ' +  nome + ' e você tem ' + idade  + ' anos seja bem vindo(a) ao meu site ');

function mostrarNome() {
    let div = document.querySelector("#divBoasVindas");
    let inputNome = document.querySelector("#nome");
    let textoNovo = document.createTextNode(` Olá ${inputNome.value} seja muito bem vindo(a) ao meu site!! Espero que você goste!!`);
    
 
    div.appendChild(textoNovo);
}
 
function main(){
   alert("sc");
    let botaook = document.querySelector("#botao");
    botaook.onclick = MostrarNome;
    
}


