// 3.4 - How is a share company's initial (par) price determined?

const noPar = "There are no par prices. The initial price is set by the player who purchases the President's certificate, choosing a value selected from a range of predefined prices. All further share dealing is done at the current market price.";
const fixedPar = 'Companies have fixed par prices.';
const notApplicable = 'Not applicable.';

export default {
  '1812': noPar,
  '1826': noPar,
  '1834': noPar,
  '1846': noPar,
  '1849': noPar,
  '1851': noPar,
  '1861': noPar,
  '1867': noPar,
  '1873': noPar,
  '1895': noPar,
  '1898': noPar,
  '18Ardennes': noPar,
  '18EU': noPar,
  '18GB': noPar,
  '18GL': noPar,
  '18SS': noPar,
  '18VA': noPar,
  'Rolling Stock': noPar,
  'Steam Over Holland': noPar,
  '1817': "The President's certificates are auctioned. The initial share price is the final auction bid divided by two, rounded down to the nearest stock price.",
  '1825': "Major companies have fixed par prices. For minor companies the price is set by the player who purchases the Presdient's certificate, using any value on the stock market no lower than one tenth the price of the company's built-in train.",
  '1829': fixedPar,
  '1829 Mainline': fixedPar,
  '1835': fixedPar,
  '1842': fixedPar,
  '1847': fixedPar,
  '1847AE': fixedPar,
  '1853': fixedPar,
  '1869 USA West': fixedPar,
  '1881': fixedPar,
  '18Africa': fixedPar,
  '1827Jr': 'Unknown', // TODO
  'Crisis': 'Unknown', // TODO
  '1830 Cardgame': notApplicable,
  '1830BC': notApplicable,
  '1837': "The three National Railways have fixed par prices. For the seven major companies the initial price is set by the player who purchases the Director's certificate, choosing a value selected from a range of predefined prices.",
  '1841': "There are no par prices. The initial price is set by the player who purchases the President's certificate, choosing a value selected from a range of predefined prices. All further share dealing is done at the current market price. The exception to this is companies created by a merger or promotion (or the Ferdinandea Succession). These have their initial price calculated from the prices of the predecessor companies.",
  '1848': "The CAR always has an initial price of 100. for all other companies the price is set by the player who purchases the President's certificate, choosing a value selected from a range of predefined prices.",
  '1856': "For most companies, the price is set by the player who purchases the President's certificate, choosing a value selected from a range of predefined prices. For the CGR, the price is calculated from the prices of the companies that form the CGR.",
  '1858': 'Prior to phase 5, by the face value of the private (rounded down); from phase 5 onwards the Director chooses one of a range of values.',
  '1862EA': "The price is set by the player who purchases the President's certificate, choosing a value selected from a range of predefined prices. For non-chartered companies, the par price is the highest price on the par chart that is equal to or lower than the initial share price.",
  '18EZ Level 1': 'Not Applicable (no share dealing).',
  '18EZ Level 2': 'Unknown', // TODO
  '18EZ Level 3': "For most companies, the price is set by the player who purchases the President's certificate, choosing a value selected from a range of predefined prices. For the Black Line, the price is fixed.",
  '18Ireland': "There are no par prices. For a 5-share company the initial price is set at the highest price from a predefined list that is not more than half the winning bid for the company. For a 10-share company the initial price is set by the player who purchases the Director's certificate, choosing a value selected from a list of predefined prices. For both types of company all further share dealing is done at the current market price.",
  '18USA': "The President's certificates are auctioned. The initial share price is the final auction bid divided by two, rounded down to the nearest stock price between 50 and 200.",
  '2038': 'The par values of "growth corporations" (minor companies that have been promoted to major companies) and the TSI and Asteroid League are fixed. For "growth companies" the par value is 67 but the starting market value is only 10. Those of other "public companies" are set by the player who purchases the President\'s certificate, choosing a value selected from a range of predefined prices.',
  'Poseidon': "The price is set by the player who purchases the nation's King card. It can be set to any value on the Prestige track.",
  'default': "The price is set by the player who purchases the President's certificate, choosing a value selected from a range of predefined prices.",
};
