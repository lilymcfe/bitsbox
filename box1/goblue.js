image = stamp('@jump',400,450,1300)
txt = text('Go Blue Basketball!',200,232,'white')
page = 1

function tap() {
  page = page+1
  if (page == 2) {
    image.change('@jb')
	txt.change('Goodbye Coach B!')
  }
  else if (page == 3) {
    image.change('@juwan')
    txt.change('Hello Coach Howard!')
  }
  else if (page == 4) {
    image.change('@final4')
    txt.change('Final 4 Bound!')
  }
  else if (page == 5) {
    image.change('@brandon')
    txt.change('Brandon Johns, PF')
  }
  else if (page == 6) {
    image.change('@collin')
    txt.change('Collin Castleton, C')
  }
  else if (page == 7) {
    image.change('@eli')
    image.move(400,600)
    txt.change('Eli Brooks, SG')
  }
  else if (page == 8) {
    image.change('@franz')
    txt.change('Franz Wagner, SG')
  }
  else if (page == 9) {
    image.change('@livers')
    txt.change('Isiah Livers, SF')
  }
  else if (page == 10) {
    image.change('@teske')
    txt.change('John Teske, C')
  }
  else if (page == 11) {
    image.change('@z')
    txt.change('Z, PG')
  }
  else {
    image.change('@jump')
    image.move(400,450)
    txt.change('Go Blue Basketball!')
    page = 1
  }
}