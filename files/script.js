/*========== scroll sections active link in navbar ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};


/*========== Typing animation in home page ==========*/
var typed = new Typed(".text", {
    strings: ["Programming" , "Web Development", "Cybersecurity"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


/*========== Go top icon in left bottom ==========*/
const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

/*========== Scroll Reveal script ==========*/
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.reveal');
    function checkScroll() {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight * 0.75) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
    }
    checkScroll();
    window.addEventListener('scroll', checkScroll);
});

/*======================Contact Form==============*/
function sendmail(){
    
    values = {
        from_name : document.getElementById('name').value,
        from_email : document.getElementById('email').value,
        message : document.getElementById('message').value,
    }
    console.log(values);

    // Use EmailJS to send the email
    emailjs.send("service_493ccff", "template_z2c1rlc", values).then(function(response) {
        alert('Message sent successfully!');
    }, function(error) {
        alert('Failed to send the message, please try again later.');
    });
}


