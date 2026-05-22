let bankAmount = 10000; //let because value will change later

const VAT = 0.17; //const because vat is constant

const details = [200, -100, 146, 167, -2900];

const taxedDetails = details.map(expense => expense * (1 + VAT));
//map creates a new array of details 
console.log(taxedDetails);

taxedDetails.forEach(expense => {
    bankAmount += expense;
});

console.log(`Final bank amount: ${bankAmount}`);