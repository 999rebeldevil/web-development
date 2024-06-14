// // console.log('namaste duniya');
// // let lastName = 'Mehta';

// // let firstName = new String('ji');

// // let message = 
// // `Hello ${firstName},
// //     i am mantosh mehta 

// //     thanks for reading this messeag`;

// // let words = message.split(' ');

// // console.log(message);


// let num = [4,9,6,4,3,6];
// console.log(num);


// let courses = [
//     {no:1, naam:'mantosh'},
//     {no:2, naam:'mehta'}
// ];
// console.log(courses);

// // let course = courses.find(function(courses){
// //     return courses.naam == 'mehta';  
// // }
// // )

// let course = courses.find(course => course.naam === 'mehta');
// console.log(course);


// let num = [1,2,3,4,5,6,7,8];
// //end
// num.pop();
// //begining
// num.shift();
// //middle
// num.splice(2,1);
// console.log(num);

// let num = [1,2,3,4,5,6];
// let num2 = num;
// num = [];
// console.log(num);
// console.log(num2 )


//combineding
let first = [1,2,3];
let second = [4,5,6];

let combined = first.concat(second);
console.log(combined);

//adding

let sliced = combined.slice(0,3);
console.log(sliced);