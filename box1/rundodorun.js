fill('jungle')
mill = stamp('windmill',700,780,120)
dodo = stamp('dodo2',200,800,150)
speed = 10

function loop() {
  mill.move(LEFT,speed)
  mill.wrap()
  if (dodo.hits(mill)) {
    dodo.change('dodo3')
  }
}

function tap() {
  dodo.move(UP,400)
  dodo.move(200,800,2000)
  speed = speed+1
}