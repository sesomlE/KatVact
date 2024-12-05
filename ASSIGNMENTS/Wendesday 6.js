<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    function countMultipleEvenNumbers(multiple) {
    let count = 0;
    for (let number = 0; number <= 100; number++) {
        if (number % 2 === 0 && number % multiple === 0) {
            count++;
        }
    }
    return count;
}

// Specify the multiple you want to check
let multiple = 4; // Example: multiples of 4
let result = countMultipleEvenNumbers(multiple);
console.log(`The number of even multiples of ${multiple} between 0 and 100 is: ${result}`);

</body>
</html>