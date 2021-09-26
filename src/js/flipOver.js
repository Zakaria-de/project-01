const innerPlates = document.querySelectorAll('.plate__inner')


function flipOver() {

    const cards = this.querySelectorAll('.card')

    function handleCard(e) {

        e.stopPropagation()
        this.classList.add('flip-over')

    }
    cards.forEach(card => card.addEventListener('click', handleCard))

}

// //////////////

function flipBack() {

    const cards = this.querySelectorAll('.card')

    cards.forEach(card => card.classList.remove('flip-over'))

}


innerPlates.forEach(i => i.addEventListener('mouseenter', flipOver))
innerPlates.forEach(i => i.addEventListener('mouseout', flipBack))
