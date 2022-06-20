function count(input) {
  var countAmount = {};
  for (var i = 0; i < input.length; i++) {
    if (input[i] in countAmount) {
      // https://stackoverflow.com/questions/455338/how-do-i-check-if-an-object-has-a-key-in-javascript
      countAmount[input[i]] += 1;
    } else {
      countAmount[input[i]] = 1;
    }
  }
  return countAmount;
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  var sumGroup = {};
  for (let i = 0; i < input.length; i++) {
    if (input[i]["key"] in sumGroup) {
      sumGroup[input[i]["key"]] += input[i]["value"];
    } else {
      sumGroup[input[i]["key"]] = input[i]["value"];
    }
  }

  return sumGroup;
}
let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
