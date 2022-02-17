// Get Calculator Button
const calculateBtn = document.getElementById('calculate-btn');

// Add Event in calculate button
calculateBtn.addEventListener('click', event => {
    // Get total income
    const totalIncome = document.getElementById('total-income');

    // Get all of expenses
    const foodCost = document.getElementById('food-cost');
    const rentCost = document.getElementById('rent-cost');
    const otherCost = document.getElementById('other-cost');

    // Summation of all expense
    const totalExpense = parseFloat(foodCost.value) + parseFloat(rentCost.value) + parseFloat(otherCost.value);

    // Get total expense area
    const displayExpense = document.getElementById('total-expense');
    displayExpense.innerText = totalExpense;

    // Get balance
    const balanceArea = document.getElementById('balance');
    const balance = parseFloat(totalIncome.value) - totalExpense;
    balanceArea.innerText = balance;

    // Remaining balance
    const remainingBalanceArea = document.getElementById('remaining-balance');
    remainingBalanceArea.innerText = balance;
})


