console.log(Math.max(10, 1000, 500, 300, 400)); // 1000
console.log(Math.max(10, 1, 6, 7, 3, 6, 4, 2)); // 7

console.log(Math.min(100, 1000, 500, 300, 400)); // 300
console.log(Math.min(100, 1, 6, 7, 3, 6, 4, 2)); // 1

/*
함수명: maxAbove10
전달받은 인자값들 중 가장 큰 값을 반환한다.
단, 최대값이 10을 넘지 않는 경우 10을 반환한다.
즉, 최소 10 이상의 결과가 나와야 한다.
*/
var maxAbove10 = function(){
  // etc/smallest.js 참조
  var max = Math.max.apply(this, arguments);
  if(max < 10){
    max = 10;
  }
  return max;
};

/*
함수명: minUnder100
전달받은 인자값들 중 가장 작은 값을 반환한다.
단, 최소값이 100을 넘을 경우 100을 반환한다.
즉, 최대 100 이하의 결과가 나와야 한다.
*/
var minUnder100 = function(){
  var fn = Math.min;
  var preArgs = [100];
  // [1000, 500, 300, 400]
  var callArgs = Array.prototype.slice.call(arguments);
  // [100, 1000, 500, 300, 400]
  var args = preArgs.concat(callArgs);
  // Math.min(100, 1000, 500, 300, 400)
  return fn.apply(this, args);
};

var maxAbove10 = Math.max.mycurry(10);
var minUnder100 = Math.min.mycurry(100);

console.log(maxAbove10(1000, 500, 300, 400));// 1000
console.log(maxAbove10(1, 6, 7, 3, 6, 4, 2));// 10

console.log(minUnder100(1000, 500, 300, 400));// 100
console.log(minUnder100(1, 6, 7, 3, 6, 4, 2));// 1




