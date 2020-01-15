/*
    created by Adebayo Abdul-matin
    madeayo04@gmail.com
*/

//metric weight converter

function weightConverter(source, valNum) {
    //parsing string valNum to float variable
    valNum = parseFloat(valNum);

    //declaring variables
    var inputPounds = document.getElementById("pounds");
    var inputKilograms = document.getElementById("kilograms");
    var inputGrams = document.getElementById("grams");

    //initialize variables with conversion values
    if (source == "pounds") {
        inputKilograms.value = (valNum / 2.2046).toFixed(2);
        inputGrams.value = (valNum / 0.0022046).toFixed();

    }
    if (source == "kilograms") {
        inputPounds.value = (valNum * 2.2046).toFixed(2);
        inputGrams.value = (valNum * 1000).toFixed();

    }
    if (source == "grams") {
        inputPounds.value = (valNum * 0.0022046).toFixed(4);
        inputKilograms.value = (valNum / 1000).toFixed(4);

    }

}
//end of weight conversion function


//metric speed converter

//input field receives input, convert the value
function speedConverter(source, valNum) {
    //parsing string value to float
    valNum = parseFloat(valNum);

    //declaring variables
    var inputMph = document.getElementById("mph");
    var inputKph = document.getElementById("kph");
    var inputKnots = document.getElementById("knots");

    //initialize variables with conversion values
    if (source == "mph") {
        inputKph.value = (valNum * 1.609344).toFixed(2);
        inputKnots.value = (valNum / 1.150779).toFixed(2);

    }
    if (source == "kph") {
        inputMph.value = (valNum / 1.609344).toFixed(2);
        inputKnots.value = (valNum / 1.852).toFixed(2);
    }
    if (source == "knots") {
        inputMph.value = (valNum * 1.150779).toFixed(2);
        inputKph.value = (valNum * 1.852).toFixed(2);
    }
}

//metric temperature converter
function tempConverter(source, valNum) {
    //parsing string value to float
    valNum = parseFloat(valNum);

    //declaring variables
    var inputCel = document.getElementById("celsius");
    var inputKel = document.getElementById("kelvin");
    var inputFahr = document.getElementById("fahr");

    //initialize with conversion values
    if (source == "celsius") {
        inputKel.value = (valNum + 273.15).toFixed(2);
        inputFahr.value = ((valNum * 1.8) + 32).toFixed(2);
    }
    if (source == "kelvin") {
        inputCel.value = (valNum - 273.15).toFixed(2);
        inputFahr.value = (((valNum - 273.15) * 1.8) + 32).toFixed(2);
    }
    if (source == "fahr") {
        inputCel.value = ((valNum - 32) / 1.8).toFixed(2);
        inputKel.value = (((valNum - 32) / 1.8) + 273.15).toFixed(2);
    }
}

//metric length converter
function lengthConverter(source, valNum) {
    //parsing string value to float
    valNum = parseFloat(valNum);

    //declaring variables
    var inputCm = document.getElementById("cm");
    var inputMeters = document.getElementById("meters");
    var inputKilo = document.getElementById("kilo");
    var inputInches = document.getElementById("inches");

    //initialize with conversion values
    if (source == "cm") {
        inputMeters.value = (valNum / 100).toFixed(3);
        inputKilo.value = (valNum / 100000).toFixed(5);
        inputInches.value = (valNum * 0.39370).toFixed(3);
    }
    if (source == "meters") {
        inputCm.value = (valNum / 0.01).toFixed(3);
        inputKilo.value = (valNum / 1000).toFixed(5);
        inputInches.value = (valNum * 39.370).toFixed(4);
    }
    if (source == "kilo") {
        inputCm.value = (valNum * 100000).toFixed(3);
        inputMeters.value = (valNum * 1000).toFixed(3);
        inputInches.value = (valNum * 39370).toFixed(4);
    }
    if (source == "inches") {
        inputCm.value = (valNum / 0.39370).toFixed(3);
        inputMeters.value = (valNum / 39.370).toFixed(3);
        inputKilo.value = (valNum / 39370).toFixed(5);
    }
}