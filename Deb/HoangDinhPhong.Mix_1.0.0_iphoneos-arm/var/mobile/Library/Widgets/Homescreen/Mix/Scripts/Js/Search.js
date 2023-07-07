var input = document.getElementById("In");
input.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {event.preventDefault();
Search();}});

function Search(){
var input = document.getElementById("In").value;
if(input.trim() !== ''){
window.location = 'https://www.google.com.vn/search?q=' + input;
document.getElementById("In").value = "";}}