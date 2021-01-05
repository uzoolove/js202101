var Score = function(kor, eng, math){
	
};

// kim은 점수가 각각 100, 90, 80이다.
// lee는 점수가 각각 90, 80, 60이다.
var kim = new Score(100, 90, 80);
var lee = new Score(90, 80, 60);

// 두 사람의 총점과 평균을 출력하시오.
console.log(kim.sum(), kim.avg());
console.log(lee.sum(), lee.avg());

// 수학점수를 10점 올린 후 총점과 평균 출력
kim.math += 10;
lee.math += 10;
console.log(kim.sum(), kim.avg());
console.log(lee.sum(), lee.avg());








