document.addEventListener("DOMContentLoaded", function() {
    seconds = 0,
        paused = false
    counter = document.getElementById("counter");
    let submit = document.querySelector("#submit");
    submit.addEventListener("click", handleComments)
    let pause = document.getElementById("pause");
    pause.addEventListener("click", handlePause);
    let heart = document.getElementById("heart");
    let plus = document.getElementById("plus");
    heart.addEventListener("click", handleHeart)
    plus.addEventListener("click", handlePlus)
    let minus = document.getElementById("minus");
    minus.addEventListener("click", handleMinus)
    startTimer(seconds, counter);
})

function startTimer(duration, counter) {
    let timer = duration;

    setInterval(function() {
        if (!paused) {
            newTime = ++duration
            seconds = newTime
            counter.textContent = seconds
        } else if (paused && (--seconds)) { seconds = seconds - 1 }

    }, 1000);
}

function handleComments(event) {
    event.preventDefault()
    let newDiv = document.createElement("div");
    let newValue = document.querySelector("#comment-input").value;
    let newComment = document.querySelector("#list").appendChild(newDiv);
    newComment.innerText = newValue;
    document.querySelector("#comment-input").value = ""
}

function handleHeart(event) {
    event.preventDefault()
    let newDiv = document.createElement("div");
    let newValue = `I like ${seconds} seconds.`
    let newComment = document.querySelector("#list").appendChild(newDiv);
    newComment.innerText = newValue;
}

function handlePause() {
    if (paused) { paused = false } else { paused = true }

}

function handleMinus() {
    paused = true;
    seconds = seconds - 1;
    paused = false;
    console.log(seconds);
}

function handlePlus() {
    paused = true;
    seconds = seconds + 1;
    paused = false;
    console.log(seconds);
}



// if (++timer >= 0) {
//     timer = duration;
// }

// if (timer >= 0) {
//     // timer = ++duration;
//     
//     let plus = document.getElementById("plus");
//     
//     let pause = document.getElementById("pause");
//     if (minus.addEventListener("click", function() {


// window.onload = function() {
//     var seconds = 0,
//         display = document.getElementById("counter");;
//     startTimer(seconds, display);
// };