function teste(){

    //propriedades
    //valor de PI
    document.getElementById('info').innerHTML = Math.PI;
    
    
    //métodos
    //absoluto - retorno positivo de qualquer valor
    var valor = -123;
    document.getElementById('info').innerHTML = Math.abs(valor);

    //raiz quadrada
    var valor = 4;
    //var resultado = Math.sqrt(valor);
    //document.getElementById('info').innerHTML = resultado;
    document.getElementById('info').innerHTML = Math.sqrt(valor);

    //raiz cúbica
    var valor = 345;
    document.getElementById('info').innerHTML = Math.cbrt(valor);

    //valor inteiro mais próximo por excesso >arredondar para o valor inteiro seguinte
    var valor = 10.1;
    document.getElementById('info').innerHTML = Math.ceil(valor);

    //valor inteiro mais próximo por defeito
    var valor = 10.1;
    document.getElementById('info').innerHTML = Math.floor(valor);

    //arredondamento de valores com casas decimais
    var valor = 10.5;
    document.getElementById('info').innerHTML = Math.round(valor);

    //remove as casas decimais > 'truncar' 
    var valor = 15.5324;
    document.getElementById('info').innerHTML = Math.trunc(valor);
    
    //valor de potência
    var valor = 3
    document.getElementById('info').innerHTML = Math.pow(valor, 3);

    //valores randômicos > calcular aleatoriamente um valor no intervalor 0 e 1.
    var valor = Math.random();
    document.getElementById('info'). innerHTML = valor;
    
    
    /* exemplo
    var min = 90;
    var max = 100;
    
    var valor = Math.trunc(Math.random() * (max - min)) + min;
    document.getElementById('info').innerHTML = valor;
    */
  







}
