fill('rainy')
time = 2000

function tap() {
  animal = random('pig3','dog7','akitainu','alligator','alpaca','anemone',
                  'animalcracker')
  pet = stamp(animal,x,y,100)
  pet.rotate(RIGHT,360,time)
  pet.move(x,1000,time)

 
 
}