function fn(n1, n2){
  // console.log(n1, n2);
  // 모든 인자값의 합계를 출력
  var sum = 0;
  for(var i=0; i<arguments.length; i++){
    sum += arguments[i];
  }
  console.log('합계', sum);
}

fn();
fn(10);
fn(20, 30);
fn(40, 50, 60);
fn(234,23,435,356,467,57867,845,63,45,23,424,65,47,56,85,6,34);
