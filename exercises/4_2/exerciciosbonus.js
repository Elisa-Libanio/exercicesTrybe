// let numbers = [1,2,4,5,8,6,9,3];

// for (let in = 1; in< numbers.length; in++)  {

//     for (let j= 0 ; j < in ;j++)
//      let posição = numbers[in]

//      numbers[in]= j[in]





// }



for (let i = 1; i < array.length; i++) {

    for (let j = 0; j < i; j++) {
        if (array[i] < array[j]) {
            let position = array[i];

            array[i] = array[j];
            array[j] = position;
        }
    }
}



let fruits = [3, 4, 10, 1, 12];
let sum = 0;
for (let i = 0; i < fruits.length; i++) {

    sum += fruits[i];
}

if (sum > ) {

    console.log("sum")

} else {

    console.log("Valor menor que 16");
}