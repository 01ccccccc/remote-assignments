function countAandB(input) {
    var countA = 0;
    var countB = 0;

    for (var i = 0; i < input.length; ++i){
        if (input[i] == 'a'){
            countA++;
        }
    }
    for (var j = 0; j < input.length; ++j){
        if (input[j] == 'b'){
            countB++;
        }
    }
    var total = countA + countB;
    return total;
}

function toNumber(input) {
    var result = [];
    for (var i = 0; i < input.length; ++i){
        switch(input[i]) {
            case 'a':
                result.push(1);
                break;
            case 'b':
                result.push(2);
                break;
            case 'c':
                result.push(3);
                break;
            case 'd':
                result.push(4);
                break;
            case 'e':
                result.push(5);
                break;
        }
    }
    return result;
}
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]
let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]

