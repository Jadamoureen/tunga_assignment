//Declaring variables 
const Name = document.getElementById('user name');
const Pwd = document.getElementById('password');
const Email = document.getElementById('email');
const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const numbers = /[0-9]/g;

function store() {

    /*Included the if statements guidelines for the user incase he or she has not filled the text fields right will get alerts 
    as well the maxmium characters for password is 6*/

if (Name.value.length == 0) {
    alert('Please fill in user name');

} else if (Pwd.value.length == 0) {
    alert('Please fill in password');

}else if(Email.value.length == 0){
    alert('Please fill in email');

}else if (Name.value.length == 0 && Pwd.value.length == 0 && Email.value.length == 0) {
    alert('Please fill in user name and password and email');
//maximum password is 6 characters and atleast an uppercase 
} else if (Pwd.value.length > 6) {
    alert('Max of 6');

} else if (!Pwd.value.match(numbers)) {
    alert('please add 1 number');

} else if (!Pwd.value.match(upperCaseLetters)) {
    alert('please add 1 uppercase letter');

}else {
    localStorage.setItem('Name', name.value);
    localStorage.setItem('Pwd', password.value);
    localStorage.setItem('Email', email.value);
    alert('Your account has been created');
}
}

   
//checking whether the data has been captured
function check() {
    const storedName = localStorage.getItem('Name');
    const storedPwd = localStorage.getItem('Pwd');
    const storedEmail = localStorage.getItem('Email');

    const userName = document.getElementById('userName');
    const userPwd = document.getElementById('userPwd');
    const userEmail = document.getElementById('userEmail');

    //if the user has correctly filled in the name, password and email then he or she is logged in
    if (userName.value == storedName && userPwd.value == storedPwd && userEmail == storedEmail) {
        alert('Welcome.');
    } else {
        alert('Error on login');
    }
}