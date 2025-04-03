'use strict'

let gUserOptions = {}
loadUserOptions()


function changeUserOptions(options) {
    gUserOptions = {
        email: options.email.value,
        age: options.age.value,
        date: options.date.value,
        time: options.time.value,
        bgColor: options.bgColor.value,
        txtColor: options.txtColor.value
    }
    console.log(gUserOptions);
}

function getOptionsFromModel(model) {
    return model
}


function saveUserOptions() {
    const strOptions = JSON.stringify(gUserOptions)
    localStorage.setItem('options', strOptions)
}

function loadUserOptions() {
   const strOptions = localStorage.getItem('options')
   const options = JSON.parse(strOptions)
   gUserOptions = options
}