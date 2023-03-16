function yardGreening(input){
    let a = input[0];

    let oneKvM = 7.61;
    let prercent = 0.18;

    let finalPrice = (a * oneKvM);
    let finalPricePercent = finalPrice * prercent;
    let discount = finalPrice - finalPricePercent;

    console.log(`The discount is: ${discount} lv.`);
    console.log(`The final price is: ${finalPricePercent} lv.`);
}

yardGreening(["550"]);
yardGreening(["150"]);