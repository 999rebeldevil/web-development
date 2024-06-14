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


let courses = [
    {no:1, naam:'mantosh'},
    {no:2, naam:'mehta'}
];
console.log(courses);

// let course = courses.find(function(courses){
//     return courses.naam == 'mehta';  
// }
// )

let course = courses.find(course => course.naam === 'mehta');
console.log(course);
