function teste (){

    //ERROS
    somar (10,20)
    document.write(10 + 20);

    //try catch
    try{
        somar(10,20);
        document.write(10 + 20);
    } catch (error){
        document.write('aconteceu um erro - ' + error);
    }
    
    //=========================================
    //throw
    //valor tem que ser igual a 10
    var valor = 10;
    try {
        if(valor < 10) throw "inválido (menor que 10)";
        if(valor > 10) throw "inválido (maior que 10)";
        document.write("Valor correto");
    } catch (error) {
        document.write(error);
    }

    //=========================================
    //try catch finally

    var elemento = document.getElementById('info');
    try {
        //somar(10,20);
        elemento.innerHTML = "Estou dentro do try";
    } catch (error) {
        elemento.innerHTML = "Aconteceu um erro!";
    }   finally{
        elemento.innerHTML += "</br>Independente de tudo, estou executando";
    }

}
