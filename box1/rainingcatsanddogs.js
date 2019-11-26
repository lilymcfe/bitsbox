fill('rainy')
time = 2000

function tap() {
  animal = random('cat8','dog7')
  pet = stamp(animal,x,y,100)
  pet.rotate(RIGHT,360,time)
  pet.move(x,1000,time)
}