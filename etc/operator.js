var kor = 100;
var eng = 90;
var math = 58;
var sum = kor + eng + math;
var avg = sum / 3;

console.log('총점: ' + sum);
console.log('평균: ' + Math.round(avg));
console.log('최고점: ' + Math.max(kor, eng, math));
console.log('최저점: ' + Math.min(kor, eng, math));

// 각 과목의 과락은 60점이다.
// 과락이 없고 평균이 70점 이상이면 'pass'를
// 과락이 있거나 평균이 70점 미만이면 'fail'을 출력하시오.(if)
if(kor>=60 && eng>=60 && math>=60 && avg>=70){
  console.log('pass');
}else{
  console.log('fail');
}
// 평균값으로 학점(A-90이상, B-80이상, C-70이상, D-60이상, F-60미만)을 출력하시오.(switch)
switch(Math.floor(avg/10)){
  case 10:
  case 9:
    console.log('A');
    break;
  case 8:
    console.log('B');
    break;
  case 7:
    console.log('C');
    break;
  case 6:
    console.log('D');
    break;
  default:
    console.log('F');
    break;
}
