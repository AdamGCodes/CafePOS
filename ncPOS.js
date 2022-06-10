

//List of data
const menuItems ={
    cake: {price: 4.50},
    baguette: {item: "Baguette", price: 5.50, options:{}},
    roll: {item: "Roll", price: 5.00, options:{}},
    sandwich: {item: "Sandwich", price: 4.50, options:{}},
    pizza: {item: "Slice of Pizza", price: 3.50, options:{}},
    doughnut: {item: "Doughnut", price: 3.50, options:{}},
    crisps: {item: "Crisps", price: 1.20, options:{}},
    wedges: {item: "Potato Wedges", price: 2.00, options:{}},
    coffee: {item: "Coffee", price: 1.50, options:{}},
    tea: {item: "Tea", price: 1.50, options:{}},
    hTea: {item: "Herbal Tea", price: 1.50, options:{}},
    iceCoffee: {item: "Ice Coffee", price: 3.00, options:{}},
    milkshake: {item: "Milkshake", price: 4.50, options:{}},
    juice: {item: "Fruit Juice", price: 1.20, options:{}},
    soda: {item: "Soft Drink", price: 1.50, options:{}},
    water: {item: "Bottled Water", price: 4.50, options:{}},
};

/*---------Hiding The Menu Items Until Table Number Is Entered----------*/

tableNum.addEventListener("change",hideItems);
function hideItems() {
    var hide = document.getElementById("itemList");
    if (hide.style.display === "none") {
      hide.style.display = "block";
    } else {
      hide.style.display = "none";
    }
  }

tableNum.addEventListener("change",hideTabNum);
function hideTabNum() {
    let hide = document.getElementById("tabNumAlign");
        if (hide.style.display === "none") {
            hide.style.display = "block";
        } else {
            hide.style.display = "none";
        }
        }

//!!!!!!!!!!!!!!!!!!SECTION FOR GETTING ORDER ITEMS ON BUTTON CLICK AND ADDING TO OVERAL ORDER!!!!!!!!

/*---------Initialising Global Variables----------*/
var thisOrder = [];//Overal order. All ordered items to be added to this. 
var dispOrder = [];
var runningTot =[];
var sentOrder =[];
const orderDisplay = document.getElementById("orderDisplay");

/*---------Setting Subtotal Screen----------*/
sum = 0;
subTotScrn.innerHTML = "£" + sum;

/*---------Setting Payment Screen----------*/
//payment = 0;
//payScrn.innerHTML ="£" + payment;


/*---------Table Numbers----------*/
tableNum.addEventListener("change",addTableNum);

function addTableNum(){//Table Number Function
    let tableNum = document.getElementById("tableNum").value;

    tabNumDisplay.innerText = tableNum;
}

/*---------Cake Ordering Section----------*/
addCake.addEventListener("click",cakeValidate);
addCake.addEventListener("click",cakeReset);

function cakeValidate(){
    let x = document.forms["cakeForm"]["cakeChoice"].value;
    let y = document.forms["cakeForm"]["cakeOptions"].value;
    let z = document.forms["cakeForm"]["cakeGF"].value;
    if (x == "" || y =="" || z ==""){
        alert("Please complete all fields.");
    }else{
        cakeChoices();
    }
}

function cakeChoices(){//Cake Function
    let cakeGF = document.getElementById("cakeGF").value;

    let cakeChoice = document.getElementById("cakeChoice" ).value;

    let cakeOption = document.getElementById("cakeOptions").value;

    let cakePrice = menuItems.cake.price;

    let thisCake = [
        cakeGF + "\n" + "Cake: " + cakeChoice + " " + cakeOption + 
        "\n" + 4.50];
        
    
    thisOrder.push([thisCake]);
    orderDisplay.innerHTML = thisOrder.join('\r\n');
    runningTot.push (cakePrice);
        
    const sum = runningTot.reduce((partialSum, a)=> partialSum + a, 0);

    subTotScrn.innerHTML = "£" + sum;
    //console.log(thisCake);
    //console.log(thisOrder);
    //console.log (cakePrice)
    //console.log(runningTot);
    //console.log(sum);
}

function cakeReset(){
    document.getElementById("cakeForm").reset();
}

/*---------Baguette Ordering Section----------*/
addBaguette.addEventListener("click",baguetteValidate);
addBaguette.addEventListener("click",baguetteReset);

function baguetteValidate(){
    let x = document.forms["baguetteForm"]["baguetteChoice"].value;
    let y = document.forms["baguetteForm"]["baguetteOptions"].value;
    let z = document.forms["baguetteForm"]["baguetteGF"].value;
    if (x == "" || y =="" || z ==""){
        alert("Please complete all fields.");
    }else{
        baguetteChoices();
    }
}

function baguetteChoices(){//Baguette Function
    let baguetteGF = document.getElementById("baguetteGF").value;

    let baguetteChoice = document.getElementById("baguetteChoice" ).value;

    let baguetteOption = document.getElementById("baguetteOptions").value;

    let baguettePrice = menuItems.baguette.price;

    let thisBaguette = [
        baguetteGF + "\n" + "Baguette: " + baguetteChoice + " " + baguetteOption + 
        "\n" + menuItems.baguette.price + "\n"];
        
    
    thisOrder.push([thisBaguette]);
    orderDisplay.innerHTML = thisOrder.join('\r\n');
    runningTot.push (baguettePrice);
        
    const sum = runningTot.reduce((partialSum, a)=> partialSum + a, 0);

    subTotScrn.innerHTML = "£" + sum;
    //console.log(thisCake);
    //console.log(thisOrder);
    //console.log (cakePrice)
    //console.log(runningTot);
    //console.log(sum);
}

function baguetteReset(){
    document.getElementById("baguetteForm").reset();
}

/*---------Roll Ordering Section----------*/
addRoll.addEventListener("click",rollValidate);
addRoll.addEventListener("click",rollReset);

function rollValidate(){
    let x = document.forms["rollForm"]["rollChoice"].value;
    let y = document.forms["rollForm"]["rollOptions"].value;
    let z = document.forms["rollForm"]["rollGF"].value;
    if (x == "" || y =="" || z ==""){
        alert("Please complete all fields.");
    }else{
        rollChoices();
    }
}

function rollChoices(){//Roll Function
    let rollGF = document.getElementById("rollGF").value;

    let rollChoice = document.getElementById("rollChoice" ).value;

    let rollOption = document.getElementById("rollOptions").value;

    let rollPrice = menuItems.roll.price;

    let thisRoll = [
        rollGF + "\n" + "Roll: " + rollChoice + " " + rollOption + 
        "\n" + menuItems.roll.price + "\n"];
        
    
    thisOrder.push([thisRoll]);
    orderDisplay.innerHTML = thisOrder.join('\r\n');
    runningTot.push (rollPrice);
        
    const sum = runningTot.reduce((partialSum, a)=> partialSum + a, 0);

    subTotScrn.innerHTML = "£" + sum;
}

function rollReset(){
    document.getElementById("rollForm").reset();
}

/*---------Sandwich Ordering Section----------*/
addSandwich.addEventListener("click",sandwichValidate);
addSandwich.addEventListener("click",sandwichReset);

function sandwichValidate(){
    let x = document.forms["sandwichForm"]["sandwichChoice"].value;
    let y = document.forms["sandwichForm"]["sandwichOptions"].value;
    let z = document.forms["sandwichForm"]["sandwichGF"].value;
    if (x == "" || y =="" || z ==""){
        alert("Please complete all fields.");
    }else{
        sandwichChoices();
    }
}

function sandwichChoices(){//Sandwich Function
    let sandwichGF = document.getElementById("sandwichGF").value;

    let sandwichChoice = document.getElementById("sandwichChoice" ).value;

    let sandwichOption = document.getElementById("sandwichOptions").value;

    let sandwichPrice = menuItems.sandwich.price;

    let thisSandwich = [
        sandwichGF + "\n" + "Sandwich: " + sandwichChoice + " " + sandwichOption + 
        "\n" + menuItems.sandwich.price + "\n"];
        
    
    thisOrder.push([thisSandwich]);
    orderDisplay.innerHTML = thisOrder.join('\r\n');
    runningTot.push (sandwichPrice);
        
    const sum = runningTot.reduce((partialSum, a)=> partialSum + a, 0);

    subTotScrn.innerHTML = "£" + sum;
}

function sandwichReset(){
    document.getElementById("sandwichForm").reset();
}

/*---------Pizza Ordering Section----------*/
addPizza.addEventListener("click",pizzaValidate);
addPizza.addEventListener("click",pizzaReset);

function pizzaValidate(){
    let x = document.forms["pizzaForm"]["pizzaChoice"].value;
    let z = document.forms["pizzaForm"]["pizzaGF"].value;
    if (x == "" || z ==""){
        alert("Please complete all fields.");
    }else{
        pizzaChoices();
    }
}

function pizzaChoices(){//Pizza Function
    let pizzaGF = document.getElementById("pizzaGF").value;

    let pizzaChoice = document.getElementById("pizzaChoice" ).value;

    let pizzaPrice = menuItems.pizza.price;

    let thisPizza = [
        pizzaGF + "\n" + "Pizza: " + pizzaChoice + 
        "\n" + menuItems.pizza.price + "\n"];
        
    
    thisOrder.push([thisPizza]);
    orderDisplay.innerHTML = thisOrder.join('\r\n');
    runningTot.push (cakePrice);
        
    const sum = runningTot.reduce((partialSum, a)=> partialSum + a, 0);

    subTotScrn.innerHTML = "£" + sum;
}

function pizzaReset(){
    document.getElementById("pizzaForm").reset();
}

/*---------Doughnut Ordering Section----------*/
addDoughnut.addEventListener("click",doughnutValidate);
addDoughnut.addEventListener("click",doughnutReset);

function doughnutValidate(){
    let x = document.forms["doughnutForm"]["doughnutChoice"].value;
    if (x == ""){
        alert("Please complete all fields.");
    }else{
        doughnutChoices();
    }
}

function doughnutChoices(){//Doughnut Function
   
    let doughnutChoice = document.getElementById("doughnutChoice" ).value;

    let doughnutPrice = menuItems.doughnut.price;

    let thisDoughnut = [
        "Doughnut: " + doughnutChoice + 
        "\n" + menuItems.doughnut.price + "\n"];
        
    
    thisOrder.push([thisDoughnut]);
    orderDisplay.innerHTML = thisOrder.join('\r\n');
    runningTot.push (doughnutPrice);
        
    const sum = runningTot.reduce((partialSum, a)=> partialSum + a, 0);

    subTotScrn.innerHTML = "£" + sum;
}

function doughnutReset(){
    document.getElementById("doughnutForm").reset();
}

/*---------Crisps Ordering Section----------*/
addCrisps.addEventListener("click",crispsValidate);
addCrisps.addEventListener("click",crispsReset);

function crispsValidate(){
    let x = document.forms["crispsForm"]["crispsChoice"].value;
    if (x == ""){
        alert("Please complete all fields.");
    }else{
        crispsChoices();
    }
}

function crispsChoices(){//Crisps Function

    let crispsChoice = document.getElementById("crispsChoice" ).value;

    let crispsPrice = menuItems.crisps.price;

    let thisCrisps = [
        "Crisps: " + crispsChoice + 
        "\n" + menuItems.crisps.price + "\n"];
        
    
    thisOrder.push([thisCrisps]);
    orderDisplay.innerHTML = thisOrder.join('\r\n');
    runningTot.push (crispsPrice);
        
    const sum = runningTot.reduce((partialSum, a)=> partialSum + a, 0);

    subTotScrn.innerHTML = "£" + sum;
}

function crispsReset(){
    document.getElementById("crispsForm").reset();
}

/*---------Wedges Ordering Section----------*/
addWedges.addEventListener("click",wedgesValidate);
addWedges.addEventListener("click",wedgesReset);

function wedgesValidate(){
    let x = document.forms["wedgesForm"]["wedgesChoice"].value;
    let y = document.forms["wedgesForm"]["wedgesOptions"].value;
    if (x == "" || y ==""){
        alert("Please complete all fields.");
    }else{
        wedgesChoices();
    }
}

function wedgesChoices(){//Wedges Function

    let wedgesChoice = document.getElementById("wedgesChoice" ).value;

    let wedgesOption = document.getElementById("wedgesOptions").value;

    let wedgesPrice = menuItems.wedges.price;

    let thisWedges = [
        "Wedges: " + wedgesChoice + " " + wedgesOption + 
        "\n" + menuItems.wedges.price + "\n"];
        
    
    thisOrder.push([thisWedges]);
    orderDisplay.innerHTML = thisOrder.join('\r\n');
    runningTot.push (wedgesPrice);
        
    const sum = runningTot.reduce((partialSum, a)=> partialSum + a, 0);

    subTotScrn.innerHTML = "£" + sum;
}

function wedgesReset(){
    document.getElementById("wedgesForm").reset();
}

/*---------Coffee Ordering Section----------*/
addCoffee.addEventListener("click",coffeeValidate);
addCoffee.addEventListener("click",coffeeReset);

function coffeeValidate(){
    let x = document.forms["coffeeForm"]["coffeeChoice"].value;
    let y = document.forms["coffeeForm"]["coffeeOptions"].value;
    if (x == "" || y ==""){
        alert("Please complete all fields.");
    }else{
        coffeeChoices();
    }
}

function coffeeChoices(){//Coffee Function
    
    let coffeeChoice = document.getElementById("coffeeChoice" ).value;

    let coffeeOption = document.getElementById("coffeeOptions").value;

    let coffeePrice = menuItems.coffee.price;

    let thisCoffee = [
        "Coffee: " + coffeeChoice + " " + coffeeOption + "\n" 
        + menuItems.coffee.price + "\n"];
        
    
    thisOrder.push([thisCoffee]);
    orderDisplay.innerHTML = thisOrder.join('\r\n');
    runningTot.push (coffeePrice);
        
    const sum = runningTot.reduce((partialSum, a)=> partialSum + a, 0);

    subTotScrn.innerHTML = "£" + sum;
}

function coffeeReset(){
    document.getElementById("coffeeForm").reset();
}

/*---------Tea Ordering Section----------*/
addTea.addEventListener("click",teaValidate);
addTea.addEventListener("click",teaReset);

function teaValidate(){
    let x = document.forms["teaForm"]["teaChoice"].value;
    let y = document.forms["teaForm"]["teaOptions"].value;
    if (x == "" || y ==""){
        alert("Please complete all fields.");
    }else{
        teaChoices();
    }
}

function teaChoices(){//Tea Function
    
    let teaChoice = document.getElementById("teaChoice" ).value;

    let teaOption = document.getElementById("teaOptions").value;

    let teaPrice = menuItems.tea.price;

    let teaDisplay = document.getElementById("orderDisplay");

    let thisTea = [
        "Tea: " + teaChoice + " " + teaOption + "\n" 
        + menuItems.tea.price + "\n"];
        
    
    thisOrder.push([thisTea]);
    orderDisplay.innerHTML = thisOrder.join('\r\n');
    runningTot.push (teaPrice);
        
    const sum = runningTot.reduce((partialSum, a)=> partialSum + a, 0);

    subTotScrn.innerHTML = "£" + sum;
}

function teaReset(){
    document.getElementById("teaForm").reset();
}

/*---------Herbal Tea Ordering Section----------*/
addHTea.addEventListener("click",hTeaValidate);
addHTea.addEventListener("click",hTeaReset);

function hTeaValidate(){
    let x = document.forms["hTeaForm"]["hTeaChoice"].value;
    if (x == ""){
        alert("Please complete all fields.");
    }else{
        hTeaChoices();
    }
}

function hTeaChoices(){//Herbal Tea Function
    
    let hTeaChoice = document.getElementById("hTeaChoice" ).value;

    let hTeaPrice = menuItems.hTea.price;

    let thisHTea = [
        "Herbal Tea: " + hTeaChoice + "\n" 
        + menuItems.hTea.price + "\n"];
        
    
    thisOrder.push([thisHTea]);
    orderDisplay.innerHTML = thisOrder.join('\r\n');
    runningTot.push (hTeaPrice);
        
    const sum = runningTot.reduce((partialSum, a)=> partialSum + a, 0);

    subTotScrn.innerHTML = "£" + sum;
}

function hTeaReset(){
    document.getElementById("hTeaForm").reset();
}

/*---------Ice Coffee Ordering Section----------*/
addIceCoffee.addEventListener("click",iceCoffeeValidate);
addIceCoffee.addEventListener("click",iceCoffeeReset);

function iceCoffeeValidate(){
    let x = document.forms["iceCoffeeForm"]["iceCoffeeChoice"].value;
    let y = document.forms["iceCoffeeForm"]["iceCoffeeOptions"].value;
    if (x == "" || y ==""){
        alert("Please complete all fields.");
    }else{
        iceCoffeeChoices();
    }
}

function iceCoffeeChoices(){//Ice Coffee Function
    
    let iceCoffeeChoice = document.getElementById("iceCoffeeChoice" ).value;

    let iceCoffeeOption = document.getElementById("iceCoffeeOptions").value;

    let iceCoffeePrice = menuItems.iceCoffee.price;

    let thisIceCoffee = [
        "Iced Coffee: " + iceCoffeeChoice + " " + iceCoffeeOption + "\n" 
        + menuItems.iceCoffee.price + "\n"];
         
    thisOrder.push([thisIceCoffee]);
    orderDisplay.innerHTML = thisOrder.join('\r\n');
    runningTot.push (iceCoffeePrice);
        
    const sum = runningTot.reduce((partialSum, a)=> partialSum + a, 0);

    subTotScrn.innerHTML = "£" + sum;
}

function iceCoffeeReset(){
    document.getElementById("iceCoffeeForm").reset();
}

/*---------Milkshake Ordering Section----------*/
addMilkshake.addEventListener("click",milkshakeValidate);
addMilkshake.addEventListener("click",milkshakeReset);

function milkshakeValidate(){
    let x = document.forms["milkshakeForm"]["milkshakeChoice"].value;
    let y = document.forms["milkshakeForm"]["milkshakeOptions"].value;
    if (x == "" || y ==""){
        alert("Please complete all fields.");
    }else{
        milkshakeChoices();
    }
}

function milkshakeChoices(){//Milkshake Function
    
    let milkshakeChoice = document.getElementById("milkshakeChoice" ).value;

    let milkshakeOption = document.getElementById("milkshakeOptions").value;

    let milkshakePrice = menuItems.milkshake.price;

    let thisMilkshake = [
        "Milkshake: " + milkshakeChoice + " " + milkshakeOption + "\n" 
        + menuItems.milkshake.price + "\n"];
        
    
    thisOrder.push([thisMilkshake]);
    orderDisplay.innerHTML = thisOrder.join('\r\n');
    runningTot.push (milkshakePrice);
        
    const sum = runningTot.reduce((partialSum, a)=> partialSum + a, 0);

    subTotScrn.innerHTML = "£" + sum;
}

function milkshakeReset(){
    document.getElementById("milkshakeForm").reset();
}

/*---------Fruit Juice Ordering Section----------*/
addJuice.addEventListener("click",juiceValidate);
addJuice.addEventListener("click",juiceReset);


function juiceValidate(){
    let x = document.forms["juiceForm"]["juiceChoice"].value;
    if (x == ""){
        alert("Please complete all fields.");
    }else{
        juiceChoices();
    }
}

function juiceChoices(){//Juice Function
    
    let juiceChoice = document.getElementById("juiceChoice" ).value;

    let juicePrice = menuItems.juice.price;

    let thisJuice = [
        "Juice: " + juiceChoice +"\n" 
        + menuItems.juice.price + "\n"];
        
    
    thisOrder.push([thisJuice]);
    orderDisplay.innerHTML = thisOrder.join('\r\n');
    runningTot.push (juicePrice);
        
    const sum = runningTot.reduce((partialSum, a)=> partialSum + a, 0);

    subTotScrn.innerHTML = "£" + sum;
}

function juiceReset(){
    document.getElementById("juiceForm").reset();
}

/*---------Soft Drink Ordering Section----------*/
addSoda.addEventListener("click",sodaValidate);
addSoda.addEventListener("click",sodaReset);

function sodaValidate(){
    let x = document.forms["sodaForm"]["sodaChoice"].value;
    if (x == ""){
        alert("Please complete all fields.");
    }else{
        sodaChoices();
    }
}

function sodaChoices(){//Soft Drink Function
    
    let sodaChoice = document.getElementById("sodaChoice" ).value;

    let sodaPrice = menuItems.soda.price;

    let thisSoda = [
        "Drink: " + sodaChoice +"\n" 
        + menuItems.soda.price + "\n"];
        
    
    thisOrder.push([thisSoda]);
    orderDisplay.innerHTML = thisOrder.join('\r\n');
    runningTot.push (sodaPrice);
        
    const sum = runningTot.reduce((partialSum, a)=> partialSum + a, 0);

    subTotScrn.innerHTML = "£" + sum;
}

function sodaReset(){
    document.getElementById("sodaForm").reset();
}

/*---------Water Ordering Section----------*/
addWater.addEventListener("click",waterValidate);
addWater.addEventListener("click",waterReset);

function waterValidate(){
    let x = document.forms["waterForm"]["waterChoice"].value;
    if (x == ""){
        alert("Please complete all fields.");
    }else{
        waterChoices();
    }
}

function waterChoices(){//Water Function
    
    let waterChoice = document.getElementById("waterChoice" ).value;

    let waterPrice = menuItems.water.price;

    let thisWater = [
        "Water: " + waterChoice +"\n" 
        + menuItems.water.price + "\n"];
        
    
    thisOrder.push([thisWater]);
    orderDisplay.innerHTML = thisOrder.join('\r\n');
    runningTot.push (waterPrice);
        
    const sum = runningTot.reduce((partialSum, a)=> partialSum + a, 0);

    subTotScrn.innerHTML = "£" + sum;
}

function waterReset(){
    document.getElementById("waterForm").reset();
}


/*---------Clear thisOrder Box and Content of thisOrder----------*/
clearBtn.addEventListener("click", clearOrder);

function clearOrder(){//Clear Order Button
    document.getElementById("orderDisplay").value ="";
    thisOrder = [];
    dispOrder = [];
    runningTot = [];
    sum = 0
    subTotScrn.innerHTML = "£" + sum;
    console.log(thisOrder);
    console.log(dispOrder);
}
/*---------New Order----------*/
newOrderBtn.addEventListener("click",newOrder);

function newOrder(){
    location.reload();
}

/*---------Payment Section----------*/

payChoice.addEventListener("change",payMethod)

function payMethod(){
    var howPay = document.getElementById("payChoice").value

    if (howPay == "payCard"){
        showCard();
        closeCash();
        closeCode();
    } else if(howPay == "payCash"){
        closeCard();
        showCash();
        closeCode();
    } else if(howPay == "payCode"){
        closeCard();
        closeCash();
        showCode();
    }
    }

function showCard(){
    let show = document.getElementById("cardPayment");
    if (show.style.display === "none") {
        show.style.display = "block";
      } else {
        show.style.display = "none";
      }

}
function showCash(){
    let show = document.getElementById("cashPayment");
    if (show.style.display === "none") {
        show.style.display = "block";
      } else {
        show.style.display = "none";
      }
}
function showCode(){
    let show = document.getElementById("codePayment");
    if (show.style.display === "none") {
        show.style.display = "block";
      } else {
        show.style.display = "none";
      }
}

function closeCard(){
    let hide = document.getElementById("cardPayment");
    if (hide.style.display === "block") {
        hide.style.display = "none";
      } else {
        hide.style.display = "none";
      }

}
function closeCash(){
    let hide = document.getElementById("cashPayment");
    if (hide.style.display === "block") {
        hide.style.display = "none";
      } else {
        hide.style.display = "none";
      }
}
function closeCode(){
    let hide = document.getElementById("codePayment");
    if (hide.style.display === "block") {
        hide.style.display = "none";
      } else {
        hide.style.display = "none";
      }
}
/*---------Place Order----------*/
orderBtn.addEventListener("click", placeOrder);

function placeOrder(){//Place Order Button
    document.getElementById("orderDisplay").value ="";
    
    subTotScrn.innerHTML = "£" + sum;
    console.log(thisOrder);
    console.log(dispOrder);
}

/*---------Cash Payment----------*/
payBtn.addEventListener("click", cashPayment);

function cashPayment(){
    let cashPaid = document.getElementById("payScrn").value
    if (cashPaid <= runningTot){
        runningTot -= cashPaid; 
        subTotScrn.innerHTML = "£ " + runningTot.toString()
    } else {
        runningTot -= cashPaid; 
        subTotScrn.innerHTML = "£ " + (runningTot - (runningTot * 2)).toString();
        document.getElementById("subTotLabel").innerHTML = "Change Due"
    }   
    }

/*---------Discount Code Payment----------*/

let vCode10 = "code10"
let vCode50 = "code50"
let vCode100 = "hire adam"
let thisCode = ""

discCodeBtn.addEventListener("click", discount);

function discount(){
    thisCode = document.getElementById("discCode").value;
    if(thisCode == "code10"){
        runningTot = runningTot * 0.90 
        subTotScrn.innerHTML = "£ " + runningTot.toString()
        
        alert("Success 10% discount applied")
    }
    else if(thisCode == "code50"){
        runningTot = runningTot * 0.50
        subTotScrn.innerHTML = "£ " + runningTot.toString()
        
        alert("Success 50% discount applied")
    }
    else if(thisCode == "hire adam"){
        runningTot = runningTot - runningTot
        subTotScrn.innerHTML = "£ " + runningTot.toString()
        
        alert("Great choice! FREE MEAL")

    }else{alert("Sorry this code is not valid.")}
}


/*---------Numeric Keypad----------*/
//btn1.addEventListener("click",function1);


const zero = document.querySelectorAll('[data-number]')
const one = document.querySelectorAll('[data-number]')
const two = document.querySelectorAll('[data-number]')
const three = document.querySelectorAll('[data-number]')
const four = document.querySelectorAll('[data-number]')
const five = document.querySelectorAll('[data-number]')
const six = document.querySelectorAll('[data-number]')
const seven = document.querySelectorAll('[data-number]')
const eight = document.querySelectorAll('[data-number]')
const nine = document.querySelectorAll('[data-number]')
const decimal = document.querySelectorAll('[data-number]')
const AC = document.querySelector('[data-all-clear]')
const del = document.querySelector('[data-delete]')
const equals = document.querySelector('[data-equals]')

//numberButtons.forEach(button =>{
//    button.addEventListener("click", () => {
//        calculator.appendNumber(button.innerText)
//        calculator.updateDisplay
//    })
//})




/*---------Subtotal Section----------*/
/*
const testOrder=["baguette", 5, "pizza", 7]

subTotBtn.addEventListener("click", subTotal);

function subTotal(){

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! This is the older stuff to go through!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Bits that are working in their own right above this line. 
Trying stuff out Bellow this line


THIS IS THE CODE FOR THE POS SYSTEM

Optional Add tool for cafe staff to add new items to the system

Optionals
New form to add product info
var nItem
var nItemPrice
var nItemImg
*/