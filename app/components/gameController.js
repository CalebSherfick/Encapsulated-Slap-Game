import GameService from "./gameService.js";


let _gameService = new GameService()

function draw() {
  let target = `
  <div class="card">
      <h2>${target.name}</h2>
      <h4>Health: ${target.health}</h4>
      </div>
  `
  document.getElementById('name').innerHTML = target

  //MODIFY TEMPLATE STRING TO WHATEVER I WANT AND THEN SET IT TO INNERHTML OF AN ELEMENT ON THE DOM
}

//ANY OTHER PRIVATE FUNCTIONS I MAY WANT

//PUBLIC
export default class GameController {
  constructor() { }

  addItemToTarget(itemIndex) {
    _gameService.addItemToTarget(itemIndex)
  }

  attackTarget(attackName) {
    _gameService.attackTarget(attackName)
    draw()
  }

  //ANY OTHER PUBLIC METHODS I MAY WANT
}