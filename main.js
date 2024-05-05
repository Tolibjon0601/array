// array ichidagi eng katta sonni topish
// 1-usul
// let array =[3,5,8,9,7,15,48];
// let largestNum=0;
// for(i=0;i<=array.length;i++){
// if(array[i]>largestNum){
//   largestNum=array[i];
// }
// }
// console.log(largestNum);

// 2-usul

// function findMax() {
//   let Arr = [50, 60, 20, 10, 40];
//   let maxValue = Math.max(...Arr);
//   console.log("Maximum Element is:" + maxValue);
// }

// findMax()


// array ichidagi eng kichik sonni topish 1-usul

// let array =[3,5,8,9,7,15,48];
// let minimum=array[0];
// for(i=0;i<=array.length;i++){
// if(array[i]<minimum){
//   minimum=array[i];

// }
// }
// console.log(minimum);

//  2-usul
// function findMin() {
//   let Arr = [50, 60, 20, 10, 40];
//   let minValue = Math.min(...Arr);
//   console.log("Minimum Element is:" + minValue);
// }

// findMin()

// array ichidagi juft  sonni topish
// let arr=[3,5,45,78,23,16,50];
// let EvenNumbers=[];
// for( let i=0;i<=arr.length;i++){
//   if(EvenNumbers[i]%2==0)
//   EvenNumbers.push(arr[i]);
// }
// console.log(EvenNumbers)

let numbers = [3,5,6,7,8,9,46,101];
let odds = [];
for (let num of numbers) {
  if (num % 2 === 1) {
    odds.push(num);
  }
}
console.log(odds);