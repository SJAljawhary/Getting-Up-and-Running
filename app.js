alert('welcome to our caffee !');

let customName = prompt('What\'s your name dear ?');
alert('Hi ' + customName);


let drinkType = prompt('Do you want "hot coffee" or "cold coffee"?');

if (drinkType == 'hot coffee') {
    alert('Hi ' + customName + '\n' + ' you want to order: ' + drinkType);
    coffeeType = prompt('What coffee type do you want to order ?');
    alert('Hi ' + customName + '\n' + 'you want to order: ' + drinkType + '\n' + ' your favourite type is: ' + coffeeType);
    document.write(drinkType + '\n' + coffeeType);
    console.log('Do you want "hot coffee" or "cold coffee"?', drinkType);
    console.log('What coffee type do you want to order ?', coffeeType);


} else if (drinkType == 'cold coffee') {
    alert('Hi ' + customName + '\n' + 'you want to order: ' + drinkType);
    coffeeType = prompt('What coffee type do you want to order ?');
    alert('Hi ' + customName + '\n' + 'you want to order: ' + drinkType + '\n' + ' your favourite type is: ' + coffeeType);
    document.write(drinkType + '\n' + coffeeType);
    console.log('Do you want "hot coffee" or "cold coffee"?', drinkType);
    console.log('What coffee type do you want to order ?', coffeeType);
}


let sugarAmount = prompt('Do you want it: "with sugar" or "without sugar" ?');

if (sugarAmount == 'with sugar') {
    alert('Hi ' + customName + '\n' + 'you want to order: ' + drinkType + '\n' + ' your favourite type is: ' + coffeeType + '\n' + ' you want it ' + sugarAmount);
    spoonNum = prompt('How many sugar spoons do you want ?');
    alert('Hi ' + customName + '\n' + 'you want to order: ' + drinkType + '\n' + ' your favourite type is: ' + coffeeType + '\n' + ' you want it ' + sugarAmount + '\n' + ' number of sugarspoons is ' + spoonNum);

    
    alert('Hi ' + customName + '\n' + 'you want to order: ' + drinkType + '\n' + ' your favourite type is: ' + coffeeType + '\n' + ' you want it ' + sugarAmount);
    order = prompt('do you want it here at lounge or takeaway ?');
    alert('Hi ' + customName + '\n' + 'you want to order: ' + drinkType + '\n' + ' your favourite type is: ' + coffeeType + '\n' + ' you want it ' + sugarAmount + '\n' + ' you want it ' + order);
    console.log('Do you want it: "with sugar" or "without sugar" ?', sugarAmount);
    console.log('How many sugar spoons do you want ?', spoonNum);
    document.write(sugarAmount + '\n' + order);

}

let cupsNumber = prompt('how many cups do you want ?');

if (cupsNumber <= '2') {
    alert('Hi ' + customName + '\n' + 'you want to order: ' + drinkType + '\n' + ' your favourite type is: ' + coffeeType + '\n' + ' you want it ' + sugarAmount + '\n' + ' you want it ' + order + '\n' + ' you want ' + '\n' + cupsNumber + '\n' + ' just wait for 5 minutes,please');
} else if (cupsNumber > '2') {
    alert('Hi ' + customName + '\n' + 'you want to order: ' + drinkType + '\n' + ' your favourite type is: ' + coffeeType + '\n' + ' you want it ' + sugarAmount + '\n' + ' you want it ' + order + '\n' + ' you want ' + '\n' + cupsNumber + '\n' + ' just wait for 10 minutes,please');
    document.write(cupsNumber);
    console.log('how many cups do you want ?', cupsNumber);


}





