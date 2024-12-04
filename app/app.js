const yurak = document.querySelector(".yurak")
const red = document.querySelector(".red")
function addHeart(){
    yurak.classList.toggle(".active_yurak")
    red.classList.toggle(".active_red")
}

const inputValue = document.querySelector(".input_value")

const text =document.querySelector(".text")
const navList = document.querySelector(".nav")

function addBtn(){
    let li =document.createElement('li')
    navList.appendChild(li)
    li.textContent = inputValue.value
    inputValue.value =''
}
