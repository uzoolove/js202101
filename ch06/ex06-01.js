// prototype 사용하지 않고 생성자 함수 내부에 작성
var Person = function(name){
	
};

var kim = new Person('김철수');
var lee = new Person('이영희');

console.log(kim.getName());	// 김철수
console.log(lee.getName());	// 이영희
kim.setName('홍길동');
console.log(kim.getName());	// 홍길동

console.log(kim.getName == lee.getName);	// false
console.log(kim.setName == lee.setName);	// false