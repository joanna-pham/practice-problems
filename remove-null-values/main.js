function removeNullValues(array) {
  console.log('hi')
}


console.log(removeNullValues([3, 5, null, null, 87, "hello", "goodbye"])); // -> [3,5,87,"hello", "goodbye"]
console.log(removeNullValues([true, null, false, {}, null, 43, "node"])); // -> [true, false, {}, 43, "node"]
console.log(removeNullValues([null, null, null, 7, null, "eight"])); // -> [7, "eight"]
