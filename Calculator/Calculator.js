function getResult () {
    var inputExp = document.getElementById("inputExp").value,
    result = document.getElementById("result"),
    mathSymbols = /[-+./*=]/,
    arrNumber = inputExp.split(mathSymbols),
    position = -1,
    tempResult = 0;

    if (!inputExp.length || !arrNumber.length){
        result.value = "Wrong input";
    }

    if (inputExp[inputExp.length - 1] !== "="){
        result.value = '"=" expected';
    }

    tempResult = +arrNumber[0];

    for (let i = 1; i < arrNumber.length; i++){
        position += arrNumber[i - 1].length + 1;
        switch (inputExp[position]){
            case "+":
                tempResult += +arrNumber[i];
                break;
            case "-":
                tempResult -= +arrNumber[i];
                break;
            case "*":
                tempResult *= +arrNumber[i];
                break;
            case "/":
                tempResult /= +arrNumber[i];
                break;
            default:
                result.value = tempResult.toFixed(2);
        } 
    }




}

window.onload = function () {
    document.getElementById("getResult").onclick = getResult;
}