var toggle = document.getElementById('hide-checkbox')
var body = document.querySelector('body')
var p = document.querySelector('p')
var a = document.querySelector('a')
var h1 = document.querySelector('h1')
var h2 = document.querySelector('h2')
var h3 = document.querySelector('h3')
var h5 = document.querySelector('h5')
var footer = document.querySelector('footer')
var hero = document.getElementById('hero')
var profesion = document.getElementById('profesion')
var flecha = document.getElementById('flecha')
var resume = document.getElementById('resume')
var about = document.getElementById('about')
var navbar = document.getElementById('navbar')
var social = document.getElementById('social')
var portfolio = document.getElementById('portfolio')
var skills = document.getElementById('skills')
var services = document.getElementById('services')
var contact = document.getElementById('contact')
var header = document.getElementById('header')
var ascensor = document.getElementById('ascensor')
var link = document.getElementById('link')
var icono = document.getElementById('icono')
var profile = document.getElementById('profile')

toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    p.classList.toggle('active');
    if (!a.classList.contains('active')) {
        a.classList.add('active');
    }
    h1.classList.toggle('active');
    h2.classList.toggle('active');
    h3.classList.toggle('active');
    h5.classList.toggle('active');
    hero.classList.toggle('active');
    profesion.classList.toggle('active');
    footer.classList.toggle('active');
    flecha.classList.toggle('active');
    resume.classList.toggle('active');
    about.classList.toggle('active');
    navbar.classList.toggle('active');
    social.classList.toggle('active');
    skills.classList.toggle('active');
    portfolio.classList.toggle('active');
    services.classList.toggle('active');
    contact.classList.toggle('active');
    ascensor.classList.toggle('active');
    link.classList.toggle('active');
    icono.classList.toggle('active');
    profile.classList.toggle('active');

}

