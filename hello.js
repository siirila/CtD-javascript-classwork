function saySomething(num) {
    if (num === 0) {
        sayHello();
    } else {
        sayQuestion();
    }
}

function sayQuestion() {
    console.log("Are you thinking what I'm thinking?");
}

function sayHello() {
    console.log("Greetings!");
} 

exports.saySomething = saySomething;
