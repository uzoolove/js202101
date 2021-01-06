var ajax = function(url, method, async, data, dataType, success){
  if(method.toLowerCase()=='get' && data){
    url += '?' + data;
    data = '';
  }
  // 1. XMLHttpRequest 생성		
  var xhr = new XMLHttpRequest();
  xhr.onload = function(){
    // 4. 응답 데이터 처리
    var result = xhr.responseText;
    if(dataType.toLowerCase()=='json'){
      result = JSON.parse(result);
    }
    success(result);
  }
  // 2. 요청준비(open())
  xhr.open(method, url, async);
  // 3. 요청(send())
  xhr.send(data);
};