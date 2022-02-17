// Question 1

function greet(name = "John") {
    return `Hello ${name}!`;
}


// Question 2

const messageContainer = document.querySelector(".message");

const message = createMessage("hi", "hello");

messageContainer.innerHTML = message;

// or this way

function divCreator(className, innerValue) {
    return `<div class="${className}">${innerValue}</div>`;
}


// Question 3

async function getFact() {
    try {
        const response = await fetch("https://cat-fact.herokuapp.com/facts");
        
        const results = await response.json();
        
        console.log(results[8].text);
    }
    catch (error) {
        console.log("An unforeseen error occured");
    }
    finally {
        console.log("This message will always log");
    }
    
}

getFact();