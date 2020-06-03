//==============================================
//OPERADORES ARITMÉTICOS
//==============================================

//sinais que permitem executar operações matemátocas
//ou concatenação de strings

/*
Operador    Descrição
------------------------
+           Adição
-           Subtração
*           Multiplicação
/           Divisão

%           Modulos (resto da divisão)
++          Incremento
--          Descremento
*/

var x = 10;
var y = 20;
var soma = x + y;
var substracao = x - y;
var produto = x * y;
var divisao = x / y;
var resto = x % y;

var posicao = 10;   //valor inicial
posicao++;          //10 + 1 = 11
posicao--;          //11 - 1 = 10

/*
Operador    Exemplo     Igual a
=           x = y         x = y
+=           x += y       x = x + y
-=           x -= y       x = x - y
*=           x *= y       x = x * y
/=           x /= y       x = x / y
%=           x %= y       x = x % y
*/

var x = 10, y = 20;
x += y;             //30
x = x + y;

var nome = "Renan";
var apelido = "Rey";
var nome_completo = nome + ' ' + apelido;
nome +=' ' + apelido;


//================================================
//OPERADORES DE COMPARAÇÃO
//================================================

// sinais que permitem comparar variáveis ou valores
// são utilizados em mecanismos de decisão do fluxo de execução

/*
Operador    Descrição
==          Igual ao valor
===         Igual em valor e em tipo
!=          Diferente do valor
!==         Diferente em valor e em tipo
>           Maior que o valor
<           Menor que o valor
>=          Maior ou igual ao valor
<=          Menor ou igual ao valor
?           Operador ternário (iremos ver em instruções condicionais)
*/


