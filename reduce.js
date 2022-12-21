// the idea of reduce seems to be to do more with less

// i've commonly seen it used in accumulator functions. here is what an accumulator function for a specific array param would look like without reduce: 

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sumOfNum = 0;

numArr.filter(num => num < 8).forEach(element => {
    sumOfNum = sumOfNum += element
});

console.log(sumOfNum);

//the function above filters each number less than  8 in the array and then uses a forEach to loop through and add those elements.

//the same thing can be done with reduce- let me figure out how. 

