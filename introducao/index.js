 function imprimePrimeiro(){
    console.log("Primeiro")

 };
  function imprimeSegundo(){
    setTimeout(() => console.log("Segundo"), 1000); // espera 1 segundo
    
 };
  function imprimeTerceiro(){
    console.log("Terceiro")
 };

imprimePrimeiro();
imprimeSegundo();
imprimeTerceiro();