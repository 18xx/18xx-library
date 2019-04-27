// 1.3 - Can you sell company shares in the first round?

const onlyOnceOperated = "No: a company's shares may only be sold once it has operated.";
const yes = 'Yes.';
const onlyPresident = 'Only its President may do so.';
const halfPrice = 'Yes, for half the current market price.';
const notApplicable = 'Not applicable.';

export default {
  '1812': onlyOnceOperated,
  '1817': onlyOnceOperated,
  '1822': onlyOnceOperated,
  '1822CA': onlyOnceOperated,
  '1824': onlyOnceOperated,
  '1826': onlyOnceOperated,
  '1830BC': yes,
  '1831': yes,
  '1837SX': onlyOnceOperated,
  '1841': onlyOnceOperated,
  '1846': onlyPresident,
  '1849': onlyOnceOperated,
  '1851': onlyOnceOperated,
  '1853': 'No; except for the shares you received with your initial bid, which may be sold for £5 less than you paid for them.',
  '1860': halfPrice,
  '1861': onlyOnceOperated,
  '1862EA': 'Yes, but only those shares obtained during the two Parliamentary rounds that precede the first share dealing round.',
  '1865 Sardinia': onlyOnceOperated,
  '1867': onlyOnceOperated,
  '1898': onlyOnceOperated,
  '18CLE': yes,
  '18EU': notApplicable,
  '18EZ Level 1': notApplicable,
  '18FL': onlyOnceOperated,
  '18GB': halfPrice,
  '18GL': onlyOnceOperated,
  '18Ireland': 'No. Note that this applies to the first regular stock round of the game, which takes place after the initial stock round.',
  '18NW': onlyOnceOperated,
  '18Neb': onlyOnceOperated,
  '18OE': 'No. Shares in a regional company may never be sold; other shares may not be sold during Train Phase 1.',
  '18PA': onlyOnceOperated,
  '18VA': onlyOnceOperated,
  '18West': 'Only for the UP.',
  '2038': onlyPresident,
  'Crisis': yes,
  'Poseidon': yes,
  'Railroad Barons': yes,
  'Rolling Stock': 'No. Public companies do not exist in the first round.',
  'Steam Over Holland': onlyOnceOperated,
  'default': 'No.',
};
