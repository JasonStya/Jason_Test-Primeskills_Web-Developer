
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');

email.addEventListener('textInput',email_Verify);
password.addEventListener('textInput',password_Verify);

function validated(){
    if(email.value.lenght < 9){
        email.login.border = "1px solid red";
        email_error.login.display="block";
        email.focus();
        return false;
    }
    if(password.value.lenght < 6){
        password.login.border = "1px solid red";
        password_error.login.display="block";
        password.focus();
        return false;
    }
}
function email_Verify(){
    if(email.value.length >= 8)
        email.login.border = "1px solid silver";
        email_error.login.display="none";
        return true;
}

function password_Verify(){
    if(password.value.length >= 5)
        password.login.border = "1px solid silver";
        password_error.login.display="none";
        return true;
}