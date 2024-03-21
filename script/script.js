document.addEventListener('DOMContentLoaded', function() {

    // add class navbarDark on navbar scroll
    const header = document.querySelector('.navbar');
    console.log(header)
    window.onscroll = function() {
        const top = window.scrollY;
        if(top >=100) {
            header.classList.add('navbarDark');
        }
        else {
            header.classList.remove('navbarDark');
        }
    }
    // collapse navbar after click on small devices
    const navLinks = document.querySelectorAll('.nav-item')
    const menuToggle = document.getElementById('navbarSupportedContent')

    navLinks.forEach((l) => {
        l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
    })

    // this section is for email js
    window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            // these IDs from the previous steps
            emailjs.sendForm('service_ic5lo4i', 'template_3qi9ckf', this)
                // .then(() => {
                //     console.log('SUCCESS!');
                // }, (error) => {
                //     console.log('FAILED...', error);
                // });
                .then(function() {
                    alert('Message sent successfully!');
                }, function(error) {
                    console.log('FAILED...', error);
                });
        });
    }
});
