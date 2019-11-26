fill('halloween')
function drawText() {
  text('Happy Halloween Grandpa & Grandma!',0,50,40,'impact','white')
  s = stamp('@bengstons',375,350,750)
  s.tap = burn
}

delay(drawText,1000)
sound('wolf')