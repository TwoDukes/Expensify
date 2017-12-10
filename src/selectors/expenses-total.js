//returns the total amount of all expense amounts added
export default (expenses) => {
    return expenses
      .map((expense) => expense.amount)
      .reduce((total, curVal) => total + curVal, 0);
};