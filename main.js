// These variables are our "database" for users.
// You can actually change the values to whatever you'd like!
// And you can and should use them in your `isRegisteredUser` function.
// But we use them in your test code as well, so whatever you do, don't delete them!

const user1 = 'krose@perseverenow.org';
const password1 = 'Hotforhimself';
const user2 = 'jdoty@perseverenow.org';
const password2 = 'Console.logger';
const user3 = 'dhiggins.prsvr@gmail.com';
const password3 = "supToThis"


// **YOUR** code below. Pass those tests!

function isValidEmail(email) {
  if (email.endsWith('.prsvr@gmail.com')) {
    return email.length > '.prsvr@gmail.com'.length;
  } else if (email.endsWith('@perseverenow.org')) {
    return email.length > '@perseverenow.org'.length;
  }
  return false;
}

function isValidPassword(password){
  if (password.length < 8) {
    return false;
  }
  if (password.toLowerCase() === password) {
    return false;
  }
  if (password.toUpperCase() === password) {
    return false;
  }
  return true;
}

function isRegisteredUser(inputUser) {
  return inputUser === user1 || inputUser === user2 || inputUser === user3;
}

function passwordMatches(inputUser, inputPassword) {
  if (inputUser === user1 && inputPassword === password1) {
    return true;
  }
  if (inputUser === user2 && inputPassword === password2) {
    return true;
  }
  if (inputUser === user3 && inputPassword === password3) {
    return true;
  }
  return false;
}


// Our code below. Do not touch!


if (typeof isValidEmail === 'undefined') {
  isValidEmail = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof isRegisteredUser === 'undefined') {
  isRegisteredUser = undefined;
}

if (typeof passwordMatches === 'undefined') {
  passwordMatches = undefined;
}

if (typeof user1 === 'undefined') {
  user1 = undefined;
}

if (typeof user2 === 'undefined') {
  user2 = undefined;
}

if (typeof user3 === 'undefined') {
  user3 = undefined;
}

if (typeof password1 === 'undefined') {
  password1 = undefined;
}

if (typeof password2 === 'undefined') {
  password2 = undefined;
}

if (typeof password3 === 'undefined') {
  password3 = undefined;
}



module.exports = {
  isValidEmail,
  isValidPassword,
  isRegisteredUser,
  passwordMatches,
  user1,
  user2,
  user3,
  password1,
  password2,
  password3
}
