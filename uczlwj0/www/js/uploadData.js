// uczlwj0 - Code Source: the code is adapted from Claire's Web GIS practical week - 6 and 7
var client;

function uploadData() {
alert ("start data upload");
// get the property values
var question_id = document.getElementById("question_id").value;  // ensure the variables are the same in the index.html - the types are character, not include coordinates
var question = document.getElementById("question").value;
var answer_1 = document.getElementById("answer_1").value;
var answer_2 = document.getElementById("answer_2").value;
var answer_3 = document.getElementById("answer_3").value;
var answer_4 = document.getElementById("answer_4").value;
var correct_answer = document.getElementById("correct_answer").value;
var location_name = document.getElementById("location_name").value;
alert(question_id + " "+ question + " "+answer_1 + " " + answer_2 + " " + answer_3 + " " + answer_4 + " " + correct_answer + " " + location_name);
var postString = "question_id="+question_id +"&question="+question+"&answer_1="+answer_1+"&answer_2="+answer_2+"&answer_3="+answer_3+"&answer_4="+answer_4+"&correct_answer="+correct_answer+"&location_name="+location_name; 


// now get the geometry values
var latitude = document.getElementById("latitude").value;
var longitude = document.getElementById("longitude").value;
postString = postString + "&latitude=" + latitude + "&longitude=" + longitude;

processData(postString);}

function processData(postString) {
client = new XMLHttpRequest();
client.open('POST','http://developer.cege.ucl.ac.uk:30275/uploadData',true); // uczlwj0 - change the number from 302xx to 30275
client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
client.onreadystatechange = dataUploaded;
client.send(postString);

}
// create the code to wait for the response from the data server, and process the response once it is received

function dataUploaded() {
// this function listens out for the server to say that the data is ready - i.e. has state 4
if (client.readyState == 4) {
// change the DIV to show the response
document.getElementById("dataUploadResult").innerHTML = client.responseText;
}
}