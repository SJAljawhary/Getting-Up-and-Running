alert('welcome to our caffee !')

let drinkType = prompt('do you want "hot coffee" or "cold coffee"?')
if( drinkType == 'hot coffee'){
    prompt('what coffee type do you want to order ?')
    alert('A delecious one !')
    document.write(drinkType);
}else if( drinkType == 'cold coffee'){
    alert('good choice !')
    document.write(drinkType);

}


let sugarAmount = prompt('Do you want it: "with sugar" or "without sugar" ?')
if(sugarAmount == 'with sugar'){
    prompt('how many sugar spoons do you want ?')
    alert('your order will be prepared now !Please wait.')
    console.log(sugarAmount);
}else if (sugarAmount == 'without sugar'){
    alert('your order will be prepared now !Please wait.')
    console.log(sugarAmount);
}




