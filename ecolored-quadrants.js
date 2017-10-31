function colorQuads() {
    let quadrant = "#" + prompt(`Select quandrant
topLeft
topRight
bottomLeft
bottomRight`)


    let color = prompt("Choose a color")

    let id = document.querySelector(quadrant)

    id.style.backgroundColor = color
   
}
colorQuads()