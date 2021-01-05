// 함수의 인자로 전달될 수 있다.
function foo(fn){
  console.log('foo 호출.');
  fn();
};

function bar(){
	console.log('bar 호출.');
};

foo(bar);
