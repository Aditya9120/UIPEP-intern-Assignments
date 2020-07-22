let userEmail = 'abcd@gmail.com';
let password = '12345';
let userPID = '117aditya2034';

let emailChecker = function(email){

        if ((email.includes('abc'))&& (email.length < 12)) {
            return true
        } 
            return false
    }

let passChecker = function(pass){

        if (pass.includes(123)) {
            return true
        }
            return false
    }


let pidChecker = function(id){
    if (id.includes('117')) {
        console.log("Welcome to our St. John Collge of Engineering Portal !!!");
    }
}



console.log(passChecker(password));
console.log(emailChecker(userEmail));
console.log(pidChecker(userPID));




