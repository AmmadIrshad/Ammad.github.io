var currency = [5000, 1000, 500, 100, 50, 20, 10, 5, 2, 1];
var output = [];

document.querySelector(".check").addEventListener("click", function() {
    var userInput = Number(document.querySelector(".Currency_value").value);
    console.log(userInput, typeof userInput);
    for (var i = 0; i < currency.length; i++) {
        if (userInput == currency[i]) {
            output.push(currency[i]);

            break;
        }
        if (userInput > currency[i]) {
            var a = userInput - currency[i];
            output.push(currency[i]);
            userInput = a;
            i--;
        }
    }
    document.querySelector(".no-of-notes").textContent = output.length;
    document.querySelector(".notes").textContent = output;
    console.log(`Possible notes ${output.length}`);
    output.splice(0, output.length);

    console.log(output);
});