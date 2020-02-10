const myMergesort = (arr)=> {
  if(arr.length === 1) return arr;

  let mid = arr.length/2
  let left = arr.slice(0,mid), right = arr.slice(mid)

  return sort(myMergesort(left), myMergesort(right))
}

const sort = (left, right)=>{
  let result = [], leftIndex = 0, rightIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex]< right[rightIndex]){
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const testCase1 = myMergesort([1]);
const testCase2 = myMergesort([2,3,4,1]);
const testCase3 = myMergesort([21,1,1,1]);

console.log(`Test1: ${testCase1}`)
console.log(`Test2: ${testCase2}`)
console.log(`Test2: ${testCase2}`)
