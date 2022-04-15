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




$('.about-more-btn').click(function(){
    $('.about-more').slideToggle('slow')
})