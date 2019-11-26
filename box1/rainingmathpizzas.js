fill('rainy2')
time = 4000

function tap() {
  num1 = random(0,1,2,3,4,5,6,7,8,9)
  num2 = random(0,1,2,3,4,5,6,7,8,9)
  solve = num1 + num2
  ptext = text(num1 + ' + ' + num2 + " = " + solve)
  ptext.move(x,1500,time)
  pizza = random('pizza','pizza2','pizza3','pizza4','pizza5')
  pstamp = stamp(pizza,x,y,100)
  pstamp.rotate(RIGHT,360,time)
  pstamp.move(x,1500,time)
}
