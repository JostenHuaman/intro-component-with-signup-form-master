document.getElementById('form').addEventListener('submit', function(event) {

    var textinputf = document.getElementById('textinputf');
    var texterrorf = document.getElementById('FirstNameError');
    var textfvalue = textinputf.value;
    var textalertf = document.getElementById('textalertf');

    var textinputl = document.getElementById('textinputl');
    var texterrorl = document.getElementById('LastNameError');
    var textlvalue = textinputl.value;
    var textalertl = document.getElementById('textalertl');

    var emailinput = document.
    getElementById('emailinput');
    var emailerror = document.getElementById('EmailError');
    var emailvalue = emailinput.value;
    var emailalert = document.getElementById('emailalert');
    
    var passwordinput = document.getElementById('passwordinput');
    var passworderror = document.getElementById('PasswordError');
    var passwordvalue = passwordinput.value;
    var passwordalert = document.getElementById('passwordalert');

    var textPatternf = /^[a-zA-Z]+$/;
    var textPatternl = /^[a-zA-Z]+$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordPattern = /^[a-zA-Z0-9]+$/;

    if(!textPatternf.test(textfvalue)){
        texterrorf.style.display = 'block';
        textalertf.style.display = 'block';
        textinputf.placeholder = '';
        textinputf.style.borderColor = 'red';
        event.preventDefault();
    }

    if(!textPatternl.test(textlvalue)){
        texterrorl.style.display = 'block';
        textalertl.style.display = 'block';
        textinputl.placeholder = '';
        textinputl.style.borderColor = 'red';
        event.preventDefault();
    }

    if(!emailPattern.test(emailvalue)){
        emailerror.style.display = 'block';
        emailalert.style.display = 'block';
        emailinput.classList.add('placeholder-red')
        emailinput.placeholder = 'example@example/com';
        emailinput.style.borderColor = 'red'; 
        event.preventDefault();
    }

    if(!passwordPattern.test(passwordvalue)){
        passworderror.style.display = 'block';
        passwordalert.style.display = 'block';
        passwordinput.placeholder = '';
        passwordinput.style.borderColor = 'red';
        event.preventDefault();
    }
})