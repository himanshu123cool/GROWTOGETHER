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

_close.onclick = function(){
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

window.addEventListener('scroll' , ()=>{
    let _rightAbout = document.querySelector('.right_about');
    let _aboutload = _rightAbout.getBoundingClientRect().top;
    let screenPositon = window.innerHeight;
    if(_aboutload < screenPositon){
        _rightAbout.classList.add('active');
    }
    else{
        _rightAbout.classList.remove('active');
    }
});


window.addEventListener('scroll' , ()=>{
    let _chooseRight = document.querySelector('.why_choose_us_right');
    let _chooseLeft = document.querySelector('.why_choose_us_left');
    let _leftload = _chooseLeft.getBoundingClientRect().top;
    let _rightload = _chooseRight.getBoundingClientRect().top;
    let _screenposition = window.innerHeight;
    if(_rightload < _screenposition && _leftload < _screenposition){
        _chooseRight.classList.add('active');
        _chooseLeft.classList.add('active');
    }
    else{
        _chooseRight.classList.remove('active');
        _chooseLeft.classList.remove('active');
    }
})

