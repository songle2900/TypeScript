const carMakers = ['ford', 'toyota', 'chevy'];
const carMakersEmpty: string[] = [];
const dates = [new Date(), new Date()];

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];
const carsByMakeEmpty: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map' 'forEach' 'reduce'
carMakers.map((car: string): string => {
  return car.toLocaleUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
