function func(data1, data2){
  data1 += 10;
  data2[0] += 10;
  console.log(data1, data2[0]);
}

var d1 = 80; // number
var d2 = [80]; // array(object)

console.log('===== 함수 호출 이전 =====');
console.log(d1, d2[0]);

console.log('===== 함수 호출 =====');
func(d1, d2);

console.log('===== 함수 호출 이후 =====');
console.log(d1, d2[0]);