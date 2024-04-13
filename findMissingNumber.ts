function findMissingNumber(arr: number[]) {
    const obj: {
      [key: string]: number;
    } = {};
  
    // find min and max value of array, fill the "obj" with current values
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) min = arr[i];
      if (arr[i] > max) max = arr[i];
      obj[arr[i]] = arr[i];
    }
  
    // delete existed values from the "obj" and add the missing number
    for (let i = 0; i < arr.length + 1; i++) {
      const v = min + i;
      if (obj[v] === v) delete obj[v];
      else obj[v] = v;
    }
  
    if (Object.values(obj).length > 0 && Object.values(obj)[0] < max)
      return Object.values(obj)[0];
    else return "The sequence of numbers is correct";
  }
  
  function test(arr: number[]) {
      const result = findMissingNumber(arr)
      console.log(`Input: [${arr}]\nOutput: ${result}`);
  }
  
  test([8, 9, 11, 12])
  test([5, 4, 1, 3, 2, 8, 7])
  test([4, -1, -2, 0, 6, 3, 2, 5])
  test([1, 3, 2, 0])
  
  