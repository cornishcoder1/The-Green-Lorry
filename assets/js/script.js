//Listen for clicks on Generate Quote button 
document.getElementById("generate-quote").addEventListener("click", generateQuote);

/** 
*Get form values, calculate quote price, produce form output and add van animation
*/
function generateQuote() {
    let typeItem = document.getElementById("type-item").value;
    let collectingFrom = document.getElementById("collecting-from").value;

    //Get item price
    let itemPrice = calculatePrice(typeItem);

    //Get distance surcharge for collection from locations other than Bristol 
    let surCharge = calculateSurcharge(collectingFrom);

    //Create output 
    var theOutput = "<p>Thank you for your quote request</p>";
    var itemCharge = "<p>Your item collection charge is: £" + (itemPrice);

    //Output distance surcharge for collections from Bath, North Somerset and South Gloucestershire
    if (surCharge === 0) {
        theOutput += "<p>No distance surcharge</p>";
    } else {
        theOutput += "<p>Your distance surcharge is: £" + surCharge;
    }

    theOutput += itemCharge + "<p>Your quote total is: £" + (itemPrice + surCharge);

    //Change output if 'other' is selected as type of item 
    if (typeItem === "other") {
        theOutput = "";
        theOutput += "<p>Call us for a bespoke quote";
    }

    //Display the output 
    document.getElementById("display-price").innerHTML = theOutput;

    /**
    * Adds a class to the van image to allow animation to occur
    */
    function addAnimation() {
    document.getElementById("van-img").classList.add("van-img-moving");
    }

    addAnimation();
}     
    

/** 
*Calculates Item Price
*/
function calculatePrice (typeItem) {
    let itemPrice = 20;
    let extraCharge = 0;

    switch (typeItem) {
        case "wardrobe":
        case "largeBed":
        case "sofaLarge":
            extraCharge = 20;
            break;    
        case "chestOfDrawers":
        case "singleBed":
        case "sofa":
        case "diningTable":
        case "coffeeTable":    
            extraCharge = 10; 
            break;
        case "armChair":
        case "cupboard": 
        case "bedsideTable":   
            extraCharge = 5; 
            break; 
        default: 
            extraCharge = 0;   
    }   
    
    itemPrice += extraCharge;
    
    return itemPrice;
}

/**
*Calculates distance surcharge
*/
function calculateSurcharge (collectingFrom) {
    let surCharge = 0;
        if (collectingFrom === "bristol") {
            surCharge = 0;
            } else if (collectingFrom === "bath") {
            surCharge = 7;
        } else if (collectingFrom === "southGlos") {
            surCharge = 5;
        } else if (collectingFrom === "northSomerset") {
            surCharge = 5;
            } else {
        }
    
        return surCharge;
}

document.getElementById("generate-quote").addEventListener("click", changeBackground);
let priceColor = document.getElementById("display-price");

/** 
*Display and change color of quote result div when quote is generated
*/
function changeBackground() {
    priceColor.style.backgroundColor = "rgb(42, 187, 42)";
    priceColor.style.border = "1px solid transparent;";
    priceColor.style.borderRadius = "4px";
    priceColor.style.boxShadow = "0px 1px 4px 2px rgb(42, 187, 42)";
    priceColor.style.display = "block";
}

