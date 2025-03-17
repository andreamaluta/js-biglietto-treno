
// chiedo di inserire la distanza desiderata
let chilometri = parseFloat(prompt("Inserisci quanti chilometri desideri percorrere"));
console.log(chilometri)
// chiedo di inserire l'età
let anni = parseInt(prompt("Inserisci quanti anni hai"));
console.log(anni)

// calcolo il prezzo del biglietto
let price = chilometri*0.21;
console.log(price);

let finalPrice;

if(anni < 18){
    finalPrice = price * 0.8;
    console.log(finalPrice);
}
else if(anni > 65){
    finalPrice = price * 0.6;
    console.log(finalPrice);
}
else{
    finalPrice = price;
}

finalPrice = finalPrice.toFixed(2);
console.log(`Il prezzo finale del biglietto è ${finalPrice} euro`);