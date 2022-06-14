function max(numbers) {
    var result = numbers[0];
    for (var i=1; i < numbers.length; i++) {
        if (numbers[i] > result) {
            result = numbers[i]
        }
    }
    return result;
}
function findPosition(numbers, target) {
    var result;
    for (var i = 0; i < numbers.length; i++){
        if (numbers[i] === target) {
            result = i;
            break;
        }
        else {
            result = -1;
        }
    }
    return result;
}
console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7
console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print2 (the first position)
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1