function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    
    return age;
}

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    if (number == 2) {
        return true;
    }

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }

    return true;
}

function isValid(birthYearInput, age) {
    if (birthYearInput == "" || isNaN(birthYearInput) || age < 0 || birthYearInput < 0) {
        return false;
    }

    return true;
}

function isAgePrime() {
    const birthYearInput = document.getElementById("birthYear").value;
    const birthYear = parseInt(birthYearInput);
    const age = calculateAge(birthYear)

    if (isValid(birthYearInput, age) == false) {
        alert("Please input a valid birth year.")
        return;
    }

    const result = isPrime(age);

    if (result) {
        alert("Your age is: " + age + "\n" + age + " is a Prime number.");
    } else {
        alert("Your age is: " + age + "\n" + age + " is NOT a Prime number.");
    }
}