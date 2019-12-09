const maxProfit = function(prices) {
  let trend = {};
  for (let i = 0; i < prices.length; i++) {
    trend[i] = prices[i + 1] - prices[i];
  }
  let profit = 0;
  for (let key in trend) {
  }
  if (trend[key] > 0) {
    profit += trend[key];
    key++;
  }
  //buy is positive, sell is negative
  return profit;
};

maxProfit([7, 1, 5, 3, 6, 4]); //returns 7
maxProfit([1, 2, 3, 4, 5]);
maxProfit([7, 6, 4, 3, 1]);
