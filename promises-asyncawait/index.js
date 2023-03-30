/*Implementação de funções*/

function pedirBolo(){
    console.log("Pedindo bolo...");
    return new Promise (
        function (resolve, reject){
            setTimeout(() => {
                console.log("fazendo bolo...")
             resolve("Bolo de chocolate");
            }, 1000);
        }
    );
  
    
}

function festejar(bolo){
    console.log("Fazendo festa com " + bolo);
}

async function prepararFesta(){
    // Encomendar o bolo
    //let bolo = pedirBolo();
    //return bolo;
 
    /*pedirBolo().then(
        function(bolo){
            // Fazer a festa(festejar)
            festejar(bolo);
        }
    )*/

    let bolo = await pedirBolo();
    festejar(bolo)
}

function trabalhar(){
    console.log("trabalhando...")
}
function treinar(){
    console.log("treinando...")
}

function viajar(){
    console.log("viajando...")
}

/*Chamada de funções*/

// Preparar a festa
let bolo = prepararFesta();

// Trabalhar
trabalhar();

// Treinar 
treinar();

// Viajar
viajar();

