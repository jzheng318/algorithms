function threeNumberSum(array, targetSum) {
  // Write your code here.
  console.log('~~~~~~~BEGINNING~~~~~~~~~');
  let retArray = [];
  array = array.sort((a, b) => {
    a - b;
  });
  console.log('SORTED ARRAY: ', array);
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    let currentArray = [el];
    let remSum = targetSum - el;
    console.log('CURRENT ELEMENT:', el);
    console.log('REMAINING SUM:', remSum);
    let leftPointer = i + 1;
    let rightPointer = array.length - 1;
    console.log(leftPointer, rightPointer);
    while (leftPointer < rightPointer && leftPointer < array.length) {
      let leftEl = array[leftPointer];
      let rightEl = array[rightPointer];

      let sum = leftEl + rightEl;

      if (sum < remSum) {
        leftPointer++;
      } else if (sum > remSum) {
        rightPointer--;
      } else {
        currentArray.push(leftEl);
        currentArray.push(rightEl);
        console.log('CURRENT ARRAY:', currentArray);
        retArray.push(currentArray);
        console.log('retArray:', retArray);
        break;
      }
    }
  }
  console.log('RETARRAY RETURNED:', retArray);
  return retArray;
}

// Do not edit the line below.
threeNumberSum([1, 2, 3], 6);
