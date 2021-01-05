// 함수의 결과 값으로 반환될 수 있다.
function foo(){
  console.log('foo 호출.');
  return function(){
    console.log('bar 호출.');
    return function(){
      console.log('baz 호출.');
      return foo;
    };
  };
};

foo()()()()()()()()();

var bar = foo();
var baz = bar();
baz();