/* 
This program display random messages on console
Messages are related to computer science 
*/

const messages = [
    //List of messages to be printed on console
    'Learning to Code is fun',
    'To debug a code, make you professional programmer',
    'Got stuck in coding. Don\'t worry, take a break and research ',
    'HTML, CSS, JavaScript are core technologies for web development'
];

function randomMessages (msg) {
    // This function takes and array and return a random message in it.
    let randomIndex = Math.floor(Math.random() * msg.length);
    return msg[randomIndex];
}

console.log(randomMessages(messages));


