
var belowInput = document.getElementById("outputArea");
var string = document.getElementById('input');
var button = document.getElementById('button');



button.addEventListener("click", function(){
	reversal();
	alphabits();
	palindrome();
});


function reversal() {
	//shortened! i had way more code before this next line
	belowInput.innerHTML = string.value.split("").reverse();
}



function alphabits() {
	belowInput.innerHTML += `<p>${string.value.split("").sort()}</p>`
}

function palindrome() {
	if (string.value === string.value.split('').reverse('').join('')){
		belowInput.innerHTML += " Your string is a palindrome";
	} else if (string.value !== string.value.split('').reverse('').join('')){
		belowInput.innerHTML += "Your string is NOT a palindrome";
	}
}

var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString);