console.log('hello')

//Listen for clicks on Generate Quote button 
document.getElementById("generateQuote").addEventListener("click", generateQuote);

//Get form values, calculate quote price and produce form output
function generateQuote() {
    let typeItem = document.getElementById("typeItem").value;
    let collectingFrom = document.getElementById("collectingFrom").value;
    let bristolDelivery = document.getElementById("bristolDelivery").value;

    //Get item price
    let itemPrice = calculatePrice(typeItem, collectingFrom);

    //Get delivery price 
    let deliveryPrice = calculateDelivery(itemPrice,bristolDelivery);

    //Create output 
    var theOutput = "<p>Thank you for your quote request</p>";
}

