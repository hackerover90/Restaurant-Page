import Plain from '../images/plain-croissant.jpg'
import Chocolate from '../images/chocolate-croissant.jpg'
import Strawberry from '../images/strawberry-croissant.jpg'
import Sugar from '../images/sugar-croissant.jpg'

function menuPage() {


    let menuPageBody = document.querySelector('#pageBody')
    //menuPageBody.classList.remove('justify-content-center')
    menuPageBody.classList.add('d-flex', 'flex-column', 'justify-content-start', 'pageBody', 'flex-fill')
    
    let menuTitle = document.createElement('div')
    menuTitle.innerHTML = 'Menu'
    menuTitle.classList.add('home-title', 'text-center', 'border-bottom', 'border-secondary', 'border-3', 'py-0', 'my-0')
    let menuContainer = document.createElement('div')
    menuContainer.classList.add('container', 'my-4', 'd-flex', 'flex-wrap', 'justify-content-center', 'gap-5')
    for (let i = 0; i < 4; i++) {
        let card = document.createElement('div')
        card.classList.add('cards', 'card')
        card.setAttribute('style', 'width: 18rem;')

        let img = document.createElement('img')
        //img.setAttribute('src', '')
        img.classList.add('card-img-top')
        //img.setAttribute('alt', '')

        let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        let cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title', 'fw-bold')

        let cardText = document.createElement('p')
        cardText.classList.add('card-text')
        
        if (i==0) {
            img.setAttribute('src', Plain)
            img.setAttribute('alt', 'Plain Croissant')
            cardTitle.innerHTML = 'Plain Croissant'
            cardText.innerHTML = 'A delicious classic.'
        } else if (i == 1) {
            img.setAttribute('src', Chocolate)
            img.setAttribute('alt', 'Chocolate Croissant')
            cardTitle.innerHTML = 'Chocolate Croissant'
            cardText.innerHTML = 'A delicious croissant with a chocolate filling.'
        } else if (i == 2) {
            img.setAttribute('src', Strawberry)
            img.setAttribute('alt', 'Strawberry Croissant')
            cardTitle.innerHTML = 'Strawberry Croissant'
            cardText.innerHTML = 'A delicious croissant sprinkled with fresh cut strawberries.'
        } else {
            img.setAttribute('src', Sugar)
            img.setAttribute('alt', 'Sugar Croissant')
            cardTitle.innerHTML = 'Sugar Croissant'
            cardText.innerHTML = 'A delicious croissant sprinkled with sugar.'
        }

        cardBody.append(cardTitle, cardText)
        card.append(img, cardBody)
        menuContainer.append(card)
    }

    menuPageBody.append(menuTitle, menuContainer)
}

export default menuPage;