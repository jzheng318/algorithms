class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }
}
/**
 *          100
 *         5                        502
 *       5  15                204         55000
 *      2     22                205
 *     1 3                  206     207
 *     1             203                208
 *     1
 *      1
 *      1
 * -51
 */

const test = new BST(100)
  .insert(5)
  .insert(15)
  .insert(5)
  .insert(2)
  .insert(1)
  .insert(22)
  .insert(1)
  .insert(1)
  .insert(3)
  .insert(1)
  .insert(1)
  .insert(502)
  .insert(55000)
  .insert(204)
  .insert(205)
  .insert(207)
  .insert(206)
  .insert(208)
  .insert(203)
  .insert(-51)
  .insert(-403)
  .insert(1001)
  .insert(57)
  .insert(60)
  .insert(4500);

function findClosestValueInBst(tree, target, closest) {
  // Write your code here.
  //closest is an object that holds smallest difference:val

  //base case:
  if (tree === null) {
    console.log('BASECASE: tree is null, returning', closest);
    return closest;
  }

  if (Math.abs(target - tree.value) < Math.abs(target - closest)) {
    console.log(
      'RESET CLOSEST: current value is closer to target that stored value'
    );
    console.log('currentval:', tree.value, 'VS closestVal:', closest);
    closest = tree.value;
  }

  console.log('RECURSION: current val: ', tree.value);
  if (target < tree.value) {
    console.log('target', target, 'less than current val, moving to the left');
    findClosestValueInBst(tree.left, target, closest);
  } else if (target > tree.value) {
    console.log(
      'target',
      target,
      'greater than current val, moving to the right'
    );
    findClosestValueInBst(tree.right, target, closest);
  } else {
    console.log('target', target, 'same as current val, returning');
    return tree.value;
  }
}

findClosestValueInBst(test, 1000);
