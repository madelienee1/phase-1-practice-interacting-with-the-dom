// Counter

let counter = 0;

function updateCounter() {
    counter += 1;
    console.log(counter);
    document.getElementById('counter').innerText = counter;
}


const intervalId = setInterval(updateCounter, 1000);

// Decrement counter

function decrementCounter() {
    counter -= 1;
    document.getElementById('counter').innerText = counter;
}

document.getElementById('minus').addEventListener("click", decrementCounter);


//Increment Counter
function incrementCounter() {
    counter += 1;
    document.getElementById('counter').innerText = counter;
}

document.getElementById('plus').addEventListener("click", incrementCounter);


// Pause Counter

document.getElementById('pause').addEventListener("click", function () {
    clearInterval(intervalId)
});

// Add Comment
//get element that we are going to be putting the child in

const commentList = document.getElementById('list')

function newComment(comment) {
    //create new element for comment
    //set innerhtml of element to string of our comment
    // append to comment list
    const commentHtml = document.createElement('p');
    commentHtml.innerHTML = comment
    commentList.appendChild(commentHtml)
}

//get form and set to variable
const myForm = document.getElementById("comment-form")

// add event listener to form that calls the new comment function and clears the form afterwards.
myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const commentInput = event.target.elements['comment'].value
    newComment(commentInput)
    myForm.reset()
});




//on submit create a p tag with the value of whatever the text field is
//append new element to comments div
//clear the input field

