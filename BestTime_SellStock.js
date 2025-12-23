/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max =0;

    for(let i=1; i<prices.length;i++)
    {
        if(prices[i-1] < prices[i])
        {
            let profit = prices[i]-prices[i-1];
            if(profit >0)
            {
            max += profit;
            }


        }
    }

    return max;
};