var count= 0;

var result = document.getElementById('res');
var reset = document.getElementById('rst');
var equal = document.getElementById('eql');
var divide = document.getElementById('div');
var multiply = document.getElementById('mlt');
var minus = document.getElementById('min');
var plus = document.getElementById('pls');
var op = document.querySelectorAll('.op');
var broj = document.querySelectorAll('.broj');

result.innerText = count;

function handleOperation () {
    op.innerText = op;
}
function num1 () {
    broj.innerText = broj1;
}
function num2 () {
    broj.innerText = broj2;
}
/*function operation() {
    if (op = '/') {
        count = num1 / num2;
    };
    if (op = '*') {
        count = num1 * num2;
    };
    if (op = '-') {
        count = num1 - num2;
    };
    if (op = '+') {
        count = num1 + num2;
    };
}*/
function reset () {
    count = 0;
}
equal.addEventListener('click', handleOperation);
divide.addEventListener('click', handleOperation);
multiply.addEventListener('click', handleOperation);
minus.addEventListener('click', handleOperation);
plus.addEventListener('click', handleOperation);
broj.addEventListener('click', function() {
    broj1 = broj.innerText;
})
broj.addEventListener('click', function() {
    broj2 = broj.innerText;
})

result.innerText = count;