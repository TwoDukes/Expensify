export default (expenses) => {
    return expenses
      .map((expense) => expense.amount)
      .reduce((total, curVal) => total + curVal, 0);
};