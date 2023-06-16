export const expenses = [];

export const add = (expenseName, expensePrice) => {
  try {
    let obj = {
      expenseName,
      expensePrice,
    };

    expenses.push(obj);
  } catch (err) {
    alert(err.message);
  }
};
