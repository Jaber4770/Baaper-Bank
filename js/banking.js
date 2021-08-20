// handle deposit button event 
document.getElementById('deposit-button').addEventListener('click', function(){
    // get deposited amount
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // update deposited amount
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    // update balance total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear the input field
    depositInput.value = '';
});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalAmountText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalAmountText);
    // update withdraw amount
    const newWithdrawAmountText = document.getElementById('withdraw-input');
    const newWithdrawTotalAmount = newWithdrawAmountText.value;
    const newWithdrawAmount = parseFloat(newWithdrawTotalAmount);
    const newWithdrawAmountTotal = newWithdrawAmount + withdrawTotalAmount;
    withdrawTotal.innerText = newWithdrawAmountTotal;
    // clear the input field
    newWithdrawAmountText.value = '';
    // update total balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    const newTotalBalance = balanceTotalAmount - newWithdrawAmount;
    balanceTotal.innerText = newTotalBalance;
});


