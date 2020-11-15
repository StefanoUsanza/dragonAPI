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

//creo gli elementi fuori dalla funzione per sovrascriverli e non crearne di nuovi ad ogni chiamata
const proficiencies = document.getElementById("proficiencies")
let proficiencies1 = document.createElement("h4")

const cond = document.getElementById("cond")
let cond1 = document.createElement("h4")

const dm_im = document.getElementById("dm_im")
let dm_im1 = document.createElement("h4")

const dm_re = document.getElementById("dm_re")
let dm_re1 = document.createElement("h4")

const dm_vu = document.getElementById("dm_vu")
let dm_vu1 = document.createElement("h4")

const senses = document.getElementById("senses")
let senses1 = document.createElement("h4")

const languages = document.getElementById("languages")
let languages1 = document.createElement("h4")

const xp = document.getElementById("xp")
let xp1 = document.createElement("h4")

function ability(b){
//resetto i campi per le nuove informazini
  let lista=""
  proficiencies1.innerHTML = lista
  proficiencies.appendChild(proficiencies1)

  cond1.innerHTML = lista
  cond.appendChild(cond1)
  
  dm_im1.innerHTML = lista
  dm_im.appendChild(dm_im1)

  dm_vu1.innerHTML = lista
  dm_vu.appendChild(dm_vu1)

  dm_re1.innerHTML = lista
  dm_re.appendChild(dm_re1)

  senses1.innerHTML = lista
  senses.appendChild(senses1)

  languages1.innerHTML = lista
  languages.appendChild(languages1)

  xp1.innerHTML=lista
  xp.appendChild(xp1)

  //proficiencies
  if(b.proficiencies!=""){
  lista ="<h4 style='color: white;'>" + b.proficiencies[0].proficiency.name + ' (' + b.proficiencies[0].value + ')'
  for(let i=1; i<b.proficiencies.length; i++){
    lista +="<br>" +b.proficiencies[i].proficiency.name + ' (' + b.proficiencies[i].value + ')'
  }
  lista += "</h4>"
  proficiencies1.innerHTML = lista
    proficiencies.appendChild(proficiencies1)

lista=""
  }
//condition_immunities
if(b.condition_immunities!=""){
lista = "<h4 style='color: white;'>" + b.condition_immunities[0].name
for(let i=1; i<b.condition_immunities.length; i++){
  lista += "<br>" + b.condition_immunities[i].name 
}
lista += "</h4>"
cond1.innerHTML = lista
cond.appendChild(cond1)
lista =""
  }

 //damage_immunities 
if(b.damage_immunities!=""){
    lista = "<h4 style='color: white;'>" + b.damage_immunities[0]
for(let i=1; i<b.damage_immunities.length; i++){
  lista += "<br>" + b.damage_immunities[i]
}
lista += "</h4>"
dm_im1.innerHTML = lista
dm_im.appendChild(dm_im1)
lista =""
  }

//damage_vulnerabilities
  if(b.damage_vulnerabilities!=""){
    lista = "<h4 style='color: white;'>" + b.damage_vulnerabilities[0]
for(let i=1; i<b.damage_vulnerabilities.length; i++){
  lista += "<br>" + b.damage_vulnerabilities[i]
}
lista += "</h4>"
dm_vu1.innerHTML = lista
dm_vu.appendChild(dm_vu1)
lista =""
  }

  //damage_resistances
  if(b.damage_resistances!=""){
    lista = "<h4 style='color: white;'>" + b.damage_resistances[0]
for(let i=1; i<b.damage_resistances.length; i++){
  lista += "<br>" + b.damage_resistances[i]
}
lista += "</h4>"
dm_re1.innerHTML = lista
dm_re.appendChild(dm_re1)
lista =""
  }

  //senses
  if(b.senses!=""){
    console.log(b.senses)
    lista = "<h4 style='color: white;'> passive perception: " + b.senses.passive_perception
    if(b.senses.darkvision!=null)
    lista +="<br> darkvision: " + b.senses.darkvision
    if(b.senses.blindsight!=null)
    lista +="<br> blindsight: " + b.senses.blindsight

lista += "</h4>"
senses1.innerHTML = lista
senses.appendChild(senses1)
lista =""
  }

  //languages
    if(b.languages!=""){
      lista = "<h4 style='color: white;'>" + b.languages +"</h4>"
  languages1.innerHTML = lista
  languages.appendChild(languages1)
  lista =""
    }

    //xp
    lista = "<h4 style='color: white;'>" + b.challenge_rating + "(" + b.xp + ")</h4>"
    xp1.innerHTML=lista
    xp.appendChild(xp1)

}



fetch("https://www.dnd5eapi.co/api/monsters").then(r => r.json())
.then(b => { 
  search(b)//inserisci elementi nella barra di ricerca
  })
    
    fetch("https://www.dnd5eapi.co/api/monsters/adult-copper-dragon").then(r => r.json())
    .then(b => { 
      infos(b)//nome e informazioni del mostro
      stat(b)//classe armatura vita velocità
      stats(b)//statistiche
      ability(b)//abilità

      const btnSearch = document.getElementById("search")
      btnSearch.onclick  = () => {
        console.log("ready")
        const input = document.getElementById("input").value
        if(input==""){
          console.log("ma anche no")
        }
        else{
          fetch("https://www.dnd5eapi.co/api/monsters/" + input).then(r => r.json())
          .then(b => {
            infos(b)//nome e informazioni del mostro
            stat(b)//classe armatura vita velocità
            stats(b)//statistiche
            ability(b)//abilità
          })
        }
      }

    })
      
