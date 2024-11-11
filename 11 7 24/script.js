document.getElementById("orderbutton").onclick = function (event) {
    event.preventDefault(); // Prevent form submission

    let foodprice = parseInt(document.getElementById("food").value);
    let drinkprice = parseInt(document.getElementById("drink").value);
    let totalprice = foodprice + drinkprice;

    let discount = 0;
    if (totalprice > 15) {
        discount = totalprice * 0.5;
    }

    const resultdiv = document.getElementById("result");
    if (foodprice > 0 && drinkprice > 0) {
        let finalPrice = totalprice - discount;
        resultdiv.innerHTML = `
            Total: $${totalprice.toFixed(2)}<br>
            Discount: $${discount.toFixed(2)}<br>
            Final Price: $${finalPrice.toFixed(2)}
        `;
    } else {
        resultdiv.innerHTML = "Please select both food and drink.";
    }
}