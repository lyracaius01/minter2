function modify_qty(val) {
    var qty = prompt("Enter a whole number");
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < null) {
        new_qty = max;
    }
    
    document.getElementById('qty').value = new_qty;
    return new_qty;
}
