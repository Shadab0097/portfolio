// navbar toogle

let menuicon = document.querySelector('#menu');
let navbar = document.querySelector(".nav_link")

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}





let section = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        console.log(offset)
        let height = sec.offsetHeight;
        // console.log(height)
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
            })
        }

    })
    // header toggle boder 
    let header = document.querySelector(".header_design")
    header.classList.toggle('sticky', window.scrollY > 100)

    // remove menu and nv link when scroll
    
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active')
}

// animations
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });

ScrollReveal().reveal('.text_cont , .heading',{origin:'top'});
ScrollReveal().reveal('.img_cont , .service_cont , .portfolio-box , .contact_box ,.project_cont' ,{origin:'bottom'});

const typed = new Typed ('#name',{
    strings:['Frontend Developer','React Developer'],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
})

