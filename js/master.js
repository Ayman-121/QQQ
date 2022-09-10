const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

document.addEventListener('click', () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500)
})

let burger = document.querySelector("#burger")
let menu = document.querySelector("#menu")


burger.addEventListener("click", function () {
  burger.classList.toggle("active")
  menu.classList.toggle("active")
})

let one = document.querySelector("#one")
let two = document.querySelector("#two")
let three = document.querySelector("#three")
let four = document.querySelector("#four")
let five = document.querySelector("#five")
let six = document.querySelector("#six")
let seven = document.querySelector("#seven")
let eight = document.querySelector("#eight")
let nine = document.querySelector("#nine")
let ten = document.querySelector("#ten")





window.onscroll = function () {
  if (window.scrollY >= one.offsetTop - 800) {
    one.style.transform = "translateY(0%)";
    two.style.transform = "translateY(0%)";
    three.style.transform = "translateY(0%)";
  } else if (window.scrollY <= one.offsetTop - 600) {
    one.style.transform = "translateY(100%)";
    two.style.transform = "translateY(100%)";
    three.style.transform = "translateY(100%)";
  }
  if (window.scrollY >= four.offsetTop - 800) {
    four.style.transform = "translateY(0%)";
    five.style.transform = "translateY(0%)";
    six.style.transform = "translateY(0%)";
  } else if (window.scrollY <= four.offsetTop - 600) {
    four.style.transform = "translateY(100%)";
    five.style.transform = "translateY(100%)";
    six.style.transform = "translateY(100%)";
  }
  if (window.scrollY >= seven.offsetTop - 800) {
    seven.style.transform = "translateY(0%)";
    eight.style.transform = "translateY(0%)";
    nine.style.transform = "translateY(0%)";
  } else if (window.scrollY <= seven.offsetTop - 600) {
    seven.style.transform = "translateY(100%)";
    eight.style.transform = "translateY(100%)";
    nine.style.transform = "translateY(100%)";
  }
  if (window.scrollY >= ten.offsetTop - 800) {
    ten.style.transform = "translateY(0%)";
  } else if (window.scrollY <= ten.offsetTop - 600) {
    ten.style.transform = "translateY(100%)";
  }
};

let stars = Array.from(document.querySelectorAll("#star"))

window.addEventListener("scroll", e => {
  stars.forEach((star) => {
    star.setAttribute(`style`,`transform: rotate(${e.timeStamp}deg)`)
  })
})
// let trying = document.querySelector("#try")

// document.addEventListener('mousemove', e => {
//   trying.setAttribute("style", "bottom: " + (e.offsetY ) + "px; right: " + (e.offsetX) + "px;")
// })