"use strict"
// const myGreeting = function(name ,age) {
//     if (!name || !age) {
//         throw Error('Arguments not valid');
//     }
//     if (typeof name !== 'string' || typeof age !== 'number') {
//         throw TypeError();
//     }
//     return `Hi my name is ${name} and I'm ${age}`;
// };


// // try {
// //     console.log(myGreeting());
// // } catch (error) {
// //     console.log(error);
// // };

// const greeting1 = myGreeting('Chris', '28');

// const yearOfBirth = function(age) {
//     if (age < 0) {
//         throw Error("Age cannot be negative");
//     }
//     const YOB = 2019 - age;
//     return `I was born in ${YOB}`;
// };



//Jedi
function jediName(firstName, lastName){
    return lastName.slice(0,3) + firstName.slice(0,2);
}
console.log(jediName('kasia','mirowska'));

//infinite

function beyond(num) {
    if (num === Infinity) {
        console.log('And beyond');
    }
    if (num > 0){
        console.log('To infinity');
    }
    if (num < 0){
        console.log('To negative infinity');
    }
    if (num === 0){
        console.log('Staying home');
    }
};
console.log(beyond());


//decoding
function decode(str){
let strArr = str.split(' ');
console.log(strArr);
let decodedWord = [];
for ( let i = 0; i< strArr.length; i ++){
    if ( strArr[i][0] === 'a'){
        decodedWord.push(strArr[i][1]);
        }
    if ( strArr[i][0] === 'b' ){
        decodedWord.push(strArr[i][2]);
    }
    if (strArr[i][0] === 'c'){
        decodedWord.push(strArr[i][3]);
    }
    if (strArr[i][0] === 'd'){
        decodedWord.push(strArr[i][4]);
    }
    else {
        decodedWord.push(' ');
    }
    
}
return decodedWord.join('');
};
console.log(decode('craft block argon meter bells brown croon droop'));