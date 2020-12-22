const inputBill = document.querySelector('input[name=bill_amt]')
const inputCash = document.querySelector('input[name=cash_amt]')
const btnCalculate = document.querySelector('#btn_calculate')
const outputTable = document.querySelector('#output_table')

inputBill.addEventListener('input',()=>{
    if(inputBill.value >0){
        inputCash.disabled = false;
    }else{
        inputCash.disabled = true;
    }
})


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
    return currencyMap
}

function displayResults(currencyMap){
    
    let resultingRows = `<tr id="heading">
                            <th>Currency Value</th>
                            <th>Notes Count</th>
                        </tr>`
    currencyMap.forEach((notesCount , value)=>{
        if(notesCount > 0){
            resultingRows +=`
            <tr class="data">
            <td>${value}</td>
            <td>${notesCount}</td>
            </tr>
            `
        }
    })
    outputTable.innerHTML +=resultingRows
    outputTable.style.display = 'block'
}

btnCalculate.addEventListener('click',()=>{
    let currencyMap = calculateMinNotes(inputBill.value , inputCash.value)
    displayResults(currencyMap);
})
