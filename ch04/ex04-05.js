// Function 생성자 함수 이용
var add = new Function('x', 'y', 'return x+y;');

console.log(add(10, 20));