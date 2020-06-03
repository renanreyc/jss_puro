function teste(){

    //ARRAYS

    var frutos1 = ['banana', 'laranja', 'pêra', 'ananás'];
    var frutos2 = Array('banana', 'laranja', 'pêra', 'ananás');
    var frutos3 = Array.of('banana', 'laranja', 'pêra', 'ananás');
    document.getElementById('info').innerHTML = frutos1;

    //métodos
    //concat
    var nomes1 = ['nome1', 'nome2', 'nome3'];
    var nomes2 = ['nome4', 'nome5', 'nome6'];
    var nomes = nomes1.concat(nomes2);
    document.getElementById('info').innerHTML = nomes;

    //join
    document.getElementById('info').innerHTML = nomes.join(' | ');

    //push - adiciona no final
    nomes.push('nome7');
    document.getElementById('info').innerHTML = nomes;

    //pop - remove último
    nomes.pop();
    document.getElementById('info').innerHTML = nomes;

    //shift - remove ao início
    nomes.shift();
    document.getElementById('info').innerHTML = nomes;

    //unshift - adiciona ao início
    nomes.unshift('nome0');
    document.getElementById('info').innerHTML = nomes;

}