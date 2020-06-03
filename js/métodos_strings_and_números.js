
function teste(){

    var texto = 'Renan Rey';

    //lenght > número de caracteres que contem no texto
    document.getElementById('info').innerHTML = texto.length;

    //charAt > qual caractere tá na posição (10)
    var valor = texto.charAt(10);
    document.getElementById('info').innerHTML = valor;

    //includes > se o termo ('') está incluso na var texto; gerando V or F.
    var valor = texto.includes('nan');
    document.getElementById('info').innerHTML = valor;

    //repeat > repetir qnts vezes quer repetir um texto
    var texto = 'Ups!';
    var final = texto.repeat(10);
    // var final = 'i'.repeat(100);
    document.getElementById('info').innerHTML = final;

    //slice > corta a partir do (4) até o caractere (10)
    var texto = 'Esta frase é pequena.';
    var parte = texto.slice(4,10);
    document.getElementById('info').innerHTML = parte;

    //toUpperCase > transforma o texto em letra maiúsculas
    var texto = 'este texto está todo em minúsculos?!';
    document.getElementById('info').innerHTML = texto.toUpperCase();

    charCodeAt()
    concat()
    endsWith()
    fromCharCode()
    indexOF()
    lastindexOf()
    localecompare()
    match()
    replace()
    search()
    split()
    //etc... www.w3schools.com



}































