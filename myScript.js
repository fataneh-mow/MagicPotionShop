"use strict";

// part 1 
//this part is easey made with variables and template literals is not that much complex so that I explain every line of code!
let userName = prompt("What is your name?");
let age = Number(prompt("How old are you?"));
let element = prompt("Choose your element: (fire, water, earth, air)");
let greeting = `Welcome ${userName}! at age ${age}, you are here to master ${element}`; //usage of template literals
alert(greeting);

// part 2 - stock setup made by Arrays, objects and the Methods of them 
let potions = ["Potion of Tides", " Flameheart Brew", " Dust of Roots", " Breath of Zephyr"];
let potionStock = {
    "Potion of Tides" : { quantity: 5, price: 12},
    "Flameheart Brew" : { quantity: 4, price: 10},
    "Dust of Roots" : { quantity: 8, price: 24},
    "Breath of Zephyr" : { quantity: 16, price: 35},
};

//declaring pouch, ... for later use
let gold = 0; // the variable to put the gold's amount
let potionsBrewed = 0; // the variable to save the brewed potion's amount in it
let customersServed = 0; // the variable storing the sold amount

// part 3 - when the customer orders and it gets accepted or rejected based on if-else statemets, switch and loops
for (let i = 1; i <= 3; i++) {// we take the i amount one because we want it to loop three times
    let premission = prompt("A customer is here! Take their order? (yes/no)").trim().toLowerCase(); //I used the trim and toLowerCse string metods to get sure that the answer gets accepted! events with spaces!
    if (premission.toLowerCase().trim() === "yes") { //here used strict equality - it turns true because premission is also a string 
        let menu = "Potion Menu:\n";  // using of escape characters /n for new line 
        for (let potion of potions) { //used this for loop to showcase the potionStock in a varaible of menu in a better way rather tan using template literal and a not readable result!
            menu += `${potion} - price:  ${potionStock[potion.trim()].price} \n`; // adds inside the menue the potion name and the price - we access to the price property form object to property and then the nested object of property
        }
        alert(menu); // alerting the llooped menu
        let choice = prompt("Which potion do you want?").trim();// this code is obviosly used to ask and the string function trim is also used for better ensuring
        if (potionStock[choice]) { // we are accessing to the choice which is telling if the choice ==> the choosen potion was avalialble in the potionStock object then
            if(potionStock[choice].quantity > 0) { // if the quantity of the choosen potion was greater than zero
                potionStock[choice].quantity--; // if true  then decrease the potion quantity by one
                //selling and earning
                gold += potionStock[choice].price; //inccreasment of gold per the potion sold
                customersServed++; // counts the number served customer
                alert(`You sold 1 ${choice} for ${potionStock[choice].price} gold!`); //used template literals
            } else {
                alert(`${choice} is out of stock!`); // if they choosed the wrong potion or a potion which does not exist - meaning if false this code run 
            }
        } else {
            alert(`That potion is not on the menu!`); // this is the neccessary one that can be helpful for both 
        };   
    } else {
        alert("Rejected the Customer 😥!"); // in case of not accepting the customer
    };
};


// 4ht part - functions, loops and Array Methods
function brewPotion(potionName, amount) { //function worked as wanted in the task
    potionName = potionName.trim(); // it might be neccessary in future just for being conservative
    if (potionStock[potionName]) { //if this was true I mean it was avaliable
        potionStock[potionName].quantity += amount;// then increase the amount of potions in stock - amount is a parameter meaning as that much amount that the customer wants to add
        alert(`You brewed ${amount} ${potionName}. Total stock: ${potionStock[potionName].quantity}`); // this is also obvious - no need to extra explanations
    } else {
        alert("That potion is not on the menu!");// if the above condition was flase!
    }
};

for (let i = 1; i <= 3; i++) { // looping meaning asking the customer for threee times if they want to brew a potion 
    let brew = prompt("Do you want to brew a potion? (yes/no)"); // obvous doen't need to be explained
    if (!brew) {
        alert("Okay, skipping brewing.");
        continue; // used this to control the flow, can be used only inside a for and while loops, it skips the current iteration and goes to the next iteration 
    } // this is a false statement where the player rejects the brew function from first!

    if (brew.trim().toLowerCase() === "yes") { // if the statement was true
        let potionName = prompt(`Which potion do you want to brew?
    Potion of Tides, 
    Flameheart Brew, 
    Dust of Roots, 
    Breath of Zephyr`);
        if (!potionName) { // nested if - when the potionName was not equal to waht is in potions array
            alert("No potion entered.");
            continue; //skips the current iteration and goes
        }
        let amount = Number(prompt("How many do you want to brew?")); // obvious doesn't need explanation
        if (isNaN(amount) || amount <= 0) { // ensuring that the proccess of brewing gets continue when the amount value be entered as a ttrue one
            alert("Invalid number.");
            continue; // skips the current iteration and goes
        }
        brewPotion(potionName, amount); // invoking the function or calling it when the statement is true after all
        potionsBrewed += amount; // and finally when the function is done the new data goes to the posiotonBrewed variable
    } else { // if the statemnt gets false in any case
        alert("Okay, skipping brewing");
        break; // immediately exits form the entire loop
    }
};

// 5th part - end of the day and reports - made using objects - string Methods and most importantly the Destructuring!

let potionSummary = "Potions left in stock:\n"; // bulding a summary string
for (const [name, info] of Object.entries(potionStock)) { //Object.enteries letting us to destructure  - this form of code let us to destructure better
    potionSummary += `${name}: ${info.quantity} left\n`; // adds each potion and its remaining stock to the potionSummary variable
};
alert( // this is also obvoius - used tempelate literals for it to alert th e result ot the report 
    potionSummary +
    `\nTotal gold earned: ${gold}\n` +
    `Great job, ${userName}! You brewed ${potionsBrewed} potions and helped ${customersServed} customers today!`
);

// Thank you for your time and consederation for reading all of this code and ofcourse my long comments 😁!