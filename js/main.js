
let firstName = 'Lebron';
let lastName = 'James';

console.log(firstName);
console.log(lastName);

let fullNameFirst = `${firstName}` + ` ` +`${lastName}`;
console.log(fullNameFirst);

//opdracht 1 basic 

let result = fullNameFirst.toUpperCase();
console.log(result);

let secondResult = fullNameFirst.toLowerCase();
console.log(secondResult);

//opdracht 1 advanced

function fullName() {
    const question = prompt('Wat is je voor en achternaam?')
    const answer = question.charAt(0).toUpperCase() + question.slice(1);
    return answer;
}

console.log(fullName());

//opdracht 1 expert

const question = prompt('Voor de dubbelcheck, wat was je voor en achternaam?')
let printName = document.querySelector('.names');
printName.innerHTML += `${question}`;

//opdracht 2 basic

let button = document.querySelector('.button');
button.addEventListener('click', myFunction)

alert('Welkom bij dit leeg tabblad');

function myFunction() {
    alert(question);
}

//opdracht 2 advanced



//opdracht 2 expert

let password = prompt('Geef een wachtwoord');

    if(password == "h@ck3d" || password == "H@ck3D") {
        alert('Je hebt een geldige wachtwoord gegeven');
    }
    else if (password == "") {
        alert("You've failed, game over!");
    }
    else {
        alert('Je hebt een verkeerd wachtwoord gegeven');
    };

    //opdracht 3 basic advanced

    const imgTag = document.querySelector(".stock");
    imgTag.src = "./img/stock.jpg";

    //opdracht 3 expert


