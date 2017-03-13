const app = (function() {

    const input = document.getElementById("input");
    const unitInput = document.getElementById("unit_input");
    const output = document.getElementById("output");
    const unitOutput = document.getElementById("unit_output");
    const errorLog = document.getElementById("error_log");



    const units = {
        "milimeter": 0.1,
        "centimeter": 1,
        "inch": 2.54,
        "decimeter": 10,
        "foot": 30.48,
        "yard": 91.4,
        "meter": 100,
        "kilometer": 100000
    };

    for (let key in units) {
        let elems = document.createElement("option");
        let elemsCopy;
        elems.setAttribute("value", key);
        elems.appendChild(document.createTextNode(key));
        elemsCopy = elems.cloneNode(true);
        unitInput.appendChild(elems);
        unitOutput.appendChild(elemsCopy);
    }


    function validateData(number) {
        if (number === '') {
            return number;
        }
        number = parseInt((Number(number)), 10);
        if (Number.isNaN(number)) {
            return 'Wrong input, please enter number again';
        }
        return number;
    }

    function logError(node, msg) {
        node.textContent = "";
        node.textContent = msg;
    }

    function calculateUnits(input, unitInput, unitOutput) {
        let result = validateData(input);

        if (typeof result === 'string') {
            logError(errorLog, result);
            return '';
        }
        result = (input * unitInput / unitOutput);
        logError(errorLog, 'Excellent! Calculator works!');
        return result;
    }

    input.addEventListener("keyup", function() {
        output.value = calculateUnits(input.value, units[unitInput.value], units[unitOutput.value]);
    });

    unitInput.addEventListener("change", function() {
        output.value = calculateUnits(input.value, units[unitInput.value], units[unitOutput.value]);
    });

    unitOutput.addEventListener("change", function() {
        output.value = calculateUnits(input.value, units[unitInput.value], units[unitOutput.value]);
    });

    return {};

})();
