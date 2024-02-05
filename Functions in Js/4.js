function calculateTax() {
    
    const taxRates = [
        { range: 10000, rate: 0.1 },
        { range: 30000, rate: 0.15 },
        { range: 70000, rate: 0.2 },
        { range: Infinity, rate: 0.25 }
    ];
    return function(income) {
        let taxAmount = 0;

        for (const { range, rate } of taxRates) {
            if (income <= range) {
                taxAmount += income * rate;
                break;
            } else {
                taxAmount += range * rate;
                income -= range;
            }
        }

        return taxAmount;
    };
}

const calculateTaxForIncome = calculateTax();

console.log("Tax for $8,000 income:", calculateTaxForIncome(8000));
console.log("Tax for $20,000 income:", calculateTaxForIncome(20000));
console.log("Tax for $50,000 income:", calculateTaxForIncome(50000));
console.log("Tax for $100,000 income:", calculateTaxForIncome(100000));
