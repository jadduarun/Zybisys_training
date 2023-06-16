import { add } from "./modules/expenseModule.js";
import { list } from "./modules/ulModule.js";

let expenseFormContainer = document.getElementById("expense-form");
let expenseListContainer = document.getElementById("expense-list");

fetch("./components/expense-form.html")
  .then((response) => response.text())
  .then((html) => {
    expenseFormContainer.innerHTML = html;
  });

fetch("./components/expense-list.html")
  .then((response) => response.text())
  .then((html) => {
    expenseListContainer.innerHTML = html;
  });

let form = document.getElementById("expense-form");
form.addEventListener("submit", (event) => {
  try {
    event.preventDefault();

    let expenseName = document.getElementById("name").value;
    let expensePrice = document.getElementById("price").value;

    if (expenseName && expensePrice) {
      add(expenseName, expensePrice);
      list();
    }
    else{
      alert("Enter Product or Price")
    }
  } catch (err) {
    alert(err.message);
  }
});
