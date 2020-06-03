/* ES6 Classes - parte 2
function teste(){

        //=============================================
        class humano{
            constructor(nome, idade){
                this._nome = nome;
                this._idade = idade;
            }

            get Nome(){
                return this._nome;
            }

            set Nome(valor){
                this._nome = valor;
            }

            get Idade(){return this._idade;}
            set Idade(valor){ this._idade = valor;}
        }

        let homem = new humano('Renan', 23);
        homem.Nome = 'Carlos';
        homem.Idade = 30;
        document.write(homem.Idade);

//Get e o Set são mecanismos mais adequados para alterarmos as propriedades da nossa classe
}

// function teste(){

//     //=============================================
//     class veiculo{
//         constructor(tipo){
//             this.tipo = tipo;
//         }

//         identificar(){
//             return 'Eu sou um ' + this.tipo;
//         }
//     }

//     //=============================================
//     class automovel extends veiculo{

//         mudarCaixaVelocidade(){
//             return 'Alterei para a marcha ré.';
//         }
//     }
    
//     //=============================================
//     class aviao extends veiculo{
//         definirAltitude(valor){
//             //lógica do código
//         }
//     }

//     let auto = new automovel('automóvel');
//     let plane = new aviao('avião');
//     document.write(plane.definirAltitude);

// }
*/

/*ES6 Classes parte 1
function teste(){

    class pessoa{
        
        constructor(nome, idade){
            this.nome = nome;
            this.idade = idade;
        }

        // falar(){
        //     return 'Eu falei';
        falar(texto){
            document.write(texto);
        }

        adicionar(x,y){
            return x + y;
        }

    }

    let eu = new pessoa('Renan', 23);
    //document.write(eu.nome + ' tem ' + eu.idade + ' anos de idade.');
    //document.write(eu.falar());

    //eu.falar('Olá a todos!');

    document.write(eu.adicionar(10,30));
}
*/

/*ES6 Template literals
    let elemento = document.getElementById('info');
    elemento.innerHTML = `Olá
                            Mundo!`;

    // let pessoa = {
    //     nome: "Renan"
    // };

    // let automovel = {
    //     marca: "Audi",
    //     ano: 2015
    // };

    // //let frase ="Olá, sr. " + pessoa.nome + ". O " + automovel.marca + " de " + automovel.ano + " é seu neste momento."
    // let frase = `Olá, sr. ${pessoa.nome}. O ${automovel.marca} de ${automovel.ano} é seu neste momento.`;

    // document.write(frase);

}
*/

/* ES6 Spread operator
function teste (){
    
    let pessoa = {
        nome: "renan",
        idade: 23,
        // falar: function(){ //ficou desnecessário colocar "function"
        //     return "Olá Mundo!";
        falar(){
            return "Olá Mundo!";
        }
    };
    document.write(pessoa.falar());

    //document.write(adicao(10,30)); //forma simplificada
    
    // let dados = [10,20,100];
    // let resultado = adicao(...dados);
    // document.write(resultado);

    // let frase = 'esta é uma frase';
    // //let caracteres = frase.split("");
    // let caracteres = [...frase];

    //let nomes1 = ["renan", "hanna"];
    // //let nomes2 = ["isaura", "helena"].concat(nomes1);
    //let nomes2 = ["isaura", "helena", ...nomes1];

    //document.getElementById('info').innerHTML = caracteres;



}

//function adicao(x, y, z = 50){
//    return x + y + z;
//}

*/

/* ES6 Destructuring
function teste(){
    
    let valores = [1,2,3]; //a e b ñ vão mudar. d será acrescentado. e será undefined
    let [a = 10, b = 10, c, d = 50, e] = valores;
    document.write(a + " - " + b + " - " + c + " - " + d + " - " + e);

    
    // let nomes = ["joao", "ana", "carlos"];
    // let [a,b] = nomes;
    // document.write(a + " - " + b);


    // var nomes = ["joao", "ana", "carlos"];
    // // var n1 = nomes[0];
    // // var n2 = nomes[1];
    // // var n3 = nomes[2];
    // var [n1, n2, n3] = nomes; //simplificação para fazer~
    // document.write(n1 + " - " + n2 + " - " + n3)
    
    // let pessoa = {
    //     nome: "Renan",
    //     idade: 23,
    //     nacionalidade: "brasileira"
    // };


    // // let nome = pessoa.nome;
    // // let idade = pessoa.idade;
    // // let nacionalidade = pessoa.nacionalidade;

    // let {nome, idade, nacionalidade} = pessoa;

    // document.write(nome);
    
}
*/

/* ES6 var, let e const
//==========================================
function testeVar() {

    var valor = 10;
    if(true){
        var valor = 20;
    }
    document.write(valor);
}

//=========================================
function testeLet(){

    let valor = 10;
    if(true){
        let valor = 30; //nasce e morre dentro desse código
    }
    document.write(valor);
}

//=========================================
function testeConst(){
    const pessoa = { //no caso de objeto não é tão constante assim~
        nome: "Renan",
        idade: 23
    };

pessoa.nome = "João"

    document.write("o nome é " + pessoa.nome + " e tem " + pessoa.idade + " anos de idade");

    //const valor = 10;
    //valor = 20;
    //document.write(valor);
}
*/

/* EVENTOS
function mouseOver(e){
    e.style.backgroundColor = "yellow";
}

function mouseOut(e){
    e.style.backgroundColor = "white";
}
    
function mouseClick(e){
    e.innerHTML = "Novo Texto";
}

function iniciar(){
    document.getElementById("botao").onclick = ApresentarData;
}
function ApresentarData(){
    document.getElementById("info").innerHTML = Date();
}
function teste(){
    document.write("Olá Mundo");
}

function alterar(e){
    e.innerHTML = "-----------";
}
*/

/* Manipulação do DOM 2.1
var elementos = document.querySelectorAll("h3.titulo");
elementos[1].innerHTML = "texto novo";

function teste(){
     // NO: https://lh3.googleusercontent.com/proxy/CszPlmjtp2ygghPLCPBshLdOBKzYhccmrROqbwCuXKNndjaaxAFo2m3fzn5vE7M126VXnfasSXq2RhICsXJ1rn2lcWFvJjcIcFme4LSFJFFUEVSS
     // YES: https://lh3.googleusercontent.com/proxy/guuGHQO0xOQ92ftW_wFeGj__UnHo5iHUaDkm5c6mGD4TGyk823oElrpEnqsIHZ1CahLsJlatKXR9OF0G4N34eJAcKCS9qsUo1AWpjw

     var elemento = document.getElementById("div2");
     var numero_imagens = elemento.getElementsByTagName("img").length;
     document.getElementById("info").innerHTML = numero_imagens;
 }
*/

/*Manipulação do DOM 2.0
     var elemento = document.getElementById("imagem");
     
     //analisa a imagem apresentada
     if(valor){
        elemento.setAttribute("src", "https://lh3.googleusercontent.com/proxy/CszPlmjtp2ygghPLCPBshLdOBKzYhccmrROqbwCuXKNndjaaxAFo2m3fzn5vE7M126VXnfasSXq2RhICsXJ1rn2lcWFvJjcIcFme4LSFJFFUEVSS")
        valor = false;
    } else {
        elemento.setAttribute("src", "https://lh3.googleusercontent.com/proxy/guuGHQO0xOQ92ftW_wFeGj__UnHo5iHUaDkm5c6mGD4TGyk823oElrpEnqsIHZ1CahLsJlatKXR9OF0G4N34eJAcKCS9qsUo1AWpjw")
        valor = true;
    }
 }
*/

 /* Exemplos de manipulação do DOM
 function teste(){
     //modificar um elemento
     document.getElementById("p1").innerHTML = "Parágrafo 1 modificado.";

     //modificar o estilo de um elemento
     var elemento = document.getElementById("p2");
     elemento.style.fontWeight = "bold";
     elemento.style.fontWeight = "red";
     elemento.innerHTML = "Alterado para cor vermelha e texto negrito.";

     //modificar visibilidade de um elemento
     var p3 = document.getElementById("p3");
     var p4 = document.getElementById("p4");
     p3.hidden = true;
     p4.innerHTML = "O parágrafo 3 foi escondido."

     //modificar um atributo de um elemento
     var link = document.getElementById("link");
     link.setAttribute("href", "http://www.imdb.com");

     //adicionar um atributo
     link.setAttribute("target", "_blank");

     //adicionar um novo elemento à página
     var novo = document.createElement("P");
     novo.innerHTML = "NOVO!"; //pode ficar abaixo
     document.body.appendChild(novo);

     //mudar elemento entre divs
     var imagem = document.getElementById("imagem");
     document.getElementById("div2").appendChild(imagem);
 }
 */
 
 /* HTML DOM e JS
 function teste(){
     //document.getElementById("primeiro").innerHTML = "Nova frase";
     //document.getElementsByClassName("uma").innerHTML = "Outra frase";

    // var elemento = document.getElementById("primeiro");
    // elemento.innerHTML = "Nova frase";

    var elementos = document.getElementsByClassName("uma");
    elementos[2].innerHTML = "Texto novo";

    var elemento = document.getElementById("segundo");
    elemento.style.color = "red";
 }
 */

/* Datas e Horas > get(buscar) and set(definir)
function teste(){

    //Datas e Horas
    var data = new Date();

    // var data_nascimento = new Date(ano, mes, dia, hora, minuto, segundo, milisegundo);
    var data_nascimento = new Date (2005, 11, 25);
    data_nascimento.setHours(12);

    document.getElementById('info').innerHTML = data_nascimento;
   
}
*/

/* Datas e Horas one
function teste(){

    //Datas e Horas
    var data = new Date();
    document.getElementById('info').innerHTML = data.getDate();
    
}
*/

/* CONTINUE and BREAK
function teste(){

    var valores =[2,4,6,8,10];
    var final = '';

    for( i=0; i < valores.length; i++){
        if(valores[i] == 8) continue; //pula a próxima linha e repete o ciclo
        //if(valores[i] == 8) break; //pula a linha e finaliza o ciclo
        final += valores [i] + '</br>';
    }

    document.getElementById('info').innerHTML = final;
}
*/

/* Circlo WHILE and DO WHILE
function teste(){

    var valor = 1;
    var final ='';

    while (valor <= 10){
        final +=valor + '-';
        valor++;
    }

    // do{
    //     final +=valor + '-';
    //     valor++;
    // }
    // while(valor < 1);

    document.getElementById('info').innerHTML = final;
}
*/

/* Circlo FOR IN
function teste(){
    var automovel = {
        marca: 'Mercedes',
        cor: 'vermelho',
        ano: 2017
    };

    var final ='';
    var item;
    for(item in automovel){
        final += automovel[item];
    }

    document.getElementById('info').innerHTML = final;
}
*/

/* Ciclo FOR
function teste(){

    var valores = [2,4,6,8,10];
    var final ='';
    //var i = 0; ~forma alternativa 

    for (i = 0; i < valores.length; i++){
        final += valores[i] + '</br>';
        //i++ ~forma alternativa 

    }

    // for( i = valores.length -1; i >=0; i--){
    //     final += valores[i] + '</br>';
    // }

    document.getElementById('info').innerHTML = final;
}
*/

/* Switch
function teste(){

    //fraco | mau - resultados negativos
    //bom | muito bom - resultados positivos

    var classificacao = 'bom';
    var resultado = '';

    switch (classificacao){

        case 'mau':
            resultado = "muito mal.";
            break;
        case 'fraco':
            resultado = "Teste com nota baixa";
            break;
        case 'bom':
            resultado = "tem uma boa nota";
            break;
        case "muito bom":
            resultado = "Excelente nota!";
            break;

            default:
                resultado = "Classificação não definida.";

    }

    document.getElementById('info').innerHTML = resultado;
}
*/

/*Condição ternária
function teste(){
    var humano = 'homem';
    var resultado = '';

    //resultado =  (x == 10) ? "verdadeiro" : "falso";

    document.getElementById('info').innerHTML = (humano == 'homem') ? "gênero masculino" : "gênero feminino";
}
*/

/*if else if...
function teste(){

    var x = 12;
    var y = 20;
    var resultado = '';

    if(x == 5){
        resultado = "resultado é 5"
    } else if (x == 10){
        resultado = "resultado é 10"
    } else if (x == 20){
        resultado = "resultado é 20"
    } else{
        resultado = "NÃO"
    }

    document.getElementById('info').innerHTML = resultado;
}
*/

/* if else
function teste(){
    var x = 10;
    var y = 20;
    var resultado = '';

    if( x == y || x >= 10 ){   
//A e B tem que ser verddadeiros com &&
//A e B tem que ser verddadeiros com ||
        resultado = 'verdadeiro';
    }else{
        resultado = 'falso';
    }

    document.getElementById('info').innerHTML = resultado;
}
*/

/* funções...
function teste(){
    var final = adicionar(120, 200);
    document.getElementById('info').innerHTML = final;
}

function adicionar(x, y){
    var resultado = x + y;
    return resultado;
}
*/

/* extra 
teste();
document.write(nome);

function teste(){
    nome = 'Renan Rodrigues';
}
*/

/* variável global
var nome = "João"; //variável global
function teste(){
    document.getElementById('info').innerHTML = nome;
}
*/

/* variável local
function teste(){
    var nome = 'João'; //variável local
    var idade = 43;
}

function teste2(){
    var nome = 'Carlos';
    //não tenho acesso a idade
}
*/

/* testando +=
function teste(){
    var nome = "Renan";
    var sobrenome = "Rey";
    nome += ' ' + sobrenome;
    document.getElementById('info').innerHTML = nome;
}
*/