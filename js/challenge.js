//what we nee to do is add a like button which displays whether the it is liked or no
// a pause button 
const counter = document.getElementById("counter");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const heartButton = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
const forLikes = document.querySelector(".likes");
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById("list");
let count = 0;
let paused = false;
let intervalID;

startCounter();


plusButton.addEventListener("click", incrementCounter);
minusButton.addEventListener("click", decrementCounter);
heartButton.addEventListener("click", addLike);
commentForm.addEventListener("submit", addComment);
pauseButton.addEventListener("click", function(){
paused = !paused
if (paused) {
    pauseCounter();
    pauseButton.textContent = "Resume";
} else {
    startCounter();
    pauseButton.textContent = "Pause";
}

});

function startCounter() {
    intervalID = setInterval(function () {
        count++;
        counterValue();
    }, 1000);   
}

function pauseCounter() {
    clearInterval(intervalID);
}
function incrementCounter() {
    count++;
    counterValue();

}

function decrementCounter() {
    count--;
    counterValue();
}

function counterValue() {
    counter.textContent = count;

}

function addLike() {
    const li = document.createElement("li");
    li.innerText = `${count} has been liked`;
    likes.appendChild(li);
}
function addComment(e) {
    e.preventDefault();
    const p = document.createElement("p");
    p.innerText = commentInput.value;
    commentList.appendChild(p);
}

