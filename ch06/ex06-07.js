// 고등학교 성적관리 클래스(총점과 평균 계산)
function HighSchool(kor, eng){
	
}

var s1 = new HighSchool(100, 91);
console.log(s1.sum());
console.log(s1.avg());








































// 대학교 성적관리 클래스(총점, 평균과 학점 계산)
function College(kor, eng){
	
}

// College가 HighSchool을 상속받는다.


College.prototype.grade = function(){
	var grade = 'F';
	var avg = this.avg();
	if(avg >= 90){
		grade = 'A';
	}else if(avg >= 80){
		grade = 'B';
	}else if(avg >= 70){
		grade = 'C';
	}else if(avg >= 60){
		grade = 'D';
	}
	return grade;
};

/*
var s2 = new College(80, 71);
console.log(s2.sum());
console.log(s2.avg());
console.log(s2.grade());
*/






