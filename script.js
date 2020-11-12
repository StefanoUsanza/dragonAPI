const armor_class = document.getElementById("armor_class");
const armor1 = document.createElement("h1")

const hit_points = document.getElementById("hit_points");
const point1 = document.createElement("h1")

const speed = document.getElementById("speed");
const speed1 = document.createElement("h1")

function stats(b){
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
  })