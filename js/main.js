var heading = document.getElementById( 'mainHeader' );
var paragraph = document.createElement('paragraph');
var number = 1;

heading.addEventListener( "click", function() {
    paragraph.innerHTML = 'This is click number' + ' ' + number++;
    document.getElementsByTagName('body')[0].appendChild(paragraph);
});
