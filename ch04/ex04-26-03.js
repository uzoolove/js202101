// ex04-26.js 복사
var count = 0;
var myObj = {
  count: 0,
  visit: function(){
    // 방문자를 한명 증가시킨다.
    this.count++; // this = myObj
    var visitN = function(n){
      this.count += n; // this = window
    };
    visitN.call(this, 2);
    visitN.call(this, 2);

    var visit3 = visitN.bind(this, 3);
    visit3();
    visit3();

    var visit5 = visitN.bind(this, 5);
    visit5();
    visit5();
  }
};

myObj.visit();
myObj.visit();
console.log('총 방문자수', myObj.count);