function calculateDiscount(price, isMember) {
    if (isMember) {
        return price * 0.9; // 10% discount
    } else {
        return price; // no discount
    }
}
console.log(calculateDiscount(100, false));