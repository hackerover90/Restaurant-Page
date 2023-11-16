function contactPage() {
    let contactPageBody = document.querySelector('#pageBody')
    contactPageBody.classList.add('d-flex', 'flex-column', 'justify-content-start', 'align-items-center', 'pageBody', 'flex-fill')
    
    let contactTitle = document.createElement('div')
    contactTitle.innerHTML = 'Contact Us'
    contactTitle.classList.add('home-title', 'text-center')
    let contactContainer = document.createElement('div')
    contactContainer.classList.add('container', 'my-4', 'd-flex', 'align-items-center')
    
    let contactIntro = document.createElement('div')
    contactIntro.classList.add('home-text', 'text-center')
    contactIntro.innerHTML = "Enter your contact info and we'll reach out to you."

    contactContainer.append(contactIntro)    
    contactPageBody.append(contactTitle, contactContainer)
}   

export default contactPage