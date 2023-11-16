import './css/styles.css'
//import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import homePage from './home'
import menuPage from './menu'

function alertt() {
    console.log('works!')
}

function createPageFormat() {
    let content = document.querySelector('#content')
    let header = document.createElement('div')
    let navBar = document.createElement('ul')
    let pageBody = document.createElement('div')
    let footer = document.createElement('div')
    
    content.classList.add('d-flex', 'flex-column', 'justify-content-between', 'min-vh-100', 'min-vw-100', 'vw-100', 'vh-100')
    header.classList.add('d-flex', 'justify-content-center', 'bg-light', 'opacity-75', 'border-bottom', 'border-secondary', 'border-3')
    header.setAttribute('id', 'header')
    pageBody.classList.add('pageBody', 'flex-fill')
    pageBody.setAttribute('id', 'pageBody')
    navBar.classList.add('nav')
    footer.classList.add('d-flex', 'justify-content-center', 'bg-light', 'opacity-75', 'py-2', 'border-top', 'border-secondary', 'border-3')
    footer.innerHTML = '@hackerover90'
    footer.setAttribute('id', 'footer')

    for (let i=0; i<3; i++) {
        let navLink = document.createElement('li')
        navLink.classList.add('nav-item')
        let link = document.createElement('a')
        link.classList.add('nav-link')
        if (i==0) {
            link.setAttribute('id', 'home')
            link.setAttribute('href', '#')
            link.classList.add('p-0', 'mx-5', 'my-2', 'text-dark')
            link.innerHTML = 'Home'
        } else if (i==1) {
            link.setAttribute('id', 'menu')
            link.setAttribute('href', '#')
            link.classList.add('p-0', 'mx-5', 'my-2', 'text-dark')
            link.innerHTML = 'Menu'
        } else {
            link.setAttribute('id', 'contact')
            link.setAttribute('href', '#')
            link.classList.add('p-0', 'mx-5', 'my-2', 'text-dark')
            link.innerHTML = 'Contact'
        }
        //link.setAttribute('onclick', )
        navLink.appendChild(link)
        navBar.appendChild(navLink)
    }

    content.append(header, pageBody, footer)
    header.appendChild(navBar)
}

createPageFormat()
homePage()

document.querySelector('#home').addEventListener('click', () => {
    let pageBody = document.getElementById('pageBody')
   while (pageBody.firstChild) {
        pageBody.removeChild(pageBody.lastChild)
    }
    
    homePage()
})

document.querySelector('#menu').addEventListener('click', () => {
    let pageBody = document.getElementById('pageBody')
   while (pageBody.firstChild) {
        pageBody.removeChild(pageBody.lastChild)
    }
    
    menuPage()
})