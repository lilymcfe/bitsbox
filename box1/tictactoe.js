fill('tictactoe')
xkey1 = stamp('xkey')
xkey2 = stamp('xkey')
xkey3 = stamp('xkey')
xkey4 = stamp('xkey')
xkey5 = stamp('xkey')
xkey1.hide()
xkey2.hide()
xkey3.hide()
xkey4.hide()
xkey5.hide()
okey1 = stamp('okey')
okey2 = stamp('okey')
okey3 = stamp('okey')
okey4 = stamp('okey')
okey1.hide()
okey2.hide()
okey3.hide()
okey4.hide()

turn = text('Dad Turn',350,70)
win = "Lily"
turnnum = 1

function changeturn(turnnum) {
  if (turnnum == 1 || turnnum == 3 || turnnum == 5 || turnnum == 7 || turnnum == 9)
  {
    turn.change('Lily Turn')
    win = "Lily"
  }
  else if (turnnum == 2 || turnnum == 4 || turnnum == 6 || turnnum == 8)
  {
    turn.change('Dad Turn')
    win = "Dad"
  }
  return turnnum+=1
}

function drag() {
  winline = stamp('pizza',x,y,100)
  fill('unlocked')
  //sound('fireworks')
  turn.change(win + " WINS!!!!")
}

function tap() {
  if (turnnum == 1) {
    xkey1.move(x,y)
    xkey1.show()
    turnnum = changeturn(turnnum)
  }
  else if (turnnum == 2) {
    okey1.move(x,y)
    okey1.show()
    turnnum = changeturn(turnnum)
  }
  else if (turnnum == 3) {
    xkey2.move(x,y)
    xkey2.show()
	turnnum = changeturn(turnnum)
  }
  else if (turnnum == 4) {
    okey2.move(x,y)
    okey2.show()
	turnnum = changeturn(turnnum)
  }
  else if (turnnum == 5) {
    xkey3.move(x,y)
    xkey3.show()
	turnnum = changeturn(turnnum)
  }
  else if (turnnum == 6) {
    okey3.move(x,y)
    okey3.show()
	turnnum = changeturn(turnnum)
  }
  else if (turnnum == 7) {
    xkey4.move(x,y)
    xkey4.show()
	turnnum = changeturn(turnnum)
  }
  else if (turnnum == 8) {
    okey4.move(x,y)
    okey4.show()
	turnnum = changeturn(turnnum)
  }
  else if (turnnum == 9) {
    xkey5.move(x,y)
    xkey5.show()
	turnnum = changeturn(turnnum)
  }
  else {
    turn.change("CAT GAME!!!!!!")
  }
}
