console.log('hello')

//Listen for clicks on Generate Quote button 
document.getElementById("generateQuote").addEventListener("click", generateQuote);

//Get form values, calculate quote price and produce form output
function generateQuote() {
    let typeItem = document.getElementById("typeItem").value;
    let collectingFrom = document.getElementById("collectingFrom").value;
    let bristolDelivery = document.getElementById("bristolDelivery").value;

    //Get item price
    let itemPrice = calculatePrice(typeItem);

    //Get delivery price (surcharge for longer distances) 
    let surCharge = calculateSurcharge(itemPrice,bristolDelivery);

    //Create output 
    var theOutput = "<p>Thank you for your quote request</p>";

    //Output surcharge for certain delivery locations
    if (surCharge === 0) {
        theOutput += "<p>No distance surcharge</p>";
    } else {
        theOutput += "<p>Your surcharge is £ " + surCharge;
    }

    theOutput += "<p>Your quote total is: £" + (itemPrice + surCharge);

    //Display the output 
    document.getElementById("displayPrice").innerHTML = theOutput;
}

//Calculates Item Price
function calculatePrice (typeItem) {
    let itemPrice = 50;
    let extraCharge = 0;
        if (typeItem === "bed") {
                extraCharge = 10;
            } else if (typeItem === "wardrobe") {
                extraCharge = 10;    
            } else {
            
        }   
    
        itemPrice += extraCharge;
    
        return itemPrice;
}

//Calculates surcharge
function calculateSurcharge (itemPrice, bristolDelivery) {
console.log(bristolDelivery);
let surCharge = 0;
        if (bristolDelivery === "stGeorge") {
            surCharge = 5;
            } else if (bristolDelivery === "fishponds") {
            surCharge = 5;
            } else {
            }
        
    
    return surCharge;
    
}


