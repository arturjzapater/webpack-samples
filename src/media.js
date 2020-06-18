import './style.css'
import './media/cat-02.jpg'

const createTitle = () => {
    const title = document.createElement('h1')
    title.innerText = 'This is a title'
    return title
}

const createCatPhoto = () => {
    const img = document.createElement('img')
    img.setAttribute('src', 'media/cat-02.jpg')
    return img
}

window.onload = () => {
    const app = document.getElementById('app')
    app.appendChild(createTitle())
    app.appendChild(createCatPhoto())
}