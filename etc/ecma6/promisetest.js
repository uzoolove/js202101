// 동기방식
function f1(){
  console.log('f1 작업 시작.');
  console.log('f1 작업중...');
  var result = 'f1의 결과물';
  console.log('f1 작업 종료.');
  return result;
}
function f2(f1Result){
  console.log('f2 작업 시작. with', f1Result);
  console.log('f2 작업중...');
  var result = 'f2의 결과물';
  console.log('f2 작업 종료.');
  return result;
}
function test1(){
  var f1Result = f1();
  var f2Result = f2(f1Result);
  console.log('최종 결과물', f2Result);
}

// 비동기방식
function f1(resolve){
  console.log('f1 작업 시작.');
  setTimeout(function(){
    console.log('f1 작업중...');
    var result = 'f1의 결과물';
    console.log('f1 작업 종료.');
    resolve(result);
  }, 1000);
}
function f2(f1Result, resolve){
  console.log('f2 작업 시작. with', f1Result);
  setTimeout(function(){
    console.log('f2 작업중...');
    var result = 'f2의 결과물';
    console.log('f2 작업 종료.');
    resolve(result);
  }, 800);
}
function test1(){
  f1(function(f1Result){
    f2(f1Result, function(f2Result){
      console.log('최종 결과물', f2Result);
    });
  });
}
// test1();

function p1(){
  return new Promise(function(resolve, reject){
    console.log('f1 작업 시작.');
    setTimeout(function(){
      console.log('f1 작업중...');
      var result = 'f1의 결과물';
      console.log('f1 작업 종료.');
      resolve(result);
    }, 1000);
  });
}
function p2(f1Result){
  return new Promise(function(resolve, reject){
    console.log('f2 작업 시작. with', f1Result);
    setTimeout(function(){
      console.log('f2 작업중...');
      var result = 'f2의 결과물';
      console.log('f2 작업 종료.');
      resolve(result);
    }, 800);
  });
}
function test2(){
  p1().then(p2).then(p1).then(p2).then(function(result){
    console.log('최종 결과물', result);
  }).catch(function(err){
    // reject가 호출 되면 실행
    console.error(err);
  });
}
test2();

function test3(){
  p1();
  p2();
}
// test3();