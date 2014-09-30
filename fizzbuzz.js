var fizzBuzz = function (start, end) {
    for (var i = start; i < end; i++) {
        if (i % 15 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
};

fizzBuzz(1, 1000)
fizzBuzz(1, 100)
