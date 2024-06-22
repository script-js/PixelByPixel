var size = 78;
var pnum = 0;
var aspect = "1:1"
var currentPixel = false;
var pxsize = 10;
document.querySelectorAll("input[type='range']")[0].value = size
document.querySelectorAll("input[type='range']")[1].value = 1

function resize(digit) {
  switch (digit) {
  case "4": pxsize = 2; break;
  case "3": pxsize = 4; break;
  case "2": pxsize = 5; break;
  case "1": pxsize = 10; break;
  }

  var elems = document.querySelectorAll(".pixel")
  Object.keys(elems).forEach(function (k) {
    elems[k].style.width = pxsize + "%"
  })
  sessionStorage.setItem("session",getSessionJSON())
}

function aratio(ratio) {
  aspect = ratoi
  canvas.style.aspectRatio = aspect.replace(":"," / ")
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
  sessionStorage.setItem("session",getSessionJSON())
}

addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key == "z") {
      document.getElementById("pixel" + (pnum - 1)).remove();
      pnum -= 1;
  } else if (event.key == "Escape") {
    var elems = document.querySelectorAll(".pixel")
    Object.keys(elems).forEach(function (k) {
      elems[k].style.opacity = "1"
    })
    currentPixel = false;
canvas.onclick = null
  }
});

function save() {
  var name = prompt("Name:")
  if (name) {
    if (localStorage.getItem(name)) {
      var con1 = confirm("There is an already existing drawing with the same name. Would you like to overwrite it?")
      if (con1) {
        localStorage.setItem(name,getSessionJSON())
      }
    } else {
      localStorage.setItem(name,getSessionJSON())
    }
  }
}

if (sessionStorage.getItem("session")) {
  var sjson = JSON.parse(sessionStorage.getItem("session"))
  canvas.innerHTML = sjson.content
  pxsize = sjson.pxsize
  pnum = sjson.pnum
  canvas.style.aspectRatio = sjson.aspect.replace(":"," / ")
  canvas.style.background = sjson.back
  var elems = document.querySelectorAll(".pixel")
    Object.keys(elems).forEach(function (k) {
      elems[k].onclick = function() {
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
    })
}

function getSessionJSON() {
  var vari = {}
  vari.pxsize = pxsize
  vari.pnum = pnum
  vari.content = canvas.innerHTML
  vari.back = canvas.style.background
  vari.aspect = aspect
  return JSON.stringify(vari)
}
