var Score = function(kor, eng){
  this.kor = kor;
  this.eng = eng;
  this.sum = function(){
    return this.kor + this.eng;
  };
  // this.avg = function(){
  //   return this.sum() / 2;
  // };
};
Score.prototype.avg = function(){
  return this.sum() / 2;
};

var s1 = new Score(100, 90);
var s2 = new Score(80, 70);

console.log(s1.sum());
console.log(s1.avg());
console.log(s2.sum());
console.log(s2.avg());