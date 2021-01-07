var Counter = function(){
	this.count = 0;
	this.ride = function(){
		this.count++;
	};
	this.getCount = function(){
		return this.count;
	};
};

var c = new Counter();
c.ride();
c.ride();

console.log('전체 탑승자', c.getCount());
