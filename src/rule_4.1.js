// 4.1 - In what order do companies operate?

const dynamicDefinition = "By 'dynamic', this means that each time a company finishes operating, you look at the current stock price chart to see who is next. The highest value company that has not operated operates next. If two companies occupy the same space, the company with a token on top operates next. If two companies have the same value but are in different spaces, the company with a token furthest to the right operates next.";
const defaultOrder = `Current 'dynamic' share price. ${dynamicDefinition}`;

const style1822 = 'Private companies, then Minor companies in descending order of share price, then Public companies in descending order of share price. If two companies occupy the same space, the company with a token on top operates next.';
const setOrder = 'Set order.';
const style1830 = `${defaultOrder} However, note the special case of the three value '67' spaces one above the other in the same column. The rules resolve issues where more than one company is on the same priced space by giving preference to companies further to the right, which does not resolve this situation. It seems to be generally agreed that companies further up the chart run first.`;
const style1846 = `${defaultOrder} For the first operating round only, this is reversed, with the companies operating from lowest to highest price.`;
const style1861 = 'Private companies, then Minor companies in descending order of share price, then Public companies in descending order of share price, then the Russian State Railway. If two companies occupy the same space, the company with a token on top operates next. If two companies have the same value but are in different spaces, the company with a token furthest to the right operates next.';
const style18fl = 'The highest value company that has not operated operates next. If more than one company occupies the same space, the company with a token on top operates first.';

export default {
  '1812': style1822,
  '1822': style1822,
  '1822CA': style1822,
  '1824': `Mountain Railways, Coal Railways, pre-Staatsbahnen, then major companies in dynamic share price order (${dynamicDefinition})`,
  '1825': 'Major companies in set order of initial value with ties broken by formation order, followed by minor companies from highest par value to lowest with ties broken by formation order.',
  '1829': setOrder,
  '1829 Mainline': setOrder,
  '1853': setOrder,
  'Railroad Barons': setOrder,
  '1830': style1830,
  '18Kaas': style1830,
  '1830 Cardgame': 'Not applicable (no stock market).',
  '1830BC': 'Order of fewest shares in player hands; ties broken in set order.',
  '1846': style1846,
  '18Neb': style1846,
  '1850': `The rules simply state (4.1.2) that companies 'operate in share price order'. I have confirmed with John Tamplin that this works as current 'dynamic' share price. ${dynamicDefinition}`,
  '1858': 'Private companies in numerical order, then public companies in price order.',
  '1861': style1861,
  '1867': style1861,
  '1862': 'Current static price, i.e. in order of stock price as at the start of the operating round.',
  '1880': 'In the order of the turn order list, the positions in this list being chosen by the Director at the time the company becomes operational.',
  '1881': "Tramway companies in descending share price order (as in 'Rest' below), then the S-Bahn company.",
  '18CLE': `${defaultOrder} As a one-off exception, in the operating round after the SHR is floated, it will always operate first.`,
  '18EU': "Minor companies operate in numerical order, followed by major companies as stated under 'rest' below.",
  '18EZ Level 1': 'In seating order round the table.',
  '18FL': style18fl,
  '18US': style18fl,
  '18NY': 'Private companies, then Minor companies in descending order of share price, then Public companies in descending order of share price. If two companies have the same price, the company furthest to the rest, then with a token on top operates next.',
  '18OE': ' Regionals and Minors operate in the order their markers appear on the Regiona/Minor Operating Order track. Then National and Majors operate in share value order, from highest to lwest. If two or more companies have the same value, the marker further to the right operates first. If two or more companies occupy the same space, the company with a token on top operates first.',
  '18Ruhr': 'Private companies, then active PMCs in ascending numerical order, then Public companies in descending order of share price. If two companies occupy the same space, the company with a token on top operates next.',
  '18West': 'The highest value company that has not operated operates next. If more than one company occupies the same space, the  company with a token on top operates first. The v2.3 retuned rules clarify that all Granger Roads operate before all other companies regardless of current market value.',
  'Rolling Stock': "Current 'dynamic' share price. By 'dynamic', this means that each time a company finishes operating, you look at the current stock price chart to see who is next. The highest value company that has not operated operates next. Each share price can only be occupied by a single company, so no further ambiguity is possible.",
  'Steam Over Holland': 'In descending price order, with ties being resolved from left to right.',
  default: "Current 'dynamic' share price. By 'dynamic', this means that each time a company finishes operating, you look at the current stock price chart to see who is next. The highest value company that has not operated operates next. If two companies occupy the same space, the company with a token on top operates next. If two companies have the same value but are in different spaces, the company with a token furthest to the right operates next.",
};
