const container = document.querySelector("#container")
const note = document.querySelector(".note-container")
const addHere = document.querySelector(".new-notes")
let myValues = []
let values = []
setData()
function addNote() {
    for (let i = 0; i < addHere.children.length; i++) {
        let newValue = addHere.children[i].lastElementChild.value;
        values[i]= newValue;
    }
    addHere.innerHTML += note.innerHTML;
    addHere.lastElementChild.style.display = "block"
    for (let i = 0; i < values.length; i++) {
        addHere.children[i].lastElementChild.value = values[i]
    }
    saveData()
}
function delNote(element) {
    element.parentNode.remove();
    saveData()
}
function inputChange() {
    saveData()
}
function saveData() {
    for (let i = 0; i < addHere.children.length; i++) {
        let newValue = addHere.children[i].lastElementChild.value
        myValues[i]= newValue
    }
    localStorage.setItem("note", addHere.innerHTML);
    localStorage.setItem("areaValues", myValues.toString())
}
function setData() {
    localStorage.removeItem("note")
    localStorage.removeItem("areaValues")
    let values = localStorage.getItem("areaValues").split(",")
    if (values != null && localStorage.getItem("note") == null) {
        addHere.innerHTML += localStorage.getItem("note")
        for (let i = 0; i < values.length; i++) {
        addHere.children[i].lastElementChild.value = values[i]
        }
    }
}