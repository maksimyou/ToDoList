import './style.css'
import date from './date.js'
import Layout from './layout.js'
//console.log(localStorage.setItem('date', JSON.stringify(date)))
if (!JSON.parse(localStorage.getItem('date'))) {
    localStorage.setItem('date', JSON.stringify(date));
}
if (!JSON.parse(localStorage.getItem('sortingSwitch'))) {
    localStorage.setItem('sortingSwitch', JSON.stringify('priority'));
}

const lay = new Layout(document.querySelector('#app'))
lay.generatyPage()

