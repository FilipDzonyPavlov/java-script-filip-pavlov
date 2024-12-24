function calculateDogAge(humanAge){
    let dogAge = humanAge *7;
    return dogAge
}
let humanAge = 8
let dogAge = calculateDogAge(humanAge)
console.log(calculateDogAge)


///////////////////////////////////////

function atmWithdraw(accountBalance, withdrawalAmount){
    if (withdrawalAmount > accountBalance);
    return `you withdrew ${withdrawalAmount}. ;remaining balance: ${accountBalance}`;
}
let balance = 500;
// withdraw 600$;
console.log(atmWithdraw(balance, 600));
// withdraw 200$;
console.log(atmWithdraw(balance, 600));