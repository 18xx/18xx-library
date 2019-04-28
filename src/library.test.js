import library from './library';

test('there are 113 games', () => {
  expect(library.all().length).toBe(113);
});

test('each game has an appropriate entry for each rule', () => {
  library.all().forEach((game) => {
    expect(game.missingRules().length).toBe(0);
  });
});
