
//const arr =[5,1,3,2,6];
//map================MAP========================================
//double-[10,2,6,4,12]
//triple-[15,3,9,6,18]
//binary-[101,1,11,10,110]


//function double(x){
   // return x * 2;
//}
//const output = arr.map(double);
//console.log(output);


//====================================
//function triple(x){ 
    ///return x*3;
//}

//const output = arr.map(triple);
//console.log(output);

//===================================

//function binary(x){
    // return x.toString(2);
    //}

//const output = arr.map(binary);
//console.log(output);







//-----------------Filter----------------------------
// filter- filter the value inside the array...

//const arr =[5,1,3,2,6];
//filter odd values inside the array...
//function isOdd(x){
  //  return x % 2;
//}
//const output = arr.filter(isOdd);
//console.log(output);


//=================
//filter even numbers inside the array...//


//function isEven(x){
   // return x % 2===0;
//}
//const output = arr.filter(isEven);
//console.log(output);



//---------------------------------------------------------
//const arr =[5,1,3,2,6];
//we find the all values which are greater than 4

//function isGreater(x){
  //  return x > 4;
//}

//const output = arr.filter(isGreater);
//console.log(output);

//--------------------------------

//we find the less than from 6


//const output = arr.filter((x) =>x < 6);
//console.log(output);





//----------Reduce-------------------------
//below example find sum before reduce...
const arr =[5,1,3,2,6];
function Findsum(arr){
let sum = 0;
for(let i=0; i<arr.length;i++)
{
sum =sum + arr[i];
}
return sum;
}
console.log(Findsum(arr));



//after reduce method---
const arr =[5,1,3,2,6];
const output = arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0);
console.log(output);






