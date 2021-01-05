// 동적으로 생성된 프로퍼티를 가질 수 있다.
function add(x, y){
  add.result = x + y;
  return add.result;
}

console.log(add(10, 20), add(10, 20));

var result = add(30, 40);
console.log(result, result);

// 마지막 계산 결과를 출력
// add(50, 60);
console.log(add.result, add.result);