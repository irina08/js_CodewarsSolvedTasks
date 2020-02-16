function tripledouble(num1, num2) {
    firstNum = num1.toString().split('');
    secondNum = num2.toString().split('');
    let triples = [], doubles = [];

    for(let i = 0; i < firstNum.length; i++) {
        if(firstNum[i - 1] === firstNum[i] && firstNum[i + 1] === firstNum[i]) triples.push(firstNum[i]);
    }

    for(let j = 0; j < secondNum.length; j++) {
        if(secondNum[j] === secondNum[j + 1]) doubles.push(secondNum[j]);
    }

    let matches = doubles.filter(number => triples.includes(number));
    return matches.length > 0 ? 1 : 0;
}