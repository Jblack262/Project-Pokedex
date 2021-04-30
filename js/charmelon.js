let charmeleon = {
    "abilities": [
      {
        "name": "blaze"
      },
      {
        "name": "solar-power"
      }
    ],
    "base_experience": 142,
    "height": 11,
    "id": 5,
    "is_default": true,
    "name": "charmeleon",
    "order": 6,
    "stats": [
      {
        "base_stat": 58,
        "effort": 0,
        "stat": {
          "name": "hp"
        }
      },
      {
        "base_stat": 64,
        "effort": 0,
        "stat": {
          "name": "attack"
        }
      },
      {
        "base_stat": 58,
        "effort": 0,
        "stat": {
          "name": "defense"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
        "stat": {
          "name": "special-attack"
        }
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": {
          "name": "special-defense"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
        "stat": {
          "name": "speed"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire"
        }
      }
    ],
    "weight": 190
  }
  let charmelon = document.getElementById('charmelon');

let nameElement = document.createElement("h1");//creates h1
let name = document.createTextNode(charmeleon.name);//creates name for h1
nameElement.appendChild(name);//puts name in h1
charmelon.appendChild(nameElement);//puts h1 in charmelon div

let abilitiesList = document.createElement("ul");
charmelon.appendChild(abilitiesList);

for (item in charmeleon) {
  let itemElem = document.createElement("p");
  let itemValue = document.createTextNode(item + ":");
  itemElem.appendChild(itemValue);
  
  charmelon.appendChild(itemElem);

  let itemUL = document.createElement("ul");
  itemUL.setAttribute('id',item)

  charmelon.appendChild(itemUL);
}

for (ability in charmeleon.abilities) {
  let abilityUL = document.querySelector('#abilities');
  let abilityElem = document.createElement("li");
  let abilityValue = document.createTextNode(charmeleon.abilities[ability].name);
  abilityElem.appendChild(abilityValue);
  abilityUL.appendChild(abilityElem);
}
for (stat in charmeleon.stats) {
  let abilityUL = document.querySelector('#stats');
  let abilityElem = document.createElement("li");
  let abilityValue = document.createTextNode(charmeleon.stats[stat].base_stat);
  abilityElem.appendChild(abilityValue);
  abilityUL.appendChild(abilityElem);
}
