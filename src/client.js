import './style.css'

const createTitle = () => {
    const title = document.createElement('h1')
    title.innerText = 'This is a title'
    return title
}

window.onload = () => document.getElementById('app').appendChild(createTitle())