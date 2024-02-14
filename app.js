let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

function fromEuroToDollar(euros) {
    const rate = oneEuroIs["USD"];
    return euros * rate;
}

function fromDollarToYen(dollars) {
    const rate = oneEuroIs["JPY"] / oneEuroIs["USD"];
    return dollars * rate;
}

function fromYenToPound(yen) {
    const rate = oneEuroIs["GBP"] / oneEuroIs["JPY"];
    return yen * rate;
}


module.exports = { fromDollarToYen, fromYenToPound, fromEuroToDollar };

//fromDollarToYen test
console.log(fromDollarToYen(100)); 

//fromEuroToDollar test
console.log(fromEuroToDollar(100)); 

//fromYenToPound test
console.log(fromYenToPound(10000));