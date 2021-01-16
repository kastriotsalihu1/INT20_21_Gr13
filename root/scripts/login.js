
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
	x.style.left = "-400px";
	y.style.left = "45px";
	z.style.left = "110px";
}
function signin() {
	x.style.left = "45px";
	y.style.left = "450px";
	z.style.left = "0";
}

function validatelogin() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	const minValidUsernameLength = 5;
	const minValidPasswordLength = 8;
	const maxValidPasswordLength = 15;

	if (isBlank(username) || isBlank(password))
		alert("No blank values allowed!");

	if (isShorter(username, minValidUsernameLength))
		alert("**Username length must be atleast " + minValidUsernameLength + " characters");

	if (isShorter(password, minValidPasswordLength) || isLonger(password, maxValidPasswordLength))
		alert("**Password length must be atleast " + minValidPasswordLength +
			" characters and not exceed " + maxValidPasswordLength + " characters");

	let userCredentials = getUserCredentials(username);
	if (userCredentials?.password === password) {
		window.location = "./application.html";
	} else {
		window.location.reload();
	}
}

const isBlank = input => input === "";
const isShorter = (input, minValidLength) => input.length < minValidLength;
const isLonger = (input, maxValidLength) => input.length > maxValidLength;

const getUserCredentials = username => {
	for (const user in usersDatabase) {
		if (usersDatabase[user].username === username) {
			return usersDatabase[user];
		}
	}
};

function validatesignup() {
	var name = document.getElementById("name").value;
	var fpassword = document.getElementById("fpassword").value;
	var email = document.getElementById("email").value;

	if (isBlank(name) || isBlank(fpassword))
		alert("No blank values allowed!");

	if (isShorter(name, 5))
		alert("**Username length must be atleast 5 characters");

	if (email.indexOf("@") == -1 || isShorter(email, 6))
		alert("Please Enter valid Email");

	if (isShorter(password, 8) || isLonger(password, 15))
		alert("**Password length must be atleast 8 characters and not exceed 15 characters");
}


const usersDatabase = {
	user1: {
		username: "Arbeni",
		name: "Arben Gashi",
		password: "arbengashi",
		email: "arbengashi@legit.com",
	}
};