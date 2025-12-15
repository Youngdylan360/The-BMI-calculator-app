// variables

// let weight = parseInt(prompt('Enter your weight (kg)'));
// let height = parseFloat(prompt('Enter your height (m)'));
// let gender = prompt('Enter your gender as M or F ');
// const age = document.querySelector('.js-age-input-field').innerValue;

const calculatorBodyEl = document.querySelector('.js-bmi-input');
let age = 0;
function getAgeValue() {
    const ageEL = document.querySelector('.js-age-input-field');
    age = parseFloat(ageEL.value);

    return age;
    
}

const ageWarningEl = document.querySelector('.js-age-warning');
ageWarningEl.remove();

let gender = null;

document.querySelectorAll('.js-gender').forEach((genderEL) => {
    genderEL.addEventListener('click', () => {
        gender = genderEL.dataset.gender;
        return gender;
    });
});

const genderWarningEl = document.querySelector('.js-gender-warning');
genderWarningEl.remove();


let height = 0;
function getHeightValue() {
    const heightEl = document.querySelector('.js-height-input');
    height = parseFloat(heightEl.value);

    return height;
}

const heightWarningEl = document.querySelector('.js-height-warning');
heightWarningEl.remove();

let weight = 0;
function getWeightValue() {
    const weightEl = document.querySelector('.js-weight-input');
    weight = parseFloat(weightEl.value);

    return weight;
}

const weightWarningEl = document.querySelector('.js-weight-warning');
weightWarningEl.remove();

const elDisplay = document.querySelector('.js-result-display');

let bmiCatergory;
document.querySelector('.js-calculate-btn').addEventListener('click', () => {
    const age = getAgeValue();
    const height = getHeightValue();
    const weight = getWeightValue();

    if (!height) {
        document.querySelector('.js-height-selector').appendChild(heightWarningEl);

        heightWarningEl.innerHTML = '!Please enter a valid height value';
        heightWarningEl.classList.add('height-warning');

        calculatorBodyEl.classList.add('step-up-0');
    } else {
        calculatorBodyEl.classList.remove('step-up-0');
        heightWarningEl.remove();
    }
    if (!weight) {
        document.querySelector('.js-weight-selector').appendChild(weightWarningEl);

        weightWarningEl.innerHTML = '!Please enter a valid weight value';
        weightWarningEl.classList.add('weight-warning');

        calculatorBodyEl.classList.add('step-up-1');
    } else {
        calculatorBodyEl.classList.remove('step-up-1');
        weightWarningEl.remove();
    }
    if (!gender) {
        document.querySelector('.js-gender-selection').appendChild(genderWarningEl);

        genderWarningEl.innerHTML = 'Please enter choose youre gender';
        genderWarningEl.classList.add('gender-warning');

        calculatorBodyEl.classList.add('step-up-2');
    } else {
        calculatorBodyEl.classList.remove('step-up-2');
        genderWarningEl.remove();
    }
    if (!age) {
        document.querySelector('.js-age-selector').appendChild(ageWarningEl);

        ageWarningEl.innerHTML = 'Please enter a valid age';
        ageWarningEl.classList.add('age-warning');

        calculatorBodyEl.classList.add('step-up-3');
    } else {
        calculatorBodyEl.classList.remove('step-up-3');
        ageWarningEl.remove();
    }
    
    let bmi = weight / height ** 2;
    bmi = bmi.toFixed(2);
    if (bmi < 18.5) {
        bmiCatergory = 'Underweight'
    } else if (bmi >= 30) {
        bmiCatergory = 'obese'
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiCatergory = 'Healthy'
    } else if (bmi >= 25 && bmi < 30) {
        bmiCatergory= 'Overweight'
    }

    let message = gender === 'M' ? `Bro you're BMI: ${bmi} is ${bmiCatergory}` : `Broette you're BMI: ${bmi} is ${bmiCatergory}`;


    if (!age || !gender || !height || !weight) {
        elDisplay.value = '';
    } else {
        elDisplay.value = message;
    }
});

document.querySelector('.js-clear-btn').addEventListener('click', () => {
    elDisplay.value = '';

    const ageEL = document.querySelector('.js-age-input-field');
    ageEL.value = '';

    document.querySelectorAll('.js-gender').forEach((genderEL) => {
        genderEL.checked = false;
    });

    const weightEl = document.querySelector('.js-weight-input');
    weightEl.value = '';

    const heightEl = document.querySelector('.js-height-input');
    heightEl.value = '';
});

// BMI Calculations
// function calculateBMI() {
//     return bmi;
// }

// let bmi = calculateBMI();

// Output
// let message = gender === 'M' ? `Bro you're BMI: ${bmi} is ${bmiCatergory}` : `Broette you're BMI: ${bmi} is ${bmiCatergory}`; 

