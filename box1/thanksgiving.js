fill('thanksgiving')
//sound('canon')
delay(playgame,3000)

knife = stamp('knife',575,900,120)
turkey = stamp('turkey5',100,930,150)
oldman = stamp('oldman',650,930,150)
pumpkin = stamp('pumpkin',100,930,150)
knife.hide()
turkey.hide()
oldman.hide()
pumpkin.hide()
speed = 5
doloop = 0
dopumpkin = 0

function playgame() {
  knife.show()
  turkey.show()
  oldman.show()
  fill('fallforest')
  doloop = 1
  //loop()
}

function loop() {
  if (doloop==1) {
    knife.move(LEFT,speed)
    knife.wrap()
    if (turkey.hits(knife)) {
      dead()
    }
    if (dopumpkin==1) {
      pumpkin.move(pumpkin.x+speed,pumpkin.y+speed)
      pumpkin.wrap()
      oldman.wrap()
      if (pumpkin.hits(oldman)) {
        oldmandead()
      }
      //if (pumpkin.x
    }
  }
}

function oldmandead() {
  pumpkin.hide()
  oldman.burn()
}

function dead() {
  turkey.change('turkey')
  knife.hide()
}

function tap() {
  turkey.move(UP,400)
  turkey.move(200,800,2000)
  
  if (x>=600 && y>=830 && dopumpkin==0) {
    pumpkin.move(turkey.x+20,turkey.y+20)
    pumpkin.show()
    dopumpkin=1
  }
}