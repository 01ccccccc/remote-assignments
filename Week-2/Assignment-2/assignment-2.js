function avg(data) {
    var total;
    var product = data['products'];
    
    // for (var i =0; i < product.length; i++) {
    //     var prices = product[i]['price'];
    //     console.log(prices);
    //     // total += prices;
    // }
    
    total = product.reduce((n, {price}) => n + price, 0);
    // arr.reduce(callback[accumulator, currentValue, currentIndex, array], initialValue)
    // arrow function: https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    // https://stackoverflow.com/questions/23247859/better-way-to-sum-a-property-value-in-an-array


    // console.log(total);
    return total / data['size'];

}

console.log(
    avg({
        size: 3,
        products: [
            {
                name: 'Product 1',
                price: 100,
            },
            {
                name: 'Product 2',
                price: 700,
            },
            {
                name: 'Product 3',
                price: 250,
            }
        ],
    })
); // should print the average price of all products