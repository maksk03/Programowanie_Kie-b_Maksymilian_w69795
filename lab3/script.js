// script.js

// Zadanie 3: Deklaracja zmiennych i operacje
let a = 10;
let b = 20;
let c = 23.2;

let sum = a + b + c;
let difference = a - b - c;
let product = a * b * c;
let quotient = a / b / c;

alert("Suma: " + sum);
alert("Różnica: " + difference);
alert("Iloczyn: " + product);
alert("Iloraz: " + quotient);

console.log("Suma: " + sum);
console.log("Różnica: " + difference);
console.log("Iloczyn: " + product);
console.log("Iloraz: " + quotient);

document.getElementById("sum").innerHTML = "Suma: " + sum;
document.getElementById("difference").innerHTML = "Różnica: " + difference;
document.getElementById("product").innerHTML = "Iloczyn: " + product;
document.getElementById("quotient").innerHTML = "Iloraz: " + quotient;

// Zadanie 4: Wyświetl liczby parzyste od 0 do 100 w konsoli
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Zadanie 5: Obliczanie pola trójkąta
let side1 = 5;
let side2 = 6;
let side3 = 7;

let semiPerimeter = (side1 + side2 + side3) / 2;

let area = Math.sqrt(
    semiPerimeter * 
    (semiPerimeter - side1) * 
    (semiPerimeter - side2) * 
    (semiPerimeter - side3)
);

console.log("Pole trójkąta: " + area);
document.getElementById("triangle-area").innerHTML = "Pole trójkąta: " + area;

// Zadanie 6: Pobierz imię od użytkownika i powitaj go
let userName = prompt("Jak masz na imię?");
alert("Cześć, " + userName + "!");

// Zadanie 7: Dodawanie dwóch liczb podanych przez użytkownika
let num1 = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
let num2 = parseInt(prompt("Podaj drugą liczbę całkowitą:"));
let sumOfTwo = num1 + num2;
alert("Suma " + num1 + " i " + num2 + " to: " + sumOfTwo);
document.getElementById("sum-of-two").innerHTML = "Suma " + num1 + " i " + num2 + " to: " + sumOfTwo;

// Zadanie 8: Największa z trzech liczb podanych przez użytkownika
let numA = parseFloat(prompt("Podaj pierwszą liczbę:"));
let numB = parseFloat(prompt("Podaj drugą liczbę:"));
let numC = parseFloat(prompt("Podaj trzecią liczbę:"));

let largest = Math.max(numA, numB, numC);

console.log("Największa liczba to: " + largest);
document.getElementById("largest-number").innerHTML = "Największa liczba to: " + largest;

// Zadanie 9: Największy wspólny dzielnik dwóch liczb podanych przez użytkownika
function gcd(x, y) {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

let int1 = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
let int2 = parseInt(prompt("Podaj drugą liczbę całkowitą:"));

let greatestCommonDivisor = gcd(int1, int2);

console.log("Największy wspólny dzielnik " + int1 + " i " + int2 + " to: " + greatestCommonDivisor);
document.getElementById("gcd").innerHTML = "Największy wspólny dzielnik " + int1 + " i " + int2 + " to: " + greatestCommonDivisor;
