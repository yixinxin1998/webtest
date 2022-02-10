let myPic = document.querySelector('img')

myPic.onclick = function() {
    let mySrc = myPic.getAttribute("src")
    if (mySrc === "images/mydir.png") {
        myPic.setAttribute("src","images/myqq.png")
    } else {
        myPic.setAttribute("src","images/mydir.png")
    }
}

let myBotton = document.querySelector("button")
let myHeading = document.querySelector("h1")


function setUserName() {
    let myName = prompt("请输入你的名字。")
    if (!myName || myName === null) {
        setUserName()
    }
    localStorage.setItem("name",myName)
    myHeading.textContent = "qq欢迎"+myName
}

if (!localStorage.getItem("name")) {
    setUserName()
} else {
    let storedName = localStorage.getItem("name")
    myHeading.textContent = "qq欢迎"+storedName
}

myBotton.onclick = function() {
    setUserName()
}