var rightArrow = window.document.getElementById("right-arrow")
var bruna = window.document.getElementById("bruna-card")
var leonardo = window.document.getElementById("leonardo-card")
var samantha = window.document.getElementById("samantha-card")
var leftArrow = window.document.getElementById("left-arrow")

function RolarParaDireita() {
    bruna.style = "display: none" 
    samantha.style = "display: flex"
    rightArrow.style = "display: none"
    leftArrow.style = "display: flex"
}

function RolarParaEsquerda() {
    samantha.style = "display: none" 
    bruna.style = "display: flex"
    rightArrow.style = "display: flex"
    leftArrow.style = "display: none"
}