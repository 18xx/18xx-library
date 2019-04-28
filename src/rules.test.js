import rule1_1 from './rule_1.1';
import rule1_2 from './rule_1.2';
import rule1_3 from './rule_1.3';
import rule1_4 from './rule_1.4';
import rule2_1 from './rule_2.1';
import rule2_2 from './rule_2.2';
import rule2_3 from './rule_2.3';
import rule2_4 from './rule_2.4';

import games from './games';

const gameNames = games.map(g => g.name).concat(['default']);

const complete = (rule) => {
  Object.keys(rule).forEach((name) => {
    expect(gameNames).toContain(name);
  });
};

test('rule 1.1 complete', () => {
  complete(rule1_1);
});

test('rule 1.2 complete', () => {
  complete(rule1_2);
});

test('rule 1.3 complete', () => {
  complete(rule1_3);
});

test('rule 1.4 complete', () => {
  complete(rule1_4);
});

test('rule 2.1 complete', () => {
  complete(rule2_1);
});

test('rule 2.2 complete', () => {
  complete(rule2_2);
});

test('rule 2.3 complete', () => {
  complete(rule2_3);
});

test('rule 2.4 complete', () => {
  complete(rule2_4);
});
