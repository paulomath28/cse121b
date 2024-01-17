/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Paulo André Nascimento";
const currentYear = new Date().getFullYear();
const profilePicture ="images/paulo.jpg";

/* Step 3 - Element Variables */

const foodElement = document.querySelector('#food');
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */

yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `I am ${fullName}. I study at BYU-Idaho.`);


/* Step 5 - Array */

let favfoods = ["Pizza", "Inhoque", "Lasanha", "Ice Cream", "Salad", "Fruit", "Natural juice"];

foodElement.innerHTML = favfoods;
let newfood = 'chocolate';
favfoods.push(newfood);
foodElement.innerHTML += `<br>${favfoods}`;







