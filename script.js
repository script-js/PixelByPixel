var size = 78;
var pnum = 0;
var currentPixel = false;
var pxsize = 10;
document.querySelectorAll("input[type='range']")[0].value = size

function resize(digit) {
  switch (digit) {
    case "1": pxsize = 2
    case "2": pxsize = 4
    case "3": pxsize = 5
    case "4": pxsize = 10
  }
  var elems = document.querySelectorAll(".pixel")
  Object.keys(elems).forEach(function (k) {
    elems[k].style.width = pxsize + "%"
  })
}

function aratio(ratio) {
  canvas.style.aspectRatio = ratio.replace(":"," / ")
}

function drawPixel(clr) {
  var pixel = document.createElement("div")
  pixel.classList = "pixel";
  pixel.style = "background:" + clr + ";width:" + pxsize + "%;";
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
