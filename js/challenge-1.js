let app = (function() {

    const inputNumber = document.getElementById("inputNumber");
    const output = document.getElementById("output");
    const test = document.getElementById("test");
    let numbers = document.getElementById("numbers");
    let result = [];
    let isValidNumber = {};

    function outputNumbers() {
        result.length = 0;
        output.textContent = "";
        isValidNumber = validateData(inputNumber);
        if (isValidNumber.validNumber === true) {
            numbers.textContent = "";
            result = getPrimaryNumbers(isValidNumber.number);
            numbers.textContent = result.reduce(function(text, number) {
                return text + (', ' + number);
            });
        }
    } //outputNumbers

    function getPrimaryNumbers(number) {
        const primaryNumbers = [];
        let divider = 2;
        let isPrimary = true;

        if (number < 3) {
            logError("There are no prime numbers between 0 and " + number);
        } else {
            for (let i = 2; i <= number; i++) {
                isPrimary = true;
                for (divider = 2; divider < i; divider++) {
                    if (i % divider === 0) {
                        isPrimary = false;
                        break;
                    }
                }
                if (isPrimary) {
                    primaryNumbers.push(i);
                }
            }
        }
        return primaryNumbers;
    } //getNaturalNumbers


    function logError(msg) {
        output.textContent = "";
        output.textContent = msg;
    }


    function validateData(number) {
        number = parseInt((Number(number.value).toFixed(0)), 10);
        if (Number.isNaN(number)) {
            logError("Wrong input, please enter number again");
            return {
                "validNumber": false,
                "number": NaN
            }
        }

        if (number <= 0 || number > 10000) {
            logError("The number should have a value between 0 - 10 000, please enter number again");
            return {
                "validNumber": false,
                "number": NaN
            }
        }

        return {
            "validNumber": true,
            "number": number
        }

    } // validateData

    test.addEventListener("click", outputNumbers);


})();
