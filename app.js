let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let count1 = document.querySelector('.count1');
let count2 = document.querySelector('.count2');
let count3 = document.querySelector('.count3');

let num1 = 0;
let num2 = 0;
let num3 = 0;

btn1.addEventListener('click', function () {
    num1++;
    count1.innerHTML = num1;
})
btn2.addEventListener('click', function () {
    num2++;
    count2.innerHTML = num2;
})
btn3.addEventListener('click', function () {
    num3++;
    count3.innerHTML = num3;
})