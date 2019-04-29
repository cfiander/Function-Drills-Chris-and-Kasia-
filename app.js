"use strict"
const myGreeting = function(name ,age) {
    if (!name || !age) {
        throw Error('Arguments not valid');
    }
    if (typeof name !== 'string' || typeof age !== 'number') {
        throw TypeError();
    }
    return `Hi my name is ${name} and I'm ${age}`;
}

try {
    console.log(myGreeting());
} catch (error) {
    console.log(error);
}

const greeting1 = myGreeting('Chris', '28');

const yearOfBirth = function(age) {
    if (age < 0) {
        throw Error("Age cannot be negative");
    }
    const YOB = 2019 - age;
    return `I was born in ${YOB}`;
}


