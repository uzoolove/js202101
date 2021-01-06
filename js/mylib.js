var MyLib = {};

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