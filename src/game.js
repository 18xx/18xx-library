import rule1_1 from './rule_1.1';
import rule1_2 from './rule_1.2';
import rule1_3 from './rule_1.3';
import rule1_4 from './rule_1.4';
import rule2_1 from './rule_2.1';
import rule2_2 from './rule_2.2';
import rule2_3 from './rule_2.3';
import rule2_4 from './rule_2.4';

class Game {
  constructor({
    defaultTo,
    location,
    name,
    notes,
  }) {
    this.defaultTo = defaultTo;
    this.location = location;
    this.name = name;
    this.notes = notes;
  }

  missingRules() {
    return Object.entries(this.rules()).filter(
      entry => entry[1] === undefined,
    );
  }

  rules() {
    return {
      '1.1': this.lookup(rule1_1),
      '1.2': this.lookup(rule1_2),
      '1.3': this.lookup(rule1_3),
      '1.4': this.lookup(rule1_4),
      '2.1': this.lookup(rule2_1),
      '2.2': this.lookup(rule2_2),
      '2.3': this.lookup(rule2_3),
      '2.4': this.lookup(rule2_4),
    };
  }

  lookup(rule) {
    let result;
    if (rule[this.name]) {
      result = rule[this.name];
    } else if (this.defaultTo) {
      result = this.defaultTo.lookup(rule);
    } else {
      result = rule.default;
    }
    return result;
  }
}

export default Game;
