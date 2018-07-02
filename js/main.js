//Event Listener Paragraph Clicks

var heading = document.getElementById( 'mainHeader' );
var paragraph = document.createElement('paragraph');
var number = 1;

heading.addEventListener( "click", function() {
    paragraph.innerHTML = 'This is click number' + ' ' + number++;
    document.getElementsByTagName('body')[0].appendChild(paragraph);
});

//Event Listener form

var submission = document.getElementById('form');

submission.addEventListener('submit', function(submitting) {
submitting.preventDefault();

var firstName = document.getElementById('firstName').value;
console.log('The firstName is:' + ' ' + firstName);

var lastName = document.getElementById('lastName').value;
console.log('The lastName is:' + ' ' + lastName);

var email = document.getElementById('emailAddress').value;
console.log('The email is:' + ' ' + email);

var message = document.getElementById('message').value;
console.log('The message is:' + ' ' + message);
});

// Event Listener 1 - Listens for Click and Shows New Paragraph Content

document.getElementById("button").addEventListener("click", function(){
    document.getElementById("custom1").innerHTML = "This event listens for a click and a new paragraph appears!";
});

// Event Listener 2 - Listens for a Hover and Shows New Paragraph for when you hover over the button and then remove your mouse from the button.

var x = document.getElementById("mouseOver");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
    document.getElementById("mouse").innerHTML += "Moused over!<br>"
}

function mySecondFunction() {
    document.getElementById("mouse").innerHTML += "Clicked!<br>"
}

function myThirdFunction() {
    document.getElementById("mouse").innerHTML += "Moused out!<br>"
}

// Event Listener 3
