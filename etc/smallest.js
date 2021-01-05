console.log(Math.min(10,100));	// 10
console.log(Math.min(200,100,50,60,80,30));//30
console.log(Math.min(100,20,60,50,70)); // 20

// 지정한 배열의 요소 중 최소값을 반환
function smallest(nums){
  // var min = nums[0];
  // for(var i=1; i<nums.length; i++){
  //   if(nums[i] < min){
  //     min = nums[i];
  //   }
  // }
  // return min;

  return Math.min.apply(this, nums);
  // TODO: prototype 단원. min()은 prototype.js 라이브러리에서 추가한 배열 메소드
  // return nums.min();
}

console.log(smallest([10,100]));	// 10
console.log(smallest([200,100,50,60,80,30]));//30
console.log(smallest([100,20,60,50,70]));	// 20
