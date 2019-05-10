// Task 1

var arr = [4, 55, 8, 97, 503, 1, 88, 0, -7, 45, 2, 61];
var arr2 = [];

for (var i = 0; i < arr.length; i++) {

    if (arr[i] > 10) {
        arr2.push(arr[i]);
    }

}

console.log(arr2);


// Task 2

var directOrderArray = [4, 55, 8, 97, 503, 1, 88, 0, -7, 45, 2, 61];
var reversedArray = [];

while (directOrderArray.length > 0) {
    reversedArray.push(directOrderArray.pop());
}


// Task 3

var randomArray = [2, '7', 9, 645, '48', '3', '74', 99, '104', 12];
var evenArray = [];
var oddArray = [];

for (i = 0; i < randomArray.length; i++) {

    if (typeof randomArray[i] == 'string') {
        randomArray[i] = +randomArray[i]; 
    }

}

for (i = randomArray.length - 1; i >= 0; i--) {
    
    var randomValue = randomArray.shift(randomArray[i]);

    if (randomValue % 2 == 0) {
        evenArray.unshift(randomValue);
    } 
    else {
        oddArray.unshift(randomValue);
    }

}