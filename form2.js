const form1 = document.getElementById('form1');
const emri = document.getElementById('emri');
const mbiemri = document.getElementById('surname');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const gender = document.getElementById('gender');
const email = document.getElementById('email');
const zip = document.getElementById('zip');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	validateForm();
})

	function validateForm(){
		// trim to remove the whitespaces

		const usernameValue = username.value.trim();
		const emailValue = email.value.trim();
		const passwordValue = password.value.trim();
		const password2Value = password2.value.trim();
		const emriValue = emri.value.trim();
        const surnameValue = surname.value.trim();
		const telValue = tel.value.trim();

		if(emriValue === '') {
			setErrorFor(emri, 'Gabim. Vendosni inputet e sakta!');
		}else {
			setSuccessFor(emri);
		}

		if(surnameValue === '') {
			setErrorFor(surname, 'Gabim. Vendosni inputet e sakta!');
		}else {
			setSuccessFor(surname);
		}
		
		if(usernameValue === '') {
			setErrorFor(username, 'Gabim. Vendosni inputet e sakta!');
		}
			else{
			setSuccessFor(username, 'Inputet e sakta!');
		}
		
		if(emailValue === '') {
			setErrorFor(email, 'Gabim. Vendosni inputet e sakta!');
		} else if (!isEmail(emailValue)) {
			setErrorFor(email, 'Gabim. Vendosni inputet e sakta!');
		} else {
			setSuccessFor(email);
		}
		if(passwordValue === '') {
			setErrorFor(password, 'Gabim. Vendosni inputet e sakta minimumi 8 karaktere!');
		}else {
			setSuccessFor(password);
		}
		if(password2Value === '') {
			setErrorFor(password2, 'Gabim. Vendosni inputet e sakta minimumi 8 karaktere!');
		} else if(passwordValue !== password2Value) {
			setErrorFor(password2, 'Gabim.Fjalekalimet nuk perputhen!');
		} else{
			setSuccessFor(password2);
		}
	}

var phone_input = document.getElementById("tel");
phone_input.addEventListener('input', () => {
  phone_input.setCustomValidity('');
  phone_input.checkValidity();
});
phone_input.addEventListener('invalid', () => {
  if(phone_input.value === '') {
    phone_input.setCustomValidity('Vendosni numrin e telefonit!');
  } else {
    phone_input.setCustomValidity('Vendosni numrin e telefonit ne kete format: 123-456-7890');
  }
});
function check(){
if ( ( form1.gender[0].checked == false ) && ( form1.gender[1].checked == false ) ){
	alert ( "Ju lutem zgjidhni gjinine!" );
	return false;
   }
}
function clear(input) {
	document.getElementById("form1").reset(input);
  }
	function lettersonly(input){
		 var text = /[^a-z]/gi ;
		 input.value = input.value.replace(text, "");
	}
	
	function setErrorFor(input, message) {
		const formControl = input.parentElement;
		const small = formControl.querySelector('small');
		formControl.className = 'form-control error';
		small.innerText = message;
	}
	
	function setSuccessFor(input) {
		const formControl = input.parentElement;
		formControl.className = 'form-control success';
	}
		
	function isEmail(email) {
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[2-9]{2,3}\.[2-9]{2,3}\.[2-9]{2,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
	}