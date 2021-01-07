var global = '전역변수';
function outer(){
  var innerVal = 'outer의 지역변수';
  var innerFn = function(){
    console.log(innerVal);
  };
  innerFn();
}

outer();

console.log(global);	// 전역변수는 스크립트 내의 어느 곳에서나 접근 가능
console.log(innerVal);// 지역변수는 선언한 함수내에서만 접근 가능