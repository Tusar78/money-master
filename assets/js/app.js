// Expense validation
const expenseValidation = () => {
  // Get all of expenses
  const foodCost = document.getElementById("food-cost");
  const foodCostNumber = parseFloat(foodCost.value);
  let foodCostValue;
  // Food cost error
  const foodError = document.getElementById("food-error");

  const rentCost = document.getElementById("rent-cost");
  const rentCostNumber = parseFloat(rentCost.value);
  let rentCostValue;
  // Rent cost error
  const rentError = document.getElementById("rent-error");

  const otherCost = document.getElementById("other-cost");
  const otherCostNumber = parseFloat(otherCost.value);
  let otherCostValue;
  // Other cost error
  const otherError = document.getElementById("other-error");

  // Food cost validation
  if (!isNaN(foodCostNumber)) {
    if (foodCostNumber < 0) {
      foodCost.value = "";
      foodError.style.display = "block";
      foodError.classList.add("negative-error");
      foodError.classList.remove("number-error");
      foodError.style.marginBottom = "1rem";
      foodError.innerText = `You can't enter the negative number!`;
    } else {
      foodCostValue = foodCostNumber;
      foodError.style.marginBottom = "";
      foodError.style.display = "none";
    }
  } else {
    foodCost.value = "";
    foodError.style.display = "block";
    foodError.classList.add("number-error");
    foodError.classList.remove("negative-error");
    foodError.style.marginBottom = "1rem";
    foodError.innerText = `Please, enter your income amount!`;
  }

  // Rent cost validation
  if (!isNaN(rentCostNumber)) {
    if (rentCostNumber < 0) {
      rentCost.value = "";
      rentError.style.display = "block";
      rentError.classList.add("negative-error");
      rentError.classList.remove("number-error");
      rentError.style.marginBottom = "1rem";
      rentError.innerText = `You can't enter the negative number!`;
    } else {
      rentCostValue = rentCostNumber;
      rentError.style.marginBottom = "";
      rentError.style.display = "none";
    }
  } else {
    rentCost.value = "";
    rentError.style.display = "block";
    rentError.classList.add("number-error");
    rentError.classList.remove("negative-error");
    rentError.style.marginBottom = "1rem";
    rentError.innerText = `Please, enter your income amount!`;
  }

  // Other cost validation
  if (!isNaN(otherCostNumber)) {
    if (otherCostNumber < 0) {
      otherCost.value = "";
      otherError.style.display = "block";
      otherError.classList.add("negative-error");
      otherError.classList.remove("number-error");
      otherError.style.marginBottom = "1rem";
      otherError.innerText = `You can't enter the negative number!`;
    } else {
      otherCostValue = otherCostNumber;
      otherError.style.marginBottom = "";
      otherError.style.display = "none";
    }
  } else {
    otherCost.value = "";
    otherError.style.display = "block";
    otherError.classList.add("number-error");
    otherError.classList.remove("negative-error");
    otherError.style.marginBottom = "1rem";
    otherError.innerText = `Please, enter your income amount!`;
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

  const totalIncome = document.getElementById("total-income");
  // Get total expense area
  const displayExpense = document.getElementById("total-expense");
  displayExpense.innerText = totalExpense;

  // Get balance
  const balanceArea = document.getElementById("balance");
  const balance = parseFloat(totalIncome.value) - totalExpense;
  balanceArea.innerText = balance;
};

// Calculation
const calculation = () => {
  // Get total income
  const totalIncome = document.getElementById("total-income");
  const totalIncomeNumber = parseFloat(totalIncome.value);

  // Get error id
  const incomeError = document.getElementById("income-error");

  //   Total income validation
  if (!isNaN(totalIncomeNumber)) {
    if (totalIncomeNumber < 0) {
      totalIncome.value = "";
      incomeError.style.display = "block";
      incomeError.classList.add("negative-error");
      incomeError.classList.remove("number-error");
      incomeError.innerText = `You can't enter the negative number!`;
    } else {
      incomeError.style.display = "none";
      expenseValidation();
    }
  } else {
    totalIncome.value = "";
    incomeError.style.display = "block";
    incomeError.classList.add("number-error");
    incomeError.classList.remove("negative-error");
    incomeError.innerText = `Please, enter your income amount!`;
  }
};

// Get Calculator Button
const calculateBtn = document.getElementById("calculate-btn");
// Add Event in calculate button
calculateBtn.addEventListener("click", (event) => {
  calculation();
});

// Saving validation
const savingValidation = () => {
  // get Save percent value
  const savePercentText = document.getElementById("save-percent");
  const savePercentNumber = parseFloat(savePercentText.value);
  let savePercentValue;

  // Get error id
  const savingError = document.getElementById("saving-error");

  // Other cost validation
  if (!isNaN(savePercentNumber)) {
    if (savePercentNumber < 0) {
      savePercentText.value = "";
      savingError.style.display = "block";
      savingError.classList.add("negative-error");
      savingError.classList.remove("number-error");
      savingError.style.marginTop = ".25rem";
      savingError.innerText = `You can't enter the negative number!`;
    } else {
      savePercentValue = savePercentNumber;
      savingError.style.marginTop = "0";
      savingError.style.display = "none";
    }
  } else {
    savePercentText.value = "";
    savingError.style.display = "block";
    savingError.classList.add("number-error");
    savingError.classList.remove("negative-error");
    savingError.style.marginTop = ".25rem";
    savingError.innerText = `Please, enter your income amount!`;
  }

  if (isFinite(savePercentValue)) {
    return savePercentValue;
  } else {
    return `00`;
  }
};

// Saving calculation
const savingCalculation = () => {
  // get total income
  const totalIncomeText = document.getElementById("total-income");
  const totalIncomeNumber = parseFloat(totalIncomeText.value);

  // Calculate percent
  const getPercent = (totalIncomeNumber * savingValidation()) / 100;

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
};

// Get savings button
const saveBtn = document.getElementById("save-btn");

// Add event in saving button
saveBtn.addEventListener("click", (event) => {
  savingCalculation();
});
