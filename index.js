const form = document.getElementById('form');
const FirstName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const password = document.getElementById('password');
//*regex: https://regexr.com/3e48o
//la i al final es insensitive: no distingue mayusculas y minusculas
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

//*https://stackoverflow.com/questions/14850553/javascript-regex-for-password-containing-at-least-8-characters-1-number-1-uppe
const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

form.addEventListener("submit", e =>{
    e.preventDefault();

    let firstName = FirstName.value.trim();
    let lastName = lName.value.trim();
    let mail = email.value.trim();
    let pass = password.value.trim();
    
    // FirstName Validation
    if (firstName === "") {
      errorFunc(FirstName, 'First Name cannot be empty');
    }else{
      successFunc(FirstName)
    }
    // LastName Validation
    if (lastName === "") {
      errorFunc(lName, 'Last Name cannot be empty');
    }else{
      successFunc(lName)
    }
    // Email Validation
    if (mail === "") {
      errorFunc(email, 'Looks like this not an empty');
    }else if(!emailRegex.test(email)){
      errorFunc(email, 'Email is invalid'); 
  }else{
      successFunc(email)
    }

    // Password validation
    if (pass === "") {
      errorFunc(password, 'Password cannot be empty');
    }else if(!passRegex.test(password)){
      errorFunc(password, "Contain at least 8 characters,1 number,lowercase,uppercase");
    
    }else{
      successFunc(password)
    }
  
  
})


function errorFunc(req, message){
  const formControl = req.parentElement
  const span = formControl.querySelector('span');
  span.innerText = message;
  req.classList.add('error');
  span.classList.add('error-text');
}

function successFunc(req){
  const formControl = req.parentElement;
  const span = formControl.querySelector('span');
  span.classList.add('succesSpan');
  span.classList.remove('error-text');
  req.classList.add('success');

}
