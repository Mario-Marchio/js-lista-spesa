const list = document.getElementById(`list`);
const items = [`latte`, `uova`, `farina`,`pane`, `pasta`];


let itemListStart = `<ul>`
let i = 0;
console.log(items[i])

while(i < items.length){
    itemListStart += `<li>${items[i]}</li>`
    i++;
    console.log(items[i])
}


let itemListEnd = `</ul>`

list.innerHTML = itemListStart + itemListEnd

console.log(list)