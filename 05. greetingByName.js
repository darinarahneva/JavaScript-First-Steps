function greetingByName(input){
    let name = input[0];
    let age = Number(input[1]);
    console.log("Hello, " + name + " " + age + "!");
    console.log(`Hello, ${name} ${age}!`);
}

greetingByName(["Gosho", "30"])