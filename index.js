const fibonacci = n => {
    let numbers = [1, 1];
    if (n <= 2) return numbers.slice(0, n);
    for (let i = 2; i < n; i++) {
        numbers.push(numbers[i - 1] + numbers[i - 2]);
    }
    return numbers;
}


const isPrime = number => {
    for (let i = 2; i < number; i++) {
        if (number % 2 == 0) return false;
    }
    return true;
}


const primeNumbers = n => {
    let primes = [];
    for (let number = 2; number <= n; number++) {
        if (isPrime(number)) primes.push(number);
    }
    return primes
}

const sum = n => {
    const numbers = Array.from(Array(n + 1).keys()); // [0, 1, ... N]
    return numbers.reduce((accumulator, number) => accumulator + number ** n);
}

const sumString = n => {
    const numbers = Array.from(Array(n + 1).keys()); // [0, 1, ... N]
    const numbersString = numbers.map((number) => `${number}^${n}`);
    return numbersString.join('+');
}


const inputFibonacci = document.getElementById('input-fibonacci');
const btnFibonacci = document.getElementById('button-fibonacci');
const labelFibonacci = document.getElementById('result-fibonacci');
btnFibonacci.addEventListener('click', () => {
    const value = parseInt(inputFibonacci.value);
    if (!value) return alert('Debe ingresar un numero');
    labelFibonacci.innerText = `Números: ${fibonacci(parseInt(inputFibonacci.value)).toString()}`;
});

const inputPrime = document.getElementById('input-prime');
const btnPrime = document.getElementById('button-prime');
const labelPrime = document.getElementById('result-prime');
btnPrime.addEventListener('click', () => {
    const value = parseInt(inputPrime.value);
    if (!value) return alert('Debe ingresar un numero');
    labelPrime.innerText = `Primos: ${primeNumbers(parseInt(inputPrime.value)).toString()}`;
});

const inputSum = document.getElementById('input-sum');
const btnSum = document.getElementById('button-sum');
const labelSum = document.getElementById('result-sum');
btnSum.addEventListener('click', () => {
    const value = parseInt(inputSum.value);
    if (!value) return alert('Debe ingresar un numero');
    labelSum.innerText = `Sumatoria: ${sumString(value)} = ${sum(value)}`;
});