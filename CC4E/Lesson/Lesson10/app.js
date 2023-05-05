const html = document.documentElement
console.log(html)

const text = document.getElementById("text")
text.innerHTML = `Hello world!`
text.style.color = "red"
console.log(text)

const addPTag = document.createElement("p")
addPTag.innerHTML = `Đây là thẻ p được tạo thêm`
document.body.appendChild(addPTag);

const todoList = ["Homework", "Jogging", "Shopping"]
const ul = document.createElement("ul")
for (let i = 0; i < todoList.length; i++) {
    const li = document.createElement("li")
    li.classList.add("item")
    li.innerHTML = todoList[i]
    ul.appendChild(li)
}
document.body.appendChild(ul)

function sayHello() {
    alert("Hello world!")
}

document.getElementById("eventListener").addEventListener("click", function () {
    alert("Add Enent Listener")
})

const myBtn = document.getElementById("myBtn")
myBtn.addEventListener("click", sayHello)
myBtn.addEventListener("click", function () {
    console.log("another event listener");
})
myBtn.removeEventListener("click", sayHello)

const myInput = document.getElementById("myInput")
myInput.addEventListener("change", function () {
    console.log("input changed")
})