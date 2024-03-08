var FlechaDerecha = window.document.getElementById("flecha-derecha")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var FlechaIzquierda = window.document.getElementById("flecha-izquierda")
function GiroDerecha () {
Leonardo.style = "display: none"
Samantha.style = "display: flex; margin-left: -5%"
Bruna.style = "margin-left: 10px"
FlechaDerecha.style = "display:none"
FlechaIzquierda.style = "display:flex; margin-left:120px; margin-top: -15%"
}
function GiroIzquierda() {
    Leonardo.style = "display:flex"
    Samantha.style = "display:none"
    FlechaDerecha.style = "display:flex"
    FlechaIzquierda.style = "display:none"
}
