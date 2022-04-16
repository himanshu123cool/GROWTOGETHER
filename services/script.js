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


$(document).ready(function(){
 $('.service-detail-box-1').hide()
$('.service-detail-box-2').hide()


$('.what_we_do_content_box').eq(0).click(function(){
    $('.service-detail-box-1').slideDown()
    $('.service-detail-heading-1').html('COPORATIVE VIDEOS')
    $('.service-detail-para-1').html('Our Grow Together team having vast Experience of making corporate videos for various Organisation.Corporate videos having effective way to represent your company information and their products details.')
})

$('.what_we_do_content_box').eq(1).click(function(){
    $('.service-detail-box-1').slideDown()
    $('.service-detail-heading-1').html('GRAPHIC DESIGNING')
    $('.service-detail-para-1').html('Grow Together also working on graphics designing and having experience and skilled team.Due to many years of graphic design experience our team can have your graphics related work very fast without compromising the quality of the work we produce.')
})

$('.what_we_do_content_box').eq(2).click(function(){
    $('.service-detail-box-1').slideDown()
    $('.service-detail-heading-1').html('DIGITAL MARKETING')
    $('.service-detail-para-1').html('Grow Together also working on graphics designing and having experience and skilled team.Due to many years of graphic design experience our team can have your graphics related work very fast without compromising the quality of the work we produce. <br><br> Everything is done in-house as we are not only a SEO Company. We have expert teams of programmers and designers in place to take care of the technical aspects of the optimization process.What are you waiting for, contact us and lets start a campaign for you which will sure shot yield results for you.')
})

$('.what_we_do_content_box').eq(3).click(function(){
    $('.service-detail-box-2').slideDown()
    $('.service-detail-heading-2').html('WEB DESIGNING')
    $('.service-detail-para-2').html('Grow Together is offering a broad range of web services ranging from web site design, website re-design.Due to many years of website design experience our team can have your website up and running very fast without compromising the quality of the work we produce. Simply send us the details of the site you would like created. Tell us how many pages, if you want a website form and if any special functionality is required. Alternatively, just give us a call to discuss and help you refine your ideas.Once we have created a web page design and layout for you, we will put it live on our development server for your approval before continuing work on your project. Depending on your project specifications for the website, it could be up and running within as little as couple weeks.')
})

$('.what_we_do_content_box').eq(4).click(function(){
    $('.service-detail-box-2').slideDown()
    $('.service-detail-heading-2').html('SEO')
    $('.service-detail-para-2').html('Here at Grow Together, the SEO team posses tremendous experience to achieve and maintain good rankings in search engines, boost overall online presence and of course increase in traffic comes part and parcel. Team is up to date with the frequent changes to the search engine algorithms and equipped with necessary effective tools to handle it. We work closely with the clients and understand their marketing objectives well as our aim is to deliver affordable yet effective SEO solutions where objectives are to meet and maintain long term marketing goals of the client.')
})

$('.what_we_do_content_box').eq(5).click(function(){
    $('.service-detail-box-2').slideDown()
    $('.service-detail-heading-2').html('WEB DEVELOPMENT')
    $('.service-detail-para-2').html('E-Commerce means performing business dealings online through Internet. ECommerce website development makes your site a wide-ranging selling tool. Whatever your business, an online catalog, retail store, or entire mall, you need the software, hosting, support and expertise to make your company succeed on the Web. Your web site can be quickly and easily updated to reproduce list, price and other product changes and additions. Greet your customers with an exciting, attractive and easy-to-navigate shopping experience loaded with features and convenience.')
})

})