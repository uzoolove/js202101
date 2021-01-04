// TODO: hoisting 단원. 변수 중복 선언
var arr = ['zero', 'one', 'two'];
var arr = ['zero', 'one', 'two', 'three', 'four'];
console.log(arr.length);

// 마지막 요소 접근
var last = arr[arr.length-1];
console.log('마지막 요소', last);
// 마지막 요소 추출
// var last = arr[arr.length-1];
// arr.length--;

var last = arr.pop();
console.log('추출한 마지막 요소', last);

// 첫번째 요소 추출
// var first = arr[0];
// for(var i=0; i<arr.length-1; i++){
//   arr[i] = arr[i+1];
// }
// arr.length--;

var first = arr.shift();
console.log('추출한 첫번째 요소', first);

console.log(arr);