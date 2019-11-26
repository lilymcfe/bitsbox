fill('parking lot')
size=100
speed=150
sound('car11') 
c = stamp('car11',size)
function drag() {
  c.move(x,y,speed)
  c.aim(x,y)}
