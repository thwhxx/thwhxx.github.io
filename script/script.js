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
                .then(() => {
                    console.log('SUCCESS!');
                }, (error) => {
                    console.log('FAILED...', error);
                });
        });
    }

    // // emailjs.init("frHxoRaeaatLpQ2u0");
    // emailjs.init({
    //     publicKey: "frHxoRaeaatLpQ2u0",
    // });


    //     document.getElementById('contact-button').addEventListener('submit', function() {
    //         // Gather form data
    //         var name = document.getElementById('name').value;
    //         var email = document.getElementById('email').value;
    //         var subject = document.getElementById('subject').value;
    //         var message = document.getElementById('message').value;

    //         // Send email using EmailJS
    //         emailjs.send("service_ic5lo4i", "template_3qi9ckf", this, {
    //             "from_name": name,
    //             "from_email": email,
    //             "subject": subject,
    //             "message": message
    //         })
    //         .then(function(response) {
    //             console.log('SUCCESS!', response.status, response.text);
    //             // Clear form fields
    //             document.getElementById('name').value = '';
    //             document.getElementById('email').value = '';
    //             document.getElementById('subject').value = '';
    //             document.getElementById('message').value = '';
    //             alert('Your message has been sent successfully.');
    //         }, function(error) {
    //             console.log('FAILED...', error);
    //             alert('Oops! Something went wrong. Please try again later.');
    //         });
    //     });
    // });

    // document.getElementById('contact-button').addEventListener('submit', function() {
    //     // Gather form data
    //     var formData = {
    //         from_name: document.getElementById('name').value,
    //         subject: document.getElementById('subject').value,
    //         message: document.getElementById('message').value,
    //         reply_to: document.getElementById('email').value
    //     };
        
    //     // Send the email
    //     emailjs.send("service_ic5lo4i", "template_3qi9ckf", formData)
    //         .then(function(response) {
    //             console.log('Email sent successfully:', response);
    //             alert('Your message has been sent successfully!');
    //             // Clear form fields after successful submission
    //             document.getElementById('contact-form').reset();
    //         }, function(error) {
    //             console.error('Email send failed:', error);
    //             alert('Oops! Something went wrong. Please try again later.');
    //         });
});
