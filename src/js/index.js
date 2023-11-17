import '../css/styles.css'
//import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import createPageFormat from './format';
import homePage from './home'
import menuPage from './menu'
import contactPage from './contact';

createPageFormat()
homePage()

document.querySelectorAll('.link').forEach((link) => {
    link.addEventListener('click', () => {
        let pageBody = document.getElementById('pageBody')
        pageBody.className = ''
        while (pageBody.firstChild) {
                pageBody.removeChild(pageBody.lastChild)
        }
        
        if (link.id == 'home') {
            homePage()
        } else if (link.id == 'menu') {
            menuPage()
        } else if (link.id == 'contact') {
            contactPage()
        }
    })
})
