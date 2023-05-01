const input = document.querySelector("input");
const inpcolor = document.getElementById("inpcolor");
const list = document.getElementById("list");
let text = [];
function addText() {
    if (input.value.trim() != "") {
        text.push(input.value.trim());
        list.style.color = inpcolor.value;
        input.value = "";
        fillList();
    }
    else {
        alert("Yazi daxil edin")
    }
}
function fillList() {
    let result = text.reduce(
        (result, val) => result += `<h3>${val}</h3>`, ''
    );
    list.innerHTML = result;
}