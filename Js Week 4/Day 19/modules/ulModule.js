import { expenses } from "./expenseModule.js";

let totalExpense = document.createElement("p");
export const list = () => {
  try {
    let ul = document.getElementById("ul");

    ul.innerHTML = "";
    document.getElementById("total").innerHTML ="";

    let total = 0;

    expenses.forEach((expense) => {
      let item = document.createElement("li");
      item.textContent = `${expense.expenseName}: $${expense.expensePrice}`;

      ul.appendChild(item);

      total += +expense.expensePrice;
    });

    totalExpense.textContent = `Total: ${total}`;

    document.body.appendChild(totalExpense);
  } catch (err) {
    alert(err.message);
  }
};
