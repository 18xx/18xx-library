import games from './games';

test('there are 113 games', () => {
  expect(games.length).toBe(113);
});

test('each game has an appropriate entry for each rule', () => {
  games.forEach((game) => {
    expect(game.missingRules().length).toBe(0);
  });
});
