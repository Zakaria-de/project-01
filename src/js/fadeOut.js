
 const plates = document.querySelectorAll('.plate')
 
 function fadeOut() {
    this.firstElementChild.classList.add("fadeOut")
 }
 function mouseOut() {
    this.firstElementChild.classList.remove("fadeOut")
 }



plates.forEach(p => p.addEventListener('mouseover',fadeOut))
plates.forEach(p => p.addEventListener('mouseout',mouseOut))