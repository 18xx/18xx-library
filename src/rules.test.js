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

import library from './library';

const gameNames = library.all().map(g => g.name).concat(['default']);

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

test('rule 2.5 complete', () => {
  complete(rule2_5);
});

test('rule 2.6 complete', () => {
  complete(rule2_6);
});

test('rule 2.7 complete', () => {
  complete(rule2_7);
});

test('rule 2.8 complete', () => {
  complete(rule2_8);
});

test('rule 2.9 complete', () => {
  complete(rule2_9);
});

test('rule 2.10 complete', () => {
  complete(rule2_10);
});

test('rule 2.11 complete', () => {
  complete(rule2_11);
});

test('rule 3.1 complete', () => {
  complete(rule3_1);
});

test('rule 3.2 complete', () => {
  complete(rule3_2);
});

test('rule 3.3 complete', () => {
  complete(rule3_3);
});

test('rule 3.4 complete', () => {
  complete(rule3_4);
});
