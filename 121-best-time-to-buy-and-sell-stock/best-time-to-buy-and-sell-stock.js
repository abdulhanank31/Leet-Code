/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;           // best day to buy so far
        } else {
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
    }

    return maxProfit;
};
