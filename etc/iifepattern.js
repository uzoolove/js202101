// var alert = '출입 금지!';
// console.log(alert);

function fn(){
  var alert = '출입 금지!';
  console.log(alert);
}
fn();

(function(){
  var alert = '출입 금지!!';
  console.log(alert);
})();

function fn(alert){
  console.log(alert);
}
fn('출입 금지!!!');

(function(alert){
  console.log(alert);
})('출입 금지!!!!');

alert('작업 완료.');