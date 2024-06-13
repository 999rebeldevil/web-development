// console.log('chaliye shuru karte hai');
// object
// let rectangle = {
//    length: 1,
//    breadth: 2,
//    draw: function(){
//        console.log('drawing rectangle');
//    }
// };

// factoy function
// function createRectangle(length, breadth){
//     return rectangle = {
//         length: length,
//         breadth: breadth,
//         draw: function(){
//             console.log('drawing rectangle');
//         }
//     };
    
// }
// let rectangleObj1 = createRectangle(5, 4);
// let rectangleObj2 = createRectangle(15, 6);
// let rectangleObj3 = createRectangle(9, 13);

// constructor function
// function rectangle(length, breadth){
//     this.length = length;
//     this.breadth = breadth;
//     this.draw = function(){
//         console.log('drawing');
//     }

// }
// let rectangleObject = new rectangle(6, 10);
// rectangleObject.color = 'yellow';
// console.log(rectangleObject);
// delete rectangleObject.color;
// console.log(rectangleObject);

// let a = 10;
// let b = a;
// a++;
// console.log(a);
// console.log(b);


// let a = { value: 10};
// let b = a;
//  a.value++;
//  console.log(a.value);
//  console.log(b.value);


// let a = 10;

// function inc(a){
//     a++;
// }
// inc(a);

// console.log(a);


// let a = {value: 10};
// function inc(a){
//     a.value++;

// }
// inc(a);
// console.log(a);


// let rectangle = {
//     length:2,
//     breadth:4,
//     color:'green'

// };
// for in loop
// for(let key in rectangle){
//     console.log(key, rectangle[key]);
// }

// if('color' in rectangle){
//     console.log('Present');
// }
// else{
//     console.log('Absent');
// }


// object colone #1
// let src = {
//     a:10,
//     b:20,
//     c:30,

// };
// let dest = {};

// for(let key in src) {
//     dest[key] = src[key];

// }
// console.log(dest);

// src.a++;
// console.log(dest);

// object colone #2

// let src = {
//     a:10,
//     b:20,
//     c:30,
// };

// let src2 ={ value: 24};
// let dest = Object.assign({}, src, src2);
// console.log(dest);

// src.a++;
// console.log(dest);

// object colone #3

let src = {
    a:10,
    b:20,
    c:30,

};

let dest = {...src};
console.log(dest);
src.a++;
console.log(dest);