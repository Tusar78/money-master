// Get Calculator Button
const calculateBtn = document.getElementById('calculate-btn');
calculateBtn.addEventListener('click', event => {
    const totalIncome = document.getElementById('total-income');
    const foodCost = document.getElementById('food-cost');
    const rentCost = document.getElementById('rent-cost');
    const otherCost = document.getElementById('other-cost');
    const expense = parseFloat(foodCost.value) + parseFloat(rentCost.value) + parseFloat(otherCost.value);

    const totalExpense = document.getElementById('total-expense');
    totalExpense.innerText = expense;

    const balance = document.getElementById('balance');
    balance.innerText = totalIncome - totalExpense;

})