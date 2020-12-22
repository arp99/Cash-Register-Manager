const inputBill = document.querySelector('input[name=bill_amt]')
const inputCash = document.querySelector('input[name=cash_amt]')
const btnCalculate = document.querySelector('#btn_calculate')
const paraElement = document.querySelector('#para')

function calculateMinNotes(bill , cashGiven){
    
    let currencyValues = [2000,500,100,20,10,5,1]
    let change_amt = cashGiven - bill
    
    let currencyMap = new Map()
    currencyValues.forEach(value =>{
        if(change_amt >0){
            //notes count of each denominations
            let notesCount = Math.floor(change_amt / value);
            currencyMap.set(value, notesCount );
            // remaining change value
            change_amt = change_amt % value;
        }
    })

    displayResults(currencyMap);
}

function displayResults(currencyMap){
    let resultStr = ``;
    currencyMap.forEach((notesCount , value)=>{
        resultStr += `Denomination: ${value}  Notes Count: ${notesCount}\n`
    })
    paraElement.innerText = resultStr;
}

btnCalculate.addEventListener('click',()=>{
    calculateMinNotes(inputBill.value , inputCash.value)
})
