var lerp = require('lerp')
var loop = require('raf-loop')
var kelvinToRGB = require('./')
var colorStyle = require('color-style')
var commas = require('add-commas')

var text = document.querySelector('.temperature')
var start = 1500
var end = 40000
var time = -Math.PI / 2 // offset start value
loop(render).start()

function render (dt) {
  time += dt / 1000
  var anim = Math.sin(time) * 0.5 + 0.5
  var K = lerp(start, end, anim)
  var rgb = kelvinToRGB(K)
  text.textContent = commas(Math.floor(K)) + ' Kelvin'
  document.body.style.background = colorStyle(rgb)
}
