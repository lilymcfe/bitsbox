fill('Birthday5')
action = random(5)
c = circle(384,350,300,'lavender')
c.dance()
b = box(100,700,568,250,'Orange red')
b.dance()
s = stamp('gift2',384,350,500)
s.dance()

if (action == 0) {
  s.tap = splash
}
else if (action == 1) {
  s.tap = pow
}
else if (action == 2) {
  s.tap = pop
}
else if (action == 3) {
  s.tap = burn
}
else {
  s.tap = explode
}
t = text('HAPPY BIRTHDAY',140,825,70,'impact','white')
t.dance()
t = text('Mom! From Lily!',125,905,70,'impact','white')
t.dance()
song('great parade')