let saveEl = document.getElementById("save-el")
let foulEl = document.getElementById("foul-el")
let countEl1 = document.getElementById("count-el1")
let countEl2 = document.getElementById("count-el2")
let foulBtn = document.getElementById("foul-btn")
let foulEl1 = document.getElementById("count-el1")
let foulEl2 = document.getElementById("count-el2")
let count1 = 0
let count2 = 0
let foul1 = 0 
let foul2 = 0
let id = 0
let hideBtn1 = document.getElementById("hideEl1")
let hideBtn2 = document.getElementById("hideEl2")
let hideBtn3 = document.getElementById("hideEl3")
let hideBtn4 = document.getElementById("hideEl4")
let point = true
let foulIncre1 = document.getElementById("foul-incre-btn1")
let foulIncre2 = document.getElementById("foul-incre-btn2")

function increment(i,id) {
    if (id === 1) {
        if(point == false) {
            foul1 += 1
            foulEl1.textContent = foul1
        } else {
            count1 += i
            countEl1.textContent = count1
        }
    }
    else if (id === 2) {
        if(point == false) {
            foul2 = parseInt(foulEl2.textContent)
            foul2 += 1
            foulEl2.textContent = foul2
        }
        else {
            count2 = parseInt(countEl2.textContent)
            count2 += i
            countEl2.textContent = count2
        }
    }
    else {
        return;
    }
}

function saveFunc() {
    let countStr = count1 + " - " + count2 + ", "
    let foulStr = foul1 + " - " + foul2 + ", "
    saveEl.textContent += countStr
    foulEl.textContent += foulStr
    countEl1.textContent = 0
    countEl2.textContent = 0
    foulEl1.textContent = 0
    foulEl2.textContent = 0
    count1 = 0
    count2 = 0
    foul1 = 0
    foul2 = 0
    id = 0
}

function hideElFunc() {
    hideBtn1.style.visibility = "hidden"
    hideBtn2.style.visibility = "hidden"
    hideBtn3.style.visibility = "hidden"
    hideBtn4.style.visibility = "hidden"
}

function showElFunc() {
    hideBtn1.style.visibility = "visible"
    hideBtn2.style.visibility = "visible"
    hideBtn3.style.visibility = "visible"
    hideBtn4.style.visibility = "visible"
}

function foulFunc() {
    if(foulBtn.textContent === "POINTS") {
        foulBtn.textContent = "FOULS"
        foul1 = parseInt(foulEl1.textContent)
        foul2 = parseInt(foulEl2.textContent)
        countEl1.textContent = count1
        countEl2.textContent = count2
        point = true
        foulIncre1.textContent = "+2"
        foulIncre2.textContent = "+2"
        showElFunc()
    }
    else if (foulBtn.textContent === "FOULS") {
        foulBtn.textContent = "POINTS"
        count1 = parseInt(countEl1.textContent)
        count2 = parseInt(countEl2.textContent)
        foulEl1.textContent = foul1
        foulEl2.textContent = foul2
        point = false
        foulIncre1.textContent = "+1"
        foulIncre2.textContent = "+1"
        hideElFunc()
    }
}