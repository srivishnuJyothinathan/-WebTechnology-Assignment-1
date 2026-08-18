function calculateBill() {
    // Variables and data types
    let quantity1 = Number(document.getElementById("qty1").value);
    let price1 = Number(document.getElementById("price1").value);

    let quantity2 = Number(document.getElementById("qty2").value);
    let price2 = Number(document.getElementById("price2").value);

    let quantity3 = Number(document.getElementById("qty3").value);
    let price3 = Number(document.getElementById("price3").value);

    // Validate input
    let values = [quantity1, price1, quantity2, price2, quantity3, price3];

    for (let i = 0; i < values.length; i++) {
        if (isNaN(values[i]) || values[i] < 0) {
            document.getElementById("bill").innerHTML =
                "<b>Please enter valid non-negative quantities and prices.</b>";
            return;
        }
    }

    // Arithmetic operators
    let amount1 = quantity1 * price1;
    let amount2 = quantity2 * price2;
    let amount3 = quantity3 * price3;

    let total = amount1 + amount2 + amount3;
    let discount = 0;

    // Selection statement
    if (total > 2000) {
        discount = total * 0.10;
    }

    let finalAmount = total - discount;

    document.getElementById("bill").innerHTML = `
        <h2>Customer Bill</h2>
        Product 1: ₹${amount1.toFixed(2)}<br>
        Product 2: ₹${amount2.toFixed(2)}<br>
        Product 3: ₹${amount3.toFixed(2)}<br><br>
        <b>Total Amount:</b> ₹${total.toFixed(2)}<br>
        <b>Discount:</b> ₹${discount.toFixed(2)}<br>
        <span class="final">Final Payable Amount: ₹${finalAmount.toFixed(2)}</span>
    `;
}
