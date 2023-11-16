import './css/styles.css'
//import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

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
    header.classList.add('d-flex', 'justify-content-center')
    pageBody.classList.add('flex-fill')
    navBar.classList.add('nav')
    footer.classList.add('d-flex', 'justify-content-center')
    footer.innerHTML = '@hackerover90'

    for (let i=0; i<3; i++) {
        let navLink = document.createElement('li')
        navLink.classList.add('nav-item')
        let link = document.createElement('a')
        link.classList.add('nav-link')
        if (i==0) {
            link.setAttribute('id', 'home')
            link.innerHTML = 'Home'
        } else if (i==1) {
            link.setAttribute('id', 'menu')
            link.innerHTML = 'Menu'
        } else {
            link.setAttribute('id', 'contact')
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



