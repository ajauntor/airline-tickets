
 // First class button and add Event Listener add.......
 firstClassPlus.addEventListener("click", function () {
    let firstClassTicketAmount = document.querySelector("#firstClassTicket").value;
    let firstClassTicketNumber = parseInt(firstClassTicketAmount);
    firstClassTicketNumber++;
    document.querySelector("#firstClassTicket").value = firstClassTicketNumber;
    total()

})
firstClassMinus.addEventListener("click", function () {
    let firstClassTicketAmount = document.querySelector("#firstClassTicket").value;
    let firstClassTicketNumber = parseInt(firstClassTicketAmount);
    firstClassTicketNumber--;
    if (firstClassTicketNumber < 0) {
        firstClassTicketNumber = 0;
    }
    document.querySelector("#firstClassTicket").value = firstClassTicketNumber;
    total()

})


// Economy class button and add Event Listener add.......
economyPlus.addEventListener("click", function () {
    let economyTicketAmount = document.querySelector("#economyTicket").value;
    let economyTicketNumber = parseInt(economyTicketAmount);
    economyTicketNumber++;
    document.querySelector("#economyTicket").value = economyTicketNumber;
    total()

})
economyMinus.addEventListener("click", function () {
    let economyTicketAmount = document.querySelector("#economyTicket").value;
    let economyTicketNumber = parseInt(economyTicketAmount);
    economyTicketNumber--;
    if (economyTicketNumber < 0) {
        economyTicketNumber = 0;
    }
    document.querySelector("#economyTicket").value = economyTicketNumber;
    total()

})

// Total amount calculate.......
function total() {
    let firstClassTicketNumber = parseInt(document.querySelector("#firstClassTicket").value);
    let economyTicketNumber = parseInt(document.querySelector("#economyTicket").value);
    let subtotal = (firstClassTicketNumber * 150) + (economyTicketNumber * 100);
    let vat = subtotal * 0.1;
    vat.toFixed(2);
    let totalAmount = subtotal + vat;
    document.querySelector("#subtotal").innerText = subtotal;
    document.querySelector("#vat").innerText = vat;
    document.querySelector("#total").innerText = totalAmount;
}

// extra part

function myFunction() {
    alert("THANKS FOR CHOOSING OUR AIRLINE");
  }