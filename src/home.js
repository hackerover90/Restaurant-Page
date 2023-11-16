

function homePage() {
    let pageBody = document.querySelector('#pageBody')
    pageBody.classList.add('d-flex', 'flex-column', 'justify-content-center', 'align-items-center')
    
    let homeTitle = document.createElement('div')
    homeTitle.innerHTML = 'Crazy Croissants'
    homeTitle.classList.add('home-title', 'text-center', 'border-bottom', 'border-secondary', 'border-3')
    let homeContainer = document.createElement('div')
    homeContainer.classList.add('container', 'mt-4')
    let homeIntro = document.createElement('div')
    homeIntro.classList.add('home-text', 'text-center')
    homeIntro.innerHTML = "Where croissants are the joy of life"
    pageBody.append(homeTitle, homeContainer)
    homeContainer.appendChild(homeIntro)
}

export default homePage;