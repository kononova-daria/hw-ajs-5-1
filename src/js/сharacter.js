export default class Character {
  constructor(character, type) {
    if (character.length < 2 || character.length > 10) {
      throw new Error('Недопустимая длина имени');
    } else if (['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type) === false) {
      throw new Error('Тип указан неправильно');
    } else {
      this.name = character;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = null;
      this.defence = null;
    }
  }
}
