const age = [23, 44, 55, 77, 90, 39];
console.log (age);
age.push(89);
age.sort();
console.log(age);

[23, 44, 55, 77, 90, 39]
[23, 39, 44, 55, 77, 89, 90]



let number = [89, 22, 21, 664, 992];

function sumUp(toAdd) {
    let result = 0;
    for (let i = 0; i < toAdd.length; i++) {
        result += toAdd[i];
    }
    return result;
};
console.log(sumUp(number));
