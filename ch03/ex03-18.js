// 지정한 배열의 모든 요소를 출력한다.
function printArr(arr){
	for(var i=0; i<arr.length; i++){
    console.log(i, arr[i]);
  }
}

var colorArr = ['orange', 'yellow', 'green'];
colorArr.push('black');
colorArr.push('white');
console.log(colorArr.shift());
console.log(colorArr.pop());
printArr(colorArr);

/**
 * 유사배열객체
 *  - length 속성 추가
 *  - 0부터 시작해서 1씩 증가하는 속성 추가
 */
var colorObj = {
  0: "orange",
  1: "yellow",
  2: "green",
  length: 3,
  push: function(elem){
    // 마지막 인덱스에 지정한 elem를 추가한다.
    colorObj[colorObj.length] = elem;
    colorObj.length++;
  },
  pop: function(){
    // 마지막 요소를 추출해서 반환
    var last = colorObj[colorObj.length-1];
    colorObj.length--;
    delete colorObj[colorObj.length];
    return last;
  },
  shift: function(){
    // 첫번째 요소 추출
    var first = colorObj[0];
    for(var i=0; i<colorObj.length-1; i++){
      colorObj[i] = colorObj[i+1];
    }
    colorObj.length--;
    delete colorObj[colorObj.length];
    return first;
  },
};
colorObj.push('black');
colorObj.push('white');
console.log(colorObj.shift());
console.log(colorObj.pop());
printArr(colorObj);