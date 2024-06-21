var size = 80;
var pnum = 0;
var currentPixel = false;
document.querySelectorAll("input[type='range']")[0].value = size

function resize(nsize) {
  size = nsize
  canvas.style.width = size + "%"
}

function aratio(ratio) {
  canvas.style.aspectRatio = ratio.replace(":"," / ")
}

function drawPixel(clr) {
  var pixel = document.createElement("div")
  pixel.classList = "pixel";
  pixel.style = "background:" + clr
  pixel.id = "pixel" + pnum;
  pnum += 1;
  pixel.onclick = function() {
    currentPixel = this.id; 
    var elems = document.querySelectorAll(".pixel")
    Object.keys(elems).forEach(function (k,elem2) {
      if (elems[k].id != currentPixel) {
        elems[k].style.opacity = "0.5"
      }
    })
    canvas.onclick = function(event) {
      if (event.target != document.getElementById(currentPixel)) {
    var elems = document.querySelectorAll(".pixel")
    Object.keys(elems).forEach(function (k) {
      elems[k].style.opacity = "1"
    })
    currentPixel = false;
canvas.onclick = null
      }
} 
  }
  canvas.appendChild(pixel)
}

function color() {
  if (currentPixel) {
    document.getElementById(currentPixel).style.background = colorType.value
    var elems = document.querySelectorAll(".pixel")
    Object.keys(elems).forEach(function (k) {
      elems[k].style.opacity = "1"
    })
    currentPixel = false;
    canvas.onclick = null
  } else {
    drawPixel(colorType.value)
  }
}
