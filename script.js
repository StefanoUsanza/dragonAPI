function info(b){
  const name = document.getElementById("name")
  const name1 = document.createElement("h1")

  const info = document.getElementById("info")
  const info1 = document.createElement("h3")

  name1.innerHTML=b.name
  name.appendChild(name1)

  info1.innerHTML=b.size + ' ' + b.type + ' - ' + b.alignment
  info.appendChild(info1)
}

function stats(b){

const armor_class = document.getElementById("armor_class")
const armor1 = document.createElement("h1")

const hit_points = document.getElementById("hit_points")
const point1 = document.createElement("h1")

const speed = document.getElementById("speed")
const speed1 = document.createElement("h1")
  //il punto serve per avere le immagini alla stessa altezza, lo rendo dello stesso colore dello sfondo
  armor1.innerHTML=b.armor_class + "<br><p style='color: DarkSlateGray;'>.</p>"
  armor_class.appendChild(armor1)

  point1.innerHTML=b.hit_points + "<br><p style='color: DarkSlateGray;'>.</p>"
  hit_points.appendChild(point1)

  speed1.innerHTML=b.speed.walk
  speed.appendChild(speed1)
}

fetch("https://www.dnd5eapi.co/api/monsters/adult-blue-dragon").then(r => r.json())
.then(b => {
  console.log(b)
  stats(b)
  info(b)
  })