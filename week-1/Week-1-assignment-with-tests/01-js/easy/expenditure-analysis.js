/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

var transactions = [
  {
    itemName: "pepsi",
    category: "Drink",
    price: "20",
    timstamp: "12-june-2022",
  },
  {
    itemName: "mirinda",
    category: "Drink",
    price: "25",
    timstamp: "13-june-2022",
  },
];
function calculateTotalSpentByCategory(transactions) {
  var spendEstimates = {};
  for (var i = 0; i < transactions.length; i++) {
    var transaction = transactions[i];
    spendEstimates["Drink"];
    if (spendEstimates[transaction.category]) {
      spendEstimates[transaction.category] += parseFloat(transaction.price);
    } else {
      spendEstimates[transaction.category] = parseFloat(transaction.price);
    }
    console.log(spendEstimates);
  }
}

module.exports = calculateTotalSpentByCategory;
