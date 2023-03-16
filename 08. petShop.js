function petShop(input){
    let footDogsPrice = 2.5;
    let foodCatsPrice = 4;

    let coutDogs = input[0];
    let countCats = input[1];

    let resultFoodDogs = coutDogs * footDogsPrice; 
    let resultFoodCats = countCats * foodCatsPrice;
    let result = resultFoodCats + resultFoodDogs;
    
    console.log(`${result} lv.`);
}

petShop(["5 ","4 "]);
petShop(["13","9"])