import rule1_1 from './rule_1.1';
import rule1_2 from './rule_1.2';
import rule1_3 from './rule_1.3';
import rule1_4 from './rule_1.4';
import rule2_1 from './rule_2.1';
import rule2_2 from './rule_2.2';
import rule2_3 from './rule_2.3';
import rule2_4 from './rule_2.4';
import rule2_5 from './rule_2.5';
import rule2_6 from './rule_2.6';
import rule2_7 from './rule_2.7';
import rule2_8 from './rule_2.8';
import rule2_9 from './rule_2.9';
import rule2_10 from './rule_2.10';
import rule2_11 from './rule_2.11';
import rule3_1 from './rule_3.1';
import rule3_2 from './rule_3.2';
import rule3_3 from './rule_3.3';
import rule3_4 from './rule_3.4';
import rule4_1 from './rule_4.1';
import rule4_2 from './rule_4.2';

const ruleText = (number) => {
  let result = `${number} - `;
  switch (number) {
    case '1.1':
      result += 'How much cash do players start with?';
      break;
    case '1.2':
      result += 'Does the price of a private company drop by 5 for no sale in the first round?';
      break;
    case '1.3':
      result += 'Can you sell company shares in the first round?';
      break;
    case '1.4':
      result += 'Can you make advance bids?';
      break;
    case '2.1':
      result += 'Is there a specific order to buying and selling on your turn?';
      break;
    case '2.2':
      result += 'Are you limited to buying one certificate on your turn?';
      break;
    case '2.3':
      result += 'When can you first sell shares in a company?';
      break;
    case '2.4':
      result += 'Does the bank pool have a per-company share limit?';
      break;
    case '2.5':
      result += 'What are the player certificate limits?';
      break;
    case '2.6':
      result += 'What are the player certificate limits for shares in one company?';
      break;
    case '2.7':
      result += 'Does the stock price drop when stock is sold?';
      break;
    case '2.8':
      result += 'Does the stock price go up at the end of the share dealing round for a fully-held corporation?';
      break;
    case '2.9':
      result += 'Can you buy a certificate and immediately sell a certificate in the same company?';
      break;
    case '2.10':
      result += 'Can companies buy shares?';
      break;
    case '2.11':
      result += 'What ends a share dealing round?';
      break;
    case '3.1':
      result += 'Do you lay the base station token immediately upon floating?';
      break;
    case '3.2':
      result += 'How many shares must be sold for a company to float?';
      break;
    case '3.3':
      result += 'Does a company get full capitalisation upon floating?';
      break;
    case '3.4':
      result += "How is a share company's initial (par) price determined?";
      break;
    case '4.1':
      result += 'In what order do companies operate?';
      break;
    case '4.2':
      result += 'If you sell shares so that their tokens end up in one stack, what order are they stacked in?';
      break;
    default:
  }
  return result;
};

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
    const result = {};
    result[ruleText('1.1')] = this.lookup(rule1_1);
    result[ruleText('1.2')] = this.lookup(rule1_2);
    result[ruleText('1.3')] = this.lookup(rule1_3);
    result[ruleText('1.4')] = this.lookup(rule1_4);
    result[ruleText('2.1')] = this.lookup(rule2_1);
    result[ruleText('2.2')] = this.lookup(rule2_2);
    result[ruleText('2.3')] = this.lookup(rule2_3);
    result[ruleText('2.4')] = this.lookup(rule2_4);
    result[ruleText('2.5')] = this.lookup(rule2_5);
    result[ruleText('2.6')] = this.lookup(rule2_6);
    result[ruleText('2.7')] = this.lookup(rule2_7);
    result[ruleText('2.8')] = this.lookup(rule2_8);
    result[ruleText('2.9')] = this.lookup(rule2_9);
    result[ruleText('2.10')] = this.lookup(rule2_10);
    result[ruleText('2.11')] = this.lookup(rule2_11);
    result[ruleText('3.1')] = this.lookup(rule3_1);
    result[ruleText('3.2')] = this.lookup(rule3_2);
    result[ruleText('3.3')] = this.lookup(rule3_3);
    result[ruleText('3.4')] = this.lookup(rule3_4);
    result[ruleText('4.1')] = this.lookup(rule4_1);
    result[ruleText('4.2')] = this.lookup(rule4_2);
    return result;
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
