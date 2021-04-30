alert('welcome to our caffee !');

let customName = prompt('What\'s your name dear ?');
alert('Hi ' + customName + ' ! a nice name');


let drinkType = prompt('Do you want "hot coffee" or "cold coffee"?');

if( drinkType == 'hot coffee'){
  coffeeType =  prompt('What coffee type do you want to order ?');
    alert('A delecious one !' + customName );
    document.write(drinkType,coffeeType);
    console.log('What coffee type do you want to order ?',drinkType);


}else if( drinkType == 'cold coffee'){
    coffeeType2 =  prompt('What coffee type do you want to order ?');
    alert('good choice !'+ customName);
    document.write(drinkType,coffeeType2);
    console.log('What coffee type do you want to order' ,drinkType);

}


let sugarAmount = prompt('Do you want it: "with sugar" or "without sugar" ?');

if(sugarAmount == 'with sugar'){
   spoonNum = prompt('How many sugar spoons do you want ?');
    alert ('so ' + customName + ' you want ' + drinkType + ' with ' + spoonNum + ' spoons of sugar,your order will be prepared now !Please wait.');
    console.log('How many sugar spoons do you want ?',sugarAmount);
    document.write(sugarAmount);

}else if (sugarAmount == 'without sugar'){
    alert ('so ' + customName + ' you want ' + drinkType + ' without sugar' +' your order will be prepared now !Please wait.');
    console.log('How many sugar spoons do you want ?',sugarAmount);
    document.write(sugarAmount);
}




