
// const fruits = [
//     { name: "Apple", image: "assets/apple.webp" },
//     { name: "Banana", image: "assets/banana.jpeg" },
//     { name: "Cherry", image: "assets/cherry.jpg" },
//     { name: "Grape", image: "assets/grape.jpeg" },
//     { name: "Orange", image: "assets/orange.jpg" }
// ];

// const fruitsList = document.getElementById('fruits-list');


// fruits.forEach(fruit => {
//     const listItem = document.createElement('li');
//     const fruitImg = document.createElement('img');
//     fruitImg.src = fruit.image;
//     fruitImg.alt = fruit.name;
//     const fruitText = document.createTextNode(fruit.name);
//     listItem.appendChild(fruitImg);
//     listItem.appendChild(fruitText);
//     fruitsList.appendChild(listItem);
// });

function findElementIndex(array, number) {

    const index = array.indexOf(number);
    return index !== -1 ? index : -1;
}
const arr = [10, 20, 30, 40, 50];
const num = 40;
console.log(findElementIndex(arr, num));


const numNotFound = 60;
console.log(findElementIndex(arr, numNotFound)); 
