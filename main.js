console.log('1');
for (let i = 10; i >= 0; i--){
    console.log(i);
}
console.log('-------------------------------------');

console.log('2');
let arrayEvenNumbers = [];
  for (let i = 0; i <= 8; i++){
    if (i % 2 === 0 && i != 0){
        arrayEvenNumbers.push(i);
    }
}
console.log(arrayEvenNumbers);

console.log('-------------------------------------');

console.log('3');
let days = ["Monday", "Wednesday", "Sunday"];
let plans = ["Lesson 3", "Lesson 4", "Rest Day"];
    if (days.length === plans.length){
      for(let i = 0; i < days.length; i++){
        console.log(`Today is - ${days[i]} you have a ${plans[i]}`);
    }
} 
console.log('-------------------------------------');

console.log('4');
let numbers = [79, 9, 88, 57, 89, 42, 86, 88, 37, 14];
let arraySlice = numbers.slice(0,5);
console.log(`All arr nubmers - ${numbers}`);
  for (let i = 0; i < arraySlice.length; i++){
    console.log(`Arr # ${arraySlice[i]}`);
}
console.log('-------------------------------------');

console.log('5');
let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36];
console.log(`Origin arr - ${checkArr}`);
  for (let i = 0; i < checkArr.length; i++){
    if (checkArr[i] < 0){
        checkArr[i] = 0;
    }
}
console.log(`Arr after - ${checkArr}`);