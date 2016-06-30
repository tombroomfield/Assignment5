/*Psuedo Code
	User enters city name in field provided and clicks submit
	Get userEntry
	Store userEntry
	Background changes on click of "submit"
		If user enters "New York" or "New York City" or "NYC" background image changes to nyc.jpg
		If user enters "San Francisco" or "SF" or "Bay Area" background image changes to sf.jpg
		If user enters "Los Angeles" or "LA" or "LAX" background image changes to la.jpg
		If user enters "Austin" or "ATX" background image changes to austin.jpg
		If user enters "Sydney" or "SYD" background image changes to sydney.jpg
	Reset the user input field after it is submitted
*/

$(document).ready(start);

function start(){
  	$("#entry").submit(handleForm);
}

function handleForm(e) {
	e.preventDefault();
    var userEntry = $('#city-type').val();
    $("#entry").get(0).reset();

	$('#city-type').val(""); 

	if(userEntry == 'New York' || userEntry == 'New York City' || userEntry == 'NYC') 
	{
	  	$('body').css('background-image', 'url(images/nyc.jpg)');
	} 
	else if(userEntry == "San Francisco" || userEntry == "SF" || userEntry == "Bay Area") 
	{ 
		$('body').css('background-image', 'url(images/sf.jpg');
	} 
	else if(userEntry == "Los Angeles" || userEntry == "LA" || userEntry == "LAX") 
	{
		$('body').css('background-image', 'url(images/la.jpg)');
	} 
	else if(userEntry == "Austin" || userEntry == "ATX") 
	{
		$('body').css('background-image', 'url(images/austin.jpg)'); 
	} 
	else if(userEntry == "Sydney" || userEntry == "SYD") 
	{
		$('body').css('background-image', 'url(images/sydney.jpg)');
	}

};