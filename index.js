let saveEl = document.getElementById("save-el")
let countEl1 = document.getElementById("count-el1")
let countEl2 = document.getElementById("count-el2")
let count = 0
let id = 0


function increment(i,id) {
    // count += 1
    if (id === 1) {
        count = parseInt(countEl1.textContent)
        count += i
        countEl1.textContent = count
    }
    else if (id === 2) {
        count = parseInt(countEl2.textContent)
        count += i
        countEl2.textContent = count
    }
    else {
        return;
    }
}

function save() {
    let count1 = countEl1.textContent
    let count2 = countEl2.textContent
    let countStr = count1 + " - " + count2 + ", "
    saveEl.textContent += countStr
    countEl1.textContent = 0
    countEl2.textContent = 0
    count = 0
    id = 0
}