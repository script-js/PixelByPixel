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
  pixel.ondblclick = function() {
    currentPixel = this.id; 
    var elems = document.querySelectorAll(".pixel")
    Object.keys(elems).forEach(function (k) {
      if (elems[k] != this) {
        elems[k].style.visibility = "hidden"
      }
    })
  }
  canvas.appendChild(pixel)
}

function color() {
  if (currentPixel) {
    document.getElementById(currentPixel).style.background = colorType.value
    var elems = document.querySelectorAll(".pixel")
    Object.keys(elems).forEach(function (k) {
      elems[k].style.visibility = "visible"
    })
  } else {
    drawPixel(colorType.value)
  }
}
