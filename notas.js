let nota = 89;

numberToLetter = (number) => {
    if (number >= 90) {
        return 'A';
    }
    else if (number >= 80 && number <= 89) {
        return 'B';
    }
    else if (number >= 70 && number <= 79) {
        return 'C';
    }
    else if (number >= 60 && number <= 69) {
        return 'D';
    }
    else if (number < 60) {
        return 'F';
    }
}

score = numberToLetter(nota);
console.log(score);