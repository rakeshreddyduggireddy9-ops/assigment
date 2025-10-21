let count = 0;
let savedCounts = [];

function increment() {
    count++;
    document.getElementById("count").innerText = count;
}

function save() {
    savedCounts.push(count);
    document.getElementById("savedCounts").innerText = "Previous Counts: " + savedCounts.join(", ");
    count = 0;
    document.getElementById("count").innerText = count;
}
