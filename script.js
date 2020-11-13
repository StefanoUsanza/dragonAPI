function info(b){
  const name = document.getElementById("name")
  const name1 = document.createElement("h1")

  const info = document.getElementById("info")
  const info3 = document.createElement("h3")

  name1.innerHTML=b.name
  name.appendChild(name1)

  info3.innerHTML=b.size + ' ' + b.type + ' - ' + b.alignment
  info.appendChild(info3)
}

function stats(b){

  const str= document.getElementById("str")
  const str2= document.createElement("h2")

  const dex= document.getElementById("dex")
  const dex2= document.createElement("h2")

  const cos= document.getElementById("cos")
  const cos2= document.createElement("h2")

  const int= document.getElementById("int")
  const int2= document.createElement("h2")

  const wis= document.getElementById("wis")
  const wis2= document.createElement("h2")

  const cha= document.getElementById("cha")
  const cha2= document.createElement("h2")

  str2.innerHTML="<h2 style='text-align: center; color: white;'>" + b.strength + "</h2>"
  str.appendChild(str2)

  dex2.innerHTML="<h2 style='text-align: center; color: white;'>" + b.dexterity + "</h2>"
  dex.appendChild(dex2)

  cos2.innerHTML="<h2 style='text-align: center; color: white;'>" + b.constitution + "</h2>"
  cos.appendChild(cos2)

  int2.innerHTML="<h2 style='text-align: center; color: white;'>" + b.intelligence + "</h2>"
  int.appendChild(int2)

  wis2.innerHTML="<h2 style='text-align: center; color: white;'>" + b.wisdom + "</h2>"
  wis.appendChild(wis2)

  cha2.innerHTML="<h2 style='text-align: center; color: white;'>" + b.charisma + "</h2>"
  cha.appendChild(cha2)

}

function stat(b){

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
  console.log(b.strength)
  info(b)//nome e informazioni del mostro
  stat(b)//classe armatura vita velocità
  stats(b)//statistiche
  })