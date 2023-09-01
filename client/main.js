const div = document.getElementById("respuesta")

fetch("http://localhost:4000")
.then((res) => res.text())
.then((data) => div.innerText = data )