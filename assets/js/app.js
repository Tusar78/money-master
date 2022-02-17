// Get Calculator Button
const calculateBtn = document.getElementById("calculate-btn");

const expenseValidation = () => {
  // Get all of expenses
  const foodCost = document.getElementById("food-cost");
  const foodCostNumber = parseFloat(foodCost.value);
  let foodCostValue;

  const rentCost = document.getElementById("rent-cost");
  const rentCostNumber = parseFloat(rentCost.value);
  let rentCostValue;

  const otherCost = document.getElementById("other-cost");
  const otherCostNumber = parseFloat(otherCost.value);
  let otherCostValue;

  // Food cost validation
  if (!isNaN(foodCostNumber)) {
    if (foodCostNumber < 0) {
      foodCost.value = "";
      console.log(`Your can not add negative number food!`);
    } else {
      foodCostValue = foodCostNumber;
    }
  } else {
    foodCost.value = "";
    console.log("Please enter the valid number food");
  }

  // Rent cost validation
  if (!isNaN(rentCostNumber)) {
    if (rentCostNumber < 0) {
      rentCost.value = "";
      console.log(`Your can not add negative number! rent`);
    } else {
      rentCostValue = rentCostNumber;
    }
  } else {
    rentCost.value = "";
    console.log("Please enter the valid number rent");
  }

  // Other cost validation
  if (!isNaN(otherCostNumber)) {
    if (otherCostNumber < 0) {
      otherCost.value = "";
      console.log(`Your can not add negative number! other`);
    } else {
      otherCostValue = otherCostNumber;
    }
  } else {
    otherCost.value = "";
    console.log("Please enter the valid number other");
  }

  // Summation of all expense
  let totalExpense;
  if (
    isFinite(foodCostValue) &&
    isFinite(rentCostValue) &&
    isFinite(otherCostValue)
  ) {
    totalExpense = foodCostValue + rentCostValue + otherCostValue;
  } else {
    totalExpense = "00";
  }

  //Return the value of total expenses
  return totalExpense;
};

const calculation = () => {
  // Get total income
  const totalIncome = document.getElementById("total-income");
  const totalIncomeNumber = parseFloat(totalIncome.value);

  if (!isNaN(totalIncomeNumber)) {
    if (totalIncomeNumber < 0) {
      totalIncome.value = "";
      alert(`You can't add a negative number`);
    } else {
    //   // Get all of expenses
    //   const foodCost = document.getElementById("food-cost");
    //   const rentCost = document.getElementById("rent-cost");
    //   const otherCost = document.getElementById("other-cost");

    //   // Summation of all expense
    //   const totalExpense =
    //     parseFloat(foodCost.value) +
    //     parseFloat(rentCost.value) +
    //     parseFloat(otherCost.value);

      // Get total expense area
      const displayExpense = document.getElementById("total-expense");
      displayExpense.innerText = expenseValidation();

      // Get balance
      const balanceArea = document.getElementById("balance");
      const balance = parseFloat(totalIncome.value) - expenseValidation();
      balanceArea.innerText = balance;

      // Remaining balance
      const remainingBalanceArea = document.getElementById("remaining-balance");
      remainingBalanceArea.innerText = balance;
    }
  } else {
    totalIncome.value = "";
    alert(`You can't enter another data`);
  }
};

// Add Event in calculate button
calculateBtn.addEventListener("click", (event) => {
  calculation();
});

// Get savings button
const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", (event) => {
  // get Save percent value
  const savePercentText = document.getElementById("save-percent");
  const savePercentNumber = parseFloat(savePercentText.value);

  // get total income
  const totalIncomeText = document.getElementById("total-income");
  const totalIncomeNumber = parseFloat(totalIncomeText.value);

  // Calculate percent
  const getPercent = (totalIncomeNumber * savePercentNumber) / 100;

  // saving amount display area
  const savingArea = document.getElementById("total-saving");
  savingArea.innerText = getPercent;

  // get balance
  const balanceArea = document.getElementById("balance");
  const balanceMoney = parseFloat(balanceArea.innerText);

  // Remaining balance
  const remainingBalance = document.getElementById("remaining-balance");
  const balance = balanceMoney - getPercent;
  remainingBalance.innerText = balance;
});
