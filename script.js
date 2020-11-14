function search(b){
  const mon= document.getElementById("monsters")
  let mon1= document.createElement("option")

  for(let i=0; i<322; i++){
    mon1.innerHTML =b.results[i].index
    mon.appendChild(mon1)
    mon1= document.createElement("option")
  }

}
//creo gli elementi fuori dalla funzione per sovrascriverli e non crearne di nuovi ad ogni chiamata
const name = document.getElementById("name")
const name1 = document.createElement("h1")
const info = document.getElementById("info")
const info3 = document.createElement("h3")

function infos(b){
  name1.innerHTML=b.name
  name.appendChild(name1)

  info3.innerHTML=b.size + ' ' + b.type + ' - ' + b.alignment
  info.appendChild(info3)
}

//creo gli elementi fuori dalla funzione per sovrascriverli e non crearne di nuovi ad ogni chiamata
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

function stats(b){
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

//creo gli elementi fuori dalla funzione per sovrascriverli e non crearne di nuovi ad ogni chiamata
const armor_class = document.getElementById("armor_class")
const armor1 = document.createElement("h1")

const hit_points = document.getElementById("hit_points")
const point1 = document.createElement("h1")

const speed = document.getElementById("speed")
const speed1 = document.createElement("h1")

function stat(b){


  //il punto serve per avere le immagini alla stessa altezza, lo rendo dello stesso colore dello sfondo
  armor1.innerHTML=b.armor_class + "<br><p style='color: DarkSlateGray;'>.</p>"
  armor_class.appendChild(armor1)

  point1.innerHTML=b.hit_points + "<br><p style='color: DarkSlateGray;'>.</p>"
  hit_points.appendChild(point1)

  speed1.innerHTML=b.speed.walk
  speed.appendChild(speed1)
}

const proficiencies = document.getElementById("proficiencies")
let proficiencies1 = document.createElement("h4")

const skills = document.getElementById("skills")
const skills1 = document.createElement("h4")

const cond = document.getElementById("cond")
const cond1 = document.createElement("h4")

const dm_im = document.getElementById("dm_im")
const dm_im1 = document.createElement("h4")

const dm_re = document.getElementById("dm_re")
const dm_re1 = document.createElement("h4")

const dm_vu = document.getElementById("dm_vu")
const dm_vu1 = document.createElement("h4")

const senses = document.getElementById("senses")
const senses1 = document.createElement("h4")

const languages = document.getElementById("languages")
const languages1 = document.createElement("h4")

const xp = document.getElementById("xp")
const xp1 = document.createElement("h4")

function ability(b){
  for(let i=0; i<b.proficiencies.length; i++){
  proficiencies1.innerHTML ="<h4 style='color: white;'>" + b.proficiencies[i].proficiency.name + ' (' + b.proficiencies[i].value + ")</h4>"
  proficiencies.appendChild(proficiencies1)
  proficiencies1 = document.createElement("h4")
}

}

const btnSearch = document.getElementById("search")

fetch("https://www.dnd5eapi.co/api/monsters").then(r => r.json())
.then(b => { 
  search(b)//inserisci elementi nella barra di ricerca
  }).then(() =>{
    fetch("https://www.dnd5eapi.co/api/monsters/adult-copper-dragon").then(r => r.json())
    .then(b => { 
      infos(b)//nome e informazioni del mostro
      stat(b)//classe armatura vita velocità
      stats(b)//statistiche
      ability(b)//abilità
    }).then(() =>{
    btnSearch.onclick  = () => {
      const input = document.getElementById("input").value
      if(input==""){
        console.log("ma anche no")
      }
      else{
      fetch("https://www.dnd5eapi.co/api/monsters/" + input).then(r => r.json())
      .then(b => {
        console.log(b.proficiencies)
        infos(b)//nome e informazioni del mostro
        stat(b)//classe armatura vita velocità
        stats(b)//statistiche
        ability(b)//abilità
      })
    }
  }
  })
})
 