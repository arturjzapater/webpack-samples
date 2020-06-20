import './style.css'

const createTitle = () => {
    const title = document.createElement('h1')
    title.innerText = 'This is a title'
    return title
}

const createP = content => {
    const p = document.createElement('p')
    p.innerText = content
    return p
}

const getNum = () => Math.floor(Math.random() * 10)
const addTwo = x => x + 2
const triple = x => x * 3

window.onload = () => {
    const app = document.getElementById('app')

    createTitle()
    |> app.appendChild

    getNum()
    |> addTwo
    |> triple
    |> createP
    |> app.appendChild
}
