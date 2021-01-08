var Counter = function(){
	var count = 0;
	this.ride = function(){
    if(count < 45){
      count++;
    }else{
      console.log('정원 초과!');
    }		
	};
	this.getCount = function(){
		return count;
	};
};

var c = new Counter();
c.ride();
c.ride();

// c.count += 50;

for(var i=0; i<50; i++){
  c.ride();
}

console.log('전체 탑승자', c.getCount());
