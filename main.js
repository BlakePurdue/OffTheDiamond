function submitContact() { //Function alerting the users there contact message has been submitted
    console.log("C");
    var contactName = document.getElementById('userName').value;
    alert("Thanks " + contactName + " for your interest.");
}
//checkCart()
function addtoCart() { // Function which changes the button on product page to show "Added"
    var cartNumber = document.getElementById('cartNum').value;
    document.getElementById("addPBtn").innerHTML = "Added";
    console.log(cartNumber);
    sessionStorage.setItem('item', cartNumber);
}

function clearCart() { // Function which clears the cart contents
    console.log("Cleared cart");
    sessionStorage.removeItem('item');
    location.reload();
    checkCart();

}

function checkCart() { // Function run on cart.html load

    var fullCart = document.getElementById('fullCart'); // HTML container for full cart
    var emptyCart = document.getElementById('emptyCart');// HTML container for empty cart

    if (sessionStorage.getItem('item') != null) { // If season storage has items = full cart
        console.log("cart has items");
        
        var xEm = document.getElementById("myDIV");
        var yFu = document.getElementById("myDIV2");
        yFu.style.display = "block"; // Show the full cart div
        var userNumber = sessionStorage.getItem("item"); // getting the number the user added
        var total = 22 * userNumber; // caculating the total cost
        document.getElementById("userQuan").innerHTML = "Quanity: " + userNumber;
        document.getElementById("priceTotal").innerHTML = "Sub-Total: $" + total;

    } else { // Season storage is empty therefore no items in cart
        console.log("cart is empty");

        
        var xEm = document.getElementById("myDIV");
        var yFu = document.getElementById("myDIV2");
        xEm.style.display = "block"; // Shows the empty cart div

    }
}

function mobileNavDrop() { //Shows drop down navigation for mobile users
    console.log("Drop down method");

    var x = document.getElementById("mobileHide");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function showProduct() { // Pop up menu to show add to product menu
    console.log("Drop down method for product info");

    var x = document.getElementById("prd-dropdown");
    if (x.style.display === "block") { 
        
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function checkOutNotif() { // Function for the check out notifcation 
    console.log("check out");
    var userNumber = sessionStorage.getItem("item");
    if (userNumber == 1){
        alert("Thank you for ordering "+ userNumber + " Classic logo white tshirt");
    }
    else {
         alert("Thank you for ordering "+ userNumber + " Classic logo white tshirts")
    }
    sessionStorage.removeItem('item');
    location.reload();
    checkCart();
}