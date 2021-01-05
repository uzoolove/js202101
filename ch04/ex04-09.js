var num = 100;        // number
var str = 'hello';    // string
var obj = {};         // object
var arr = [num, str]; // object(array)

// 함수를 변수에 할당
var foo = function(){
  console.log(this);
  return 'I am foo.';
};

// 함수를 배열의 요소로 할당
arr.push(obj);
arr.push(foo);

// 함수를 객체의 속성으로 할당(메소드)
obj.bar = foo;
obj.baz = function(){
  return 'I am baz.';
};
console.log(foo(), obj.bar(), arr[3](), arr[2].bar());