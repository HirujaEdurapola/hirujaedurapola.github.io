let colors = [
    "#f1e05a", //Js
    "#563d7c", //CSS
    "#e44b23", //HTML
    "#40d47e"
]

let langs = [
    "js",
    "css",
    "html",
    "json"
]

document.getElementById('langPer').style.backgroundColor = colors[langs.indexOf(document.getElementById('langPer').getAttribute("hiruja"))]

document.getElementById('langPer').style.width = document.getElementById('langPer').innerText