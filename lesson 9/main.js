// N 1

// const me = {
//     firstname: "Zafarbek",
//     lastname: "Karimboyev",
//     age: 18,
//     languages: ["JavaScript", "Python", "C++", "Node.js"],
//     friends :["Jamshid","Abbos","Jalol",`Mar'uf`],
// };
// console.log(me);

// N 2

// let n = prompt("n:")
// let daraja = {}
// for(let i=1;i<=n;i++){
//     daraja[i]=i**2
// }
// console.log(daraja);

// N 3

// let n = +prompt("n:");
// let daraja = {};

// for(let i = 1; i <= n; i++){
//     daraja[i] = i ** 2;
//     console.log(`Key: ${i}, Value: ${daraja[i]}`);
// }

// N 4

// let str = ["Sultonqul","Safarmurod","Oral","Jahongir"]
// arr = []
// for (const i of str){
//     arr[i]=i.length
// }
// console.log(arr);

// N 5

// const maxsulot = {
//     apilsin: 10000,
//     olma: 1200,
//     mandarin: 8000,
//     banan: 20000,
// };

// const values = Object.values(maxsulot);
// const total = values.reduce((acc, curr) => acc + curr, 0);

// console.log("Jami yig'indi:", total,`so'm`);

// N 6

// const obj ={
//     aa: 11,
//     dd: 55,
//     8: 5,
//     x: 55,
// };

// if (typeof Object.keys(obj) === String) {
//     console.log(true);
// } else {
//     console.log(false);
// }


// N 7

// let gap = "Men Sultonqul Programmerning guruhlarida o’qiyman."
// console.log(gap.slice(0,3,));
// console.log(gap.slice(14,28));

// N 8

// let obj = {
//     'a':false,
//     'b':12,
//     'c':true,
//     'd':0
// }
// let tt =Object.keys(obj)
// for(let i in tt){
//     if(obj[tt[i]]==false ){
//         delete obj[tt[i]]
//     }
// }

// console.log(obj);

// N 9

// function getNameMaxAge(people) {
//     let maxAge = 0;
//     let maxAgeName = "";
  
//     for (let i = 0; i < people.length; i++) {
//       if (people[i].age > maxAge) {
//         maxAge = people[i].age;
//         maxAgeName = people[i].name;
//       }
//     }
  
//     return maxAgeName;
//   }
  
//   const people = [
//     { name: "Sultonqul", age: 23 },
//     { name: "Erkin", age: 20 },
//     { name: "Temur", age: 21 },
//   ];
  
//   console.log(getNameMaxAge(people)); 
  

// N 10

// function countOccurrences(arr) {
//     const occurrences = {};
  
//     for (let i = 0; i < arr.length; i++) {
//       const num = arr[i];
//       if (occurrences[num]) {
//         occurrences[num]++;
//       } else {
//         occurrences[num] = 1;
//       }
//     }
  
//     return occurrences;
//   }
  
//   const inputArray = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
//   const outputObject = countOccurrences(inputArray);
//   console.log(outputObject); 

// N 11

// function createNumberObject(number) {
//     const numberString = number.toString();
//     const length = numberString.length;
  
//     const units = {
//       1: "birlar",
//       3: "minglar",
//       6: "millionlar",
//       9: "milliardlar",
//       12: "trilionlar"
//     };
  
//     const result = {};
  
//     for (let i = length; i > 0; i -= 3) {
//       const startIndex = Math.max(0, i - 3);
//       const sliceLength = Math.min(i, 3);
//       const slice = numberString.slice(startIndex, i);
//       result[units[i]] = parseInt(slice);
//     }
  
//     return result;
//   }
  
//   const number = 8945472985629;
//   const outputObject = createNumberObject(number);
//   console.log(outputObject);
  
// N 12

// const books = [
//     {
//       title: "Halqa",
//       author: "Akrom Malik",
//       alreadyRead: false,
//     },
//     {
//       title: "Dunyo ishlari",
//       author: "O'tkir Hoshimov",
//       alreadyRead: true,
//     },
//     {
//       title: "Vaqtning qadri",
//       author: "Abdulfattoh Abu G'udda",
//       alreadyRead: false,
//     },
//   ];
  
//   for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     const readStatus = book.alreadyRead ? "o'qigan" : "o'qilmagan";
//     console.log(`${book.title} - ${book.author}: ${readStatus}`);
//   }
  
// N 13

// function transformObject(obj) {
//     const result = {};
  
//     for (const key in obj) {
//       const value = obj[key];
//       if (result[value]) {
//         result[value].push(parseInt(key));
//       } else {
//         result[value] = [parseInt(key)];
//       }
//     }
  
//     return result;
//   }
  
//   const inputObject = {1: 20, 2: 3S0, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20};
//   const outputObject = transformObject(inputObject);
//   console.log(outputObject);

// N 14

// const obj1 = { a: 3, b: 10, c: 5, d: 7 };
// const obj2 = { a: 10, d: 4, e: 6, f: 15 };

// const obj = {};

// for (const key in obj1) {
//   if (!obj2.hasOwnProperty(key)) {
//     obj[key] = obj1[key];
//   }
// }

// for (const key in obj2) {
//   if (!obj1.hasOwnProperty(key)) {
//     obj[key] = obj2[key];
//   }
// }

// console.log(obj);


// N 15

// const products = [
//     { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//     { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//     { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//     { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//     { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
//   ];
  
//   let totalAmount = 0;
  
//   for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     const discountedPrice = product.price * (100 - product.discount) / 100;
//     const totalPrice = discountedPrice * product.quantity;
//     totalAmount += totalPrice;
//   }
  
//   console.log("Umumiy summa:", totalAmount);
  
