let menu = document.querySelector('.burger-menu')
let btn = document.querySelector('.burger-menu__button')
function f1(e) {
  e.preventDefault()
  menu.classList.toggle('burger-menu_active')
}

btn.onclick = f1

