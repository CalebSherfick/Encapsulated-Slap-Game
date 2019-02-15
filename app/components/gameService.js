import Target from "../models/target.js";
import Item from "../models/item.js";




let _target = new Target("Tom", 100, 1, 5, 10);
let glove = new Item("Glove", 2);
let knuckles = new Item('Brass Knuckles', 3);
let boots = new Item('Steeltoed Boots', 5)

let _items = [glove, knuckles, boots]



//PUBLIC
export default class GameService {
  constructor() { }

  get Target() {
    return {
      name: _target.name,
      health: _target.health,
      attacks: _target.attacks,
      items: _target.items,
      hits: _target.hits,
    }
  }

  addItemToTarget(itemIndex) {
    //WRITE LOGIC TO CHECK IF ITEM IS ALREADY IN TARGETS ITEMS BEFORE IT IS ADDED AGAIN
    let targetItem = _items[itemIndex]
    _target.items.push(targetItem)
  }

  attackTarget(attackName) {
    //WRITE LOGIC TO ACCOUNT FOR ITEMS TARGET MAY HAVE
    //WRITE LOGIC TO CHECK WHETHER THE TARGET IS DEAD OR ALIVE
    let attackDamage = _target.attacks[attackName]
    _target.health -= attackDamage
    _target.hits++
  }

  //OTHER METHODS I WANT ON THE SERVICE
}