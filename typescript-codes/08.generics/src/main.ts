// function getArrayLength(arr: number[] | string[] | boolean[]): number{
//   return arr.length;
// }

function getArrayLength<T>(arr: T[]): number{
  return arr.length;
}

const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
const array3 = [true, false, true];

getArrayLength<number>(array1); 
getArrayLength<string>(array2); 
getArrayLength<boolean>(array3); 


interface Vehicle<T> {
  name: string;
  color: string;
  opttion: T;
}

const car: Vehicle<{price: number}> = {
  name: 'Car',
  color: 'red',
  opttion: {
    price: 1000
  }
}

const bike: Vehicle<boolean> = {
  name: 'Bike',
  color: 'blue',
  opttion: true
}