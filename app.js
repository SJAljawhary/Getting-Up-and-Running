alert('welcome to our caffee !');

let customName = prompt('What\'s your name dear ?');
alert('Hi ' + customName + ' ! a nice name');


let drinkType = prompt('Do you want "hot coffee" or "cold coffee"?');

if (drinkType == 'hot coffee') {
    alert('A delecious one !' + customName);
    coffeeType = prompt('What coffee type do you want to order ?');
    alert('okay !')
    document.write(drinkType, coffeeType);
    console.log('Do you want "hot coffee" or "cold coffee"?', drinkType);
    console.log('What coffee type do you want to order ?', coffeeType);


} else if (drinkType == 'cold coffee') {
    alert('good choice !' + customName);
    coffeeType2 = prompt('What coffee type do you want to order ?');
    alert('okay !')
    document.write(drinkType, coffeeType2);
    console.log('Do you want "hot coffee" or "cold coffee"?', drinkType);
    console.log('What coffee type do you want to order ?', coffeeType2);

}


let sugarAmount = prompt('Do you want it: "with sugar" or "without sugar" ?');

if (sugarAmount == 'with sugar') {
    alert('okay !')
    spoonNum = prompt('How many sugar spoons do you want ?');
    alert('so ' + customName + ' you want ' + drinkType + ' with ' + spoonNum + ' spoons of sugar,your order will be prepared now !Please wait.');
    console.log('Do you want it: "with sugar" or "without sugar" ?', sugarAmount);
    console.log('How many sugar spoons do you want ?', spoonNum);
    document.write(sugarAmount);

} else if (sugarAmount == 'without sugar') {
    alert('okay !')
    alert('so ' + customName + ' you want ' + drinkType + ' without sugar' + ' your order will be prepared now !Please wait.');
    console.log('Do you want it: "with sugar" or "without sugar" ?', sugarAmount);
    console.log('How many sugar spoons do you want ?', spoonNum);
    document.write(sugarAmount);
}




