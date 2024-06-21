var size = 10;
var pnum = 0;
var currentPixel = false;

function resize(nsize) {
  size = nsize
  var elems = document.querySelectorAll(".pixel")
  Object.keys(elems).forEach(function (k) {
    elems[k].style.width = size + "%"
  })
}

function drawPixel(clr) {
  var pixel = document.createElement("div")
  pixel.classList = "pixel";
  pixel.style = "background:" + clr + ";width:" + size + "%;";
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
    window.onclick = function(event) {
      if (event.target != document.getElementById(currentPixel)) {
    var elems = document.querySelectorAll(".pixel")
    Object.keys(elems).forEach(function (k) {
      elems[k].style.opacity = "1"
    })
    currentPixel = false;
window.onclick = null
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
  } else {
    drawPixel(colorType.value)
  }
}
