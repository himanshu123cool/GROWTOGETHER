const _open = document.getElementById('open');
const _close = document.getElementById('close');
const _sidebar = document.getElementById('sidebar');
const _navbar = document.getElementById('navbar');
const _nav_links = document.querySelector('.nav-links');


function op(){
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    console.log(width);
    if(width>=0 && width<=319){
        _sidebar.style.width='100%';
        _nav_links.style.visibility='visible';
    }
    else if(width>=250 && width<=480){
        _sidebar.style.width='100%';
        _nav_links.style.visibility='visible';
    }
    else if(width>=481 && width<=768){
        _sidebar.style.width='100%';
        _nav_links.style.visibility='visible';
    }
    else if(width>=769 && width<=1024){
        _sidebar.style.width='30vw';
        _nav_links.style.visibility='visible';
    }
    else if(width>=1025 && width<=1200){
        _sidebar.style.width='23vw';
        _nav_links.style.visibility='visible';
    }
    else{
        _sidebar.style.width='18vw';
        _nav_links.style.visibility='visible';
    }    
}

function cl(){
    _sidebar.style.width='0';
    _nav_links.style.visibility='hidden';
}

window.onscroll = function navchange(){
    if(document.body.scrollTop>250 || document.documentElement.scrollTop>250){
        _navbar.style.backgroundColor='var(--dark-color)';
    } 
    else{
        _navbar.style.backgroundColor='';
    }
}








// form-validation

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var subjectError = document.getElementById('subject-error');
var formError = document.getElementById('form-error');


function validateName(){
    var _name = document.getElementById('name').value;
    if(_name ==''){
        nameError.innerHTML = 'Name is required'
        return false;
    }
    if(_name.length<=3 || _name.length>20){
        nameError.innerHTML = 'Name is too short'
        return false;
    }
    if(!_name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
      nameError.innerHTML = 'Write full name';
      return false;
    }
    nameError.innerHTML = '<span class="success">Required Complete</span>'
    return true;
}


function validatePhone(){
    var phone = document.getElementById('phone').value;
    
    if(phone.length ==''){
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    if(phone.length !==10){
        phoneError.innerHTML = 'Phone no should be 10 digits';
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please';
        return false;
    }
    phoneError.innerHTML = '<span class="success">Required Complete</span>'
    return true;
}

function validateEmail(){
    var _email = document.getElementById('email').value;

    if(_email.length == ''){
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if(!_email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid'
        return false;
    }
    emailError.innerHTML = '<span class="success">Required Complete</span>'
    return true
}


function validateMessage(){
    var message = document.getElementById('message').value;
    var required = 20;
    var left = required - message.length;

    if(left>0){
        subjectError.innerHTML = 'more characters required'
        return false;
    }

    subjectError.innerHTML = '<span class="success">Required Complete</span>'
    return true
}


function validateForm(){
     
    if(validateName() || validateEmail() || validatePhone() || validateMessage() ){
        formError.style.display = 'block';
        formError.innerHTML = 'Please fix error before submit'
        setTimeout(function(){formError.style.display='none';}, 3000)
        return false;
    }
}