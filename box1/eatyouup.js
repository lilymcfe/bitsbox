fill('savannah')
l=stamp('lion2',200,800,300)
g=stamp('giraffe3',550,700,500)
function step1() {
  sound('roar')
  y = text('yum',200,500,100)
}
y = delay(step1,1000)

function step2() {
  sound('scream')
  g.move(1000,700,500)
}
delay(step2,2000)

function step3() {
  sound('roar')
  l.move(1000,700,500)
}
delay(step3,3000)

function step4() {
  sound('yowl')
  l.move(200,800,300)
  m=stamp('meat',550,700,500)
  return m
}
m = delay(step4,4000)

function step5() {
  sound('yum')
  m.explode()
}
delay(step5,5000)

function step6() {
  sound('kids')
  y.hide()
}
delay(step6,12000)