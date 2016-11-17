function validationForm() {
	var value = document.forms["name_form"]["input_name"].[value];
	if (value.lenght < 3) {
		alert ("try again but this time enter your name");
		return false;
	}
}