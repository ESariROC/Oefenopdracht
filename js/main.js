
let firstName = 'Lebron';
let lastName = 'James';

console.log(firstName);
console.log(lastName);

let fullNameFirst = `${firstName}` + ` ` +`${lastName}`;
console.log(fullNameFirst); 
// console.log(firstName, lastName);

//opdracht 1 basic 

let result = fullNameFirst.toUpperCase();
console.log(result);

let secondResult = fullNameFirst.toLowerCase();
console.log(secondResult);

//opdracht 1 advanced

function firstNamePrompt() {
    const question = prompt('Wat is je voornaam?')
    const answer = question.charAt(0).toUpperCase() + question.slice(1);
    return answer;
}

function lastNamePrompt() {
    const questionSecond = prompt('Wat is je achternaam?')
    const answerSecond = questionSecond.charAt(0).toUpperCase() + questionSecond.slice(1);
    return answerSecond;
}
console.log(firstNamePrompt());
console.log(lastNamePrompt());

//opdracht 1 expert

const question = prompt('Wat was je voor en achternaam?')
let printName = document.querySelector('.names');
printName.innerHTML += `${question}`;

//opdracht 2 basic

document.body.innerHTML += "Welkom";

let button = document.querySelector('.button');
button.addEventListener('click', myFunction)

function myFunction() {
    alert(question);
}

//opdracht 2 advanced

const inputFirstName = document.querySelector('.inputfirstname');
const inputLastName = document.querySelector('.inputsecondname');
const buttonName = document.querySelector('.add-item-button');
const textName = document.querySelector('.textshow');

buttonName.addEventListener('click', showFunction);
function showFunction() {
    const valueFirstName = inputFirstName.value;
    const valueLastName = inputLastName.value;
    console.log(valueFirstName, valueLastName);

    const valueFirstNameCapital = valueFirstName.charAt(0).toUpperCase() + valueFirstName.slice(1);
    const valueLastNameCapital = valueLastName.charAt(0).toUpperCase() + valueLastName.slice(1);
    console.log(valueFirstNameCapital, valueLastNameCapital);
    textName.innerHTML += `${valueFirstNameCapital}` + ` ` + `${valueLastNameCapital}`;
}

//opdracht 2 expert

const check = document.querySelector('.check');
const fail = document.querySelector('.fail');
const warning = document.querySelector('.warning');

let password = prompt('Geef een wachtwoord');

    if(password == "h@ck3d" || password == "H@ck3D") {
        alert('Je hebt een geldige wachtwoord gegeven');
        check.classList.remove('disable')
    }
    else if (password == "") {
        alert("You've failed, game over!");
        warning.classList.remove('disable')
    }
    else {
        alert('Je hebt een verkeerd wachtwoord gegeven');
        fail.classList.remove('disable')
    };

    //opdracht 3 basic advanced expert



 