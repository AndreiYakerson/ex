'use strict'

let gUserOptions = {}

function saveUserOptions(options) {
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