function fizzbuzz(n: number): string | number {
    if (n % 3 === 0 && n % 5 === 0){
        return 'FizzBuzz';
    }
    if (n % 5 === 0){
        return 'Buzz';
    }
    if (n % 3 === 0){
        return 'Fizz';
    }
    return n;
}

for (let i: number = 1; i <= 100; i++){
    console.log(fizzbuzz(i));
}
