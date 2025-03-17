
// chiedo di inserire la distanza desiderata
let chilometri = parseFloat(prompt("Inserisci quanti chilometri desideri percorrere"));
// chiedo di inserire l'età
let anni = parseInt(prompt("Inserisci quanti anni hai"));

// calcolo il prezzo del biglietto
let price = chilometri*0.21;

let finalPrice;

if(anni < 18){
    finalPrice = price * 0.8;
}
else if(anni > 65){
    finalPrice = price * 0.6;
}
else{
    finalPrice = price;
}

finalPrice = finalPrice.toFixed(2);
console.log(`Il prezzo finale del biglietto è ${finalPrice} euro`);