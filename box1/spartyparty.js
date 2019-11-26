image = stamp('@sparty',390,475,1100)
stamp('icon reflection',390,475,1100)
txt = text('Sparty Basketball!',200,212,'black')
page = 1
sound('achievement')
      
   
function tap() {
  page = page+1
  if (page == 2) {
    image.change('@izzo')
    image.move(390,490)
	txt.change('Lead by a Mighty Midget Coach!')
    txt.move(100,212)
  }
  else if (page == 3) {
    image.change('@joshlangford')
    txt.change('A star...')
  }
  else if (page == 4) {
    image.change('@langfordinj')
    txt.change('Injured!')
  }
  else if (page == 5) {
    image.change('@cassiuswinston')
    image.move(390,550)
    txt.change('All Conference - Cassius Winston, PG')
    txt.move(80,50)
  }
  else if (page == 6) {
    image.change('@aaronhenry')
    image.move(390,500)
    txt.change('Aaron Henry, SG')
  }
  else if (page == 7) {
    image.change('@fosterloyer')
    txt.change('Foster Loyer, SG')
  }
  else if (page == 8) {
    image.change('@kyleahrens')
    txt.change('Kyle Ahrens, G')
  }
  else if (page == 9) {
    image.change('@xaviertillman')
    txt.change('Xavier Tillman, PF')
  }
  else if (page == 10) {
    image.change('@sparty')
    txt.change('New Faces')
  }
  else if (page == 11) {
    image.change('@juliusmarble')
    txt.change('Julius Marble')
  }
  else if (page == 12) {
    image.change('@malikhall')
    txt.change('Malik Hall')
  }
  else if (page == 13) {
    image.change('@rocketwatts')
    txt.change('Rocket Watts')
  }
  else if (page == 14) {
    image.change('@sparty')
    image.move(400,500)
    txt.change('Go  sparty')
  }
  else if (page == 15) {
    image.change('@c1')
    image.move(400,500)
    txt.change('Go cousins!!!!!!!!!')
  }
  else if (page == 16) {
    image.change('@c3')
    image.move(400,500)
    txt.change('Go cousins!!!!!!!!!')
  }
  else if (page == 17) {
    image.change('@c5')
    image.move(400,500)
    txt.change('Go cousins!!!!!!!!!')
  }
  else {
    image.change('@sparty',390,475)
    txt.change('Sparty Basketball!')
    page = 1
  }
}