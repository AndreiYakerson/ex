'use strict'

function onClickSubmit(ev) {
    ev.preventDefault()
    // console.log('submit');
    const elForm = ev.target

    saveUserOptions(getUserOptions(elForm))





    window.location = 'index.html'
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