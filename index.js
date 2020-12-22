let currencyValues = [2000,500,100,20,10,5,1]
let bill_amt = 243, cash_amt = 2000
let change_amt = cash_amt - bill_amt

let currencyMap = new Map()
currencyValues.forEach(value =>{
    if(change_amt >0){
        //notes count of each denominations
        let notesCount = Math.floor(change_amt / value);
        currencyMap.set(value , notesCount);
        // remaining change value
        change_amt = change_amt % value;
    }
})