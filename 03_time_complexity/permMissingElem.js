/**
A zero-indexed array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);
that, given a zero-indexed array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Assume that:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
*/

// method 1 - using the sum formula
function solution1(A) {
  const total = (A.length + 1) * (A.length + 2) / 2;
  return A.reduce((acc, num) => acc - num, total);
}

// method 2 - using XOR
function solution2(A) {
  let x1 = A[0]; // xor all elements in array
  let x2 = 1; // xor all elements from 1 to n+1 (n+1 since 1 number is missing)
  for (let i = 1; i < A.length; i++) {
    x1 ^= A[i];
  }
  for (let i = 2; i <= A.length + 1; i++) {
    x2 ^= i;
  }

  return x2 ^ x1;
}

var a = [2,4,1,5,6,3,8];
console.log(solution1(a));
console.log(solution2(a));