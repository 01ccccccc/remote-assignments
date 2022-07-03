function binarySearchPosition(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;


    while(left <= right) {
        let mid = parseInt((left + right) / 2);
        
        if (numbers[mid] === target) {
            // found and return
            return mid;
        } else if (numbers[mid] < target) {
            // continue searching to the right
            left = mid + 1;
        } else {
            //continue searching to the left
            right = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3

// Binary Search in JavaScript: https://stackabuse.com/binary-search-in-javascript/