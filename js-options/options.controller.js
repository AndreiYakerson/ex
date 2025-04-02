'use strict'

function onInit() {
    loadUserOptions()
    renderColors()
    renderInfo()

}

function onClickSubmit(ev) {
    ev.preventDefault()
    const elForm = ev.target

    changeUserOptions(getUserOptions(elForm))
    saveUserOptions()

    window.location = 'index.html'
}

function renderInfo() {
    const elMain = document.querySelector('main')

    if (elMain) {

        elMain.innerHTML = `
        <h1>Welcome to the map!</h1>
        <p>Email: ${gUserOptions.email}</p>
        <p>Age: ${gUserOptions.age}</p>
        <p>Birth Date: ${gUserOptions.date}</p>
        <p>Birth Time: ${gUserOptions.time}</p>
        `
    }

}

function renderColors() {

    const elBody = document.querySelector('body')
    elBody.style.backgroundColor = gUserOptions.bgColor
    elBody.style.color = gUserOptions.txtColor
}

function getUserOptions({ email, age, date, time, bgColor, txtColor }) {
    const options = {
        email,
        age,
        date,
        time,
        bgColor,
        txtColor
    }
    return options
}

function onShowAge() {
    console.log('hi');

    const elSpan = document.querySelector('#sAge')
    const elInput = document.querySelector('#age')

    elSpan.innerHTML = elInput.value
}