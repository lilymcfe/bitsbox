fill('rainy')
time = 4000
function rain() {
  for (i=0;i<200;i++) {
	  animal = random('truck','truck2','truck3','truck4','truck5','truck6',
                  'truck7','truck8','truck9','truck10','truck11',
                  'truck12','truck13','truck14','dumptruck',
                  'dumptruck2','dumptruck3','dumptruck4',
                  'firetruck','firetruck2','icecreamtruck',
                  'monstertruck','monstertruck2','trucklogging',
                  'allosaurus','ankylosaurus','brachiosaurus',
                  'archeopteryx','coelophysis','cryolophosaurus',
                  'dino','dino2','dino3','dino4','dino5','dino6','dino7',
                  'dino8','dino9','dino10','dino11','dino12','dino13',
                  'dino14','dino15','dino16','dino17','dino18','dino19',
                  'dino20','dino21','dinosaur','dinosaur2','dinosaur3',
                  'dinosaur4','dinosaur5','diplodocus','dorygnathus',
                  'eudimorphodon','maiasaura','spinorsaurus','stegosaurus',
                  'talaurus','trex2','trex3','triceratops','velociraptor',
                  'velociraptor2'
                 )
	  pet = stamp(animal,30*i+i,200,200)
	  pet.rotate(RIGHT,360,time)
	  pet.move(30*i+i,1000,time)
  }
}
function tap() {
  rain()
}