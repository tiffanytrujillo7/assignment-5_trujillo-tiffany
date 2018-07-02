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
