var count = 0;
var myObj = {
  count: 0,
  visit: function(){
    // 방문자를 한명 증가시킨다.
    this.count++; // this = myObj
    var that = this;  // that = myObj
    var visit2 = function(){
      that.count++; // that = myObj
    };
    visit2();
  }
};

myObj.visit();
myObj.visit();
console.log('총 방문자수', myObj.count);