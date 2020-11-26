// To figure out the Big-O Notation for a function, we have to follow a series
// of steps. For each statement in the function:

// 1. If this statement were to run once, how many simple calculations would it
//    take in terms of the size of the data sets being used. In other words,
//    what is the Big-O Notation for that one statement if run by itself?
// 2. How many times will this statement run worst-case, within the context of
//    this function, in terms of the size of the data sets being used?
// 3. Take the answers from steps 1 and 2, and multiply them together. That is
//    the Big-O Notation for this statement.

// After finding the Big-O Notation for every line, find the statement(s) with
// the largest Big-O Notation. That is the Big-O Notation for the function.

// Big-O for getUnique1(n): O(n^2)
function getUnique1(values) {
  const uniqueValues = [];  // 1. O(1) * 2. O(1) = 3. O(1)

  for (
    let valueIndex = 0;  // 1. O(1) * 2. O(1) = 3. O(1)
    valueIndex < values.length;  // 1. O(1) * 2. O(n) = 3. O(n)
    valueIndex++  // 1. O(1) * 2. O(n) = 3. O(n)
  ) {
    const value = values[valueIndex];  // 1. O(1) * 2. O(n) = 3. O(n)
    let unique = true;  // 1. O(1) * 2. O(n) = 3. O(n)
    for (
      let compareIndex = 0;  // 1. O(1) * 2. O(n) = 3. O(n)
      compareIndex < valueIndex;  // 1. O(1) * 2. O(n^2) = 3. O(n)
      compareIndex++  // 1. O(1) * 2. O(n^2) = 3. O(n^2)
    ) {
      const compareValue = value[compareIndex];  // 1. O(1) * 2. O(n^2) = 3. O(n^2)
      if (compareValue === value) {  // 1. O(1) * 2. O(n^2) = 3. O(n^2)
        unique = false;  // 1. O(1) * 2. O(n^2) = 3. O(n^2)
      }
    }

    if (unique) {  // 1. O(1) * 2. O(n) = 3. O(n)
      uniqueValues.push(value);  // 1. O(log(n)) * 2. O(n) = 3. O(n * log(n))
    }
  }

  return uniqueValues;  // 1. O(1) * 2. O(1) = 3. O(1)
}

// n^2 = n * n
//log(n) = logarithm
