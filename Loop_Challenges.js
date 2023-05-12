// 1. Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.
function printOdds(start, end){
    for (var i = start; i <= end; i++){
        console.log(i);
    }
}
console.log("Objective 1:");
printOdds(1, 20);

// 2. Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.
function decrescreasingMult3(start, end){
    for (var i = start; i >= end; i--){
        if (i%3 === 0){
            console.log(i);
        }
    }
}
console.log("Objective 2:");
decrescreasingMult3(100, 0);

// 3. Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
function printSequence(arr){
    for (var i = 0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
console.log("Objective 3:");
printSequence([4, 2.5, 1, -0.5, -2, -3.5]);

// 4. Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
function sigma(start, end){
    var result = 0;
    for (var i = start; i <= end; i++){
        result += i;
    }
    console.log(result);
}
console.log("Objective 4:");
sigma(1, 100);

// 5. Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.
function factorial(start, end){
    var result = 1;
    for (var i = start; i <= end; i++){
        result*=i;
    }
    console.log(result);
}
console.log("Objective 5:");
factorial(1, 12);