let charizard = {
    "abilities": [
      {
        "name": "blaze"
      },
      {
        "name": "solar-power"
      }
    ],
    "base_experience": 240,
    "height": 17,
    "id": 6,
    "is_default": true,
    "name": "charizard",
    "order": 7,
    "stats": [
      {
        "base_stat": 78,
        "effort": 0,
        "stat": {
          "name": "hp"
        }
      },
      {
        "base_stat": 84,
        "effort": 0,
        "stat": {
          "name": "attack"
        }
      },
      {
        "base_stat": 78,
        "effort": 0,
        "stat": {
          "name": "defense"
        }
      },
      {
        "base_stat": 109,
        "effort": 3,
        "stat": {
          "name": "special-attack"
        }
      },
      {
        "base_stat": 85,
        "effort": 0,
        "stat": {
          "name": "special-defense"
        }
      },
      {
        "base_stat": 100,
        "effort": 0,
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
      },
      {
        "slot": 2,
        "type": {
          "name": "flying"
        }
      }
    ],
    "weight": 905
  }

let charizrd = document.getElementById('charizrd');

let nameElement = document.createElement("h1");//creates h1
let name = document.createTextNode(charizard.name);//creates name for h1
nameElement.appendChild(name);//puts name in h1
charizrd.appendChild(nameElement);//puts h1 in charizrd div

let abilitiesList = document.createElement("ul");
charizrd.appendChild(abilitiesList);

for (item in charizard) {
  let itemElem = document.createElement("p");
  let itemValue = document.createTextNode(item + ":");
  itemElem.appendChild(itemValue);
  
  charizrd.appendChild(itemElem);

  let itemUL = document.createElement("ul");
  itemUL.setAttribute('id',item)

  charizrd.appendChild(itemUL);
}

for (ability in charizard.abilities) {
  let abilityUL = document.querySelector('#abilities');
  let abilityElem = document.createElement("li");
  let abilityValue = document.createTextNode(charizard.abilities[ability].name);
  abilityElem.appendChild(abilityValue);
  abilityUL.appendChild(abilityElem);
}
for (stat in charizard.stats) {
  let abilityUL = document.querySelector('#stats');
  let abilityElem = document.createElement("li");
  let abilityValue = document.createTextNode(charizard.stats[stat].base_stat);
  abilityElem.appendChild(abilityValue);
  abilityUL.appendChild(abilityElem);
}