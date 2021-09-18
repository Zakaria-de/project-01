import anime from 'animejs/lib/anime.es.js';







window.onload = function() {
    document.querySelectorAll('form > [data-form]').forEach(el => el.addEventListener("focus",(e)=>{
        document.querySelector('form > button').classList.remove('flip','checked')
    }))
    document.querySelector('.contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
                document.querySelector('form > button').classList.add('flip')
                setTimeout(() => {
                document.querySelector('form > button').classList.add('checked')
                }, 1000);

            }, function(error) {
                console.log('FAILED...', error);
                
            });
            

    });
}
