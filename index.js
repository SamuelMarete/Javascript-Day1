let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
    count++;
    countEl.innerText = count; // Update the count
}

function decrement() {
    if (count > 0) { // Prevent count from going below 0
        count--;
        countEl.innerText = count; // Update the count
    }
}
