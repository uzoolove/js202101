var MyLib = {};

// 메모이제이션(캐싱) 기능의 함수(래퍼)
// isPrime(3) -> 캐시 X
// isPrime = isPrime.memoize();
// isPrime(3) -> 캐시 O
//  -> isPrime.memoization(3)
Function.prototype.memoize = function(){
  var fn = this;
  return function(){
    return fn.memoization.apply(fn, arguments);
  };
};

// 메모이제이션(캐싱) 기능의 함수
// isPrime(3) -> 캐시 X
// isPrime.memoization(1000000007) -> 캐시 O
Function.prototype.memoization = function(key){
  // 캐시를 위한 코드
  this._cache = this._cache || {};
  if(this._cache[key] != undefined){
    return this._cache[key];
  }else{
    return this._cache[key] = this(key);
  }
};


// 부분 적용 함수
// var minUnder100 = Math.min.mycurry(100, 200);
// minUnder100(1000, 500, 300, 400);
// -> Math.min(100, 1000, 500, 300, 400); -> 100
Function.prototype.mycurry = function(){
  var fn = this;
  var preArgs = Array.prototype.slice.call(arguments);
  return function(){
    var callArgs = Array.prototype.slice.call(arguments);
    var args = preArgs.concat(callArgs);
    return fn.apply(this, args);
  };
};

// Child가 Parent를 상속 받는다.
MyLib.inherite = function(Parent, Child){
  // var F = function(){};
  // F.prototype = Parent.prototype;
  // Child.prototype = new F();
  
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
};

// 배열의 최소값을 반환한다.
// [10,30,20].min();
Array.prototype.min = function(){
  return Math.min.apply(Math, this);
};

// firstLi.remove();
// -> firstLi.parentNode.removeChild(firstLi);
if(!HTMLElement.prototype.remove){
  HTMLElement.prototype.remove = function(){
    this.parentNode.removeChild(this);
  };
}

// ajax 요청으로 get 방식의 json 데이터를 받아온다.
MyLib.getJSON = function(url, data, success){
  MyLib.get(url, data, success, 'json');
};

// ajax 요청으로 get 방식의 text 데이터를 받아온다.
MyLib.get = function(url, data, success, dataType){
  var options = { dataType: dataType };
  if(typeof data == 'string'){
    options.data = data;
    options.success = success;
  }else{
    options.success = data;
  }

  MyLib.ajax(url, options);
};

// 서버에 ajax 요청한다.
// var ajax = function(url, method, async, data, dataType, success){
MyLib.ajax = function(url, options){
  options = options || {};
  options.method = options.method || 'get';
  if(options.async === undefined){
    options.async = true;
  }
  options.data = options.data || '';
  options.dataType = options.dataType || 'text';

  if(options.method.toLowerCase()=='get' && options.data){
    url += '?' + options.data;
    options.data = '';
  }
  // 1. XMLHttpRequest 생성		
  var xhr = new XMLHttpRequest();
  if(options.success){
    xhr.onload = function(){
      // 4. 응답 데이터 처리
      var result = xhr.responseText;
      if(options.dataType.toLowerCase()=='json'){
        result = JSON.parse(result);
      }
      options.success(result);
    }
  }
  // 2. 요청준비(open())
  xhr.open(options.method, url, options.async);
  // 3. 요청(send())
  xhr.send(options.data);
};