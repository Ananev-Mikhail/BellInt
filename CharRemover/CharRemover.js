function getResult(input){

    if (input.length < 2){
        return input;
    }

    const splitters = /[-.?!) (,:;'"]/;//[' ', '"', '.', ',', ':', ';', '!', '?'];
    var words = input.split(splitters),
        repeat = [],
        temp,
        result = [];

    for (let i=0; i < words.length; i++){
        temp = [];
       for (let j = 0; j < words[i].length; j++){
            if (temp.indexOf(words[i][j]) == -1){
                temp.push(words[i][j]);
            } else {
                repeat.push(words[i][j]);
            }
        }
    }

    for (let i = 0; i < input.length; i++){
        if (repeat.indexOf(input[i]) == -1){
            result.push(input[i]);
        }
    }

    return result.join("");
}

function checkInput(){
    var input = document.getElementById("input_words").value,
        output = document.getElementById("result");



    output.value = getResult(input);
}

// window.onload = function(){
//     document.forms[0].onsubmit = checkInput;
// }

(function () {
    document.getElementById("resultButton").onclick = checkInput;
})();