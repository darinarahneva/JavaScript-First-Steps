function projectsCreation(input){
    let architect = input[0];
    let numberHours = input[1];
    let result = 3 * numberHours;
    console.log(`The architect ${architect} will need ${result} hours to complete ${numberHours} project/s.`);
}

projectsCreation(["George ","4 "]);
projectsCreation(["Sanya ","9 "])