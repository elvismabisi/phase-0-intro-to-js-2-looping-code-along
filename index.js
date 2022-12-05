// Code your solutions in this file
const messages = []

function writeCards(names, eventName) {
    for (let i = 0; i < names.length; i++) {
        messages[i]=(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
        debugger
    }
    return messages
}writeCards(names)

function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}