fill('ocean')
time=4000
dstamp = stamp('dolphin',100)
dstamp.hide()
  
function drag() {
  name = random('cube','cube2','cube3','cube4','cube5',
                'cube6','cube7','cube8','cube9')
  ink=stamp(name,x,y,98)
  tapaction = random(3)
  if (tapaction == 1) {
   ink.tap=burn
  } else if (tapaction == 2) {
   ink.tap=splash
  } else {
   ink.tap=pop
  }
}

function tap() {
  //dol = random('pizza','pizza2','pizza3','pizza4','pizza5')
  dstamp.move(x,y)
  dstamp.show()
  dstamp.rotate(RIGHT,360,time)
  dstamp.move(x,800,time) 
  dstamp.tap=pop
}
