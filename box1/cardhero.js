fill('sunglow')
age = text('8',0,850,800,'impact','white')
happy = text('Happy 8th',480,338,60,'impact','white')
happy = text('Birthday,',480,398,60,'impact','white')
maeve = text('Maeve!',480,458,60,'impact','white')
from = text('From',525,578,60,'impact','white')
lily = text('Lily',525,638,60,'impact','white')
top = stamp('banners',385,0,850)
middle = stamp('banners',385,70,1000)
bottom = stamp('banners',385,140,1150)
gift3 = stamp('gift3',120,900,400)
gift4 = stamp('gift4',700,900,400)
candle1 = stamp('candle2',392,420,200)
candle2 = stamp('candle2',352,420,200)
candle3 = stamp('candle2',432,420,200)
cake = stamp('cake3',385,775,600)
//cupcake = stamp('cupcake6',600,580,100)
sound
time = 2000

function tap() {
  cupcake = random('cupcake1','cupcake2','cupcake3','cupcake4',
                   'cupcake5','cupcake6','cupcake7','cupcake8',
                   'cupcake9','cupcake10','cupcake11','cupcake12',
                   'cupcake13','cupcake14','cupcake15','cupcake16',
                   'cupcake17','cupcake18','cupcake19','cupcake20',
                   'cupcake21','cupcake22','cupcake23','cupcake24')
  cc = stamp(cupcake,x,y,100)
  cc.rotate(RIGHT,360,time)
  cc.move(x,1000,time)
}
