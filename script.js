

// function uchtaSon(elem1, elem2, elem3) {

//     if (elem1 != elem2 && elem2 != elem3) {
//         return elem1 + elem2 + elem3

//     } else {
//         console.log("ssalom");
//     }

// }
// console.log(uchtaSon(3, 5, 2));


// function ikkitaSon(elem1, elem2) {
//     if (elem1 >= 21 && elem2 >= 21) {
//         return 0

//     } else if (elem1 >= 21) {
//         return elem1

//     }
//     else if (elem2 >= 21) {
//         return elem2

//     } else {
//         console.log("ikkala qiymat ham 21dan kichik");

//     }

// }

// console.log(ikkitaSon(52, 58));

// function sumNumbers(elem) {

// }

// console.log(sumNumbers("asssas"));
let elemt = "asdfghj1233"
let newArr = elemt.split("");
newArr.forEach(element => {

    let sumArr = [0]


    if (element == 0 || element == 1 || element == 2 || element == 3 || element == 4 || element == 5 || element == 6 || element == 7 || element == 8 || element == 9) {
        sumArr.push(element)

    }
    console.log(sumArr);


})