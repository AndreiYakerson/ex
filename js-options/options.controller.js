'use strict'

function onInit() {

    renderColors()
    renderInfo()
    renderAge()
    renderInputsValue(getOptionsFromModel(gUserOptions))
}

function onClickSubmit(ev) {
    ev.preventDefault()
    const elForm = ev.target

    changeUserOptions(geOptionsFromInputs(elForm))
    saveUserOptions()

    window.location = 'index.html'
}

function renderInputsValue(options) {
    const inputs = document.querySelectorAll('input')

    if (inputs.length > 0) {
        inputs[0].value = options.email
        inputs[1].value = options.age
        inputs[2].value = options.date
        inputs[3].value = options.time
        inputs[4].value = options.bgColor
        inputs[5].value = options.txtColor
    }
}

function renderInfo() {
    const elMain = document.querySelector('main')

    if (elMain) {

        elMain.innerHTML = `
        <h1>Welcome to the map!</h1>
        <section class="info-container">
        <p>Email: ${gUserOptions.email}</p>
        <p>Age: ${gUserOptions.age}</p>
        <p>Birth Date: ${gUserOptions.date}</p>
        <p>Birth Time: ${gUserOptions.time}</p>
        </section>
        `
    }

}

function renderColors() {
    const elBody = document.querySelector('body')

    elBody.style.backgroundColor = gUserOptions.bgColor
    elBody.style.color = gUserOptions.txtColor
}

function geOptionsFromInputs({ email, age, date, time, bgColor, txtColor }) {
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

    const elSpan = document.querySelector('#sAge')
    const elInput = document.querySelector('#age')

    elSpan.innerHTML = elInput.value
}

function renderAge() {
    const elSpan = document.querySelector('#sAge')
    const age = getOptionsFromModel(gUserOptions).age


    if (elSpan !== null) elSpan.innerHTML = age
}
