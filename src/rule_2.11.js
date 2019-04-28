// 2.11 - What ends a share dealing round?

const standard = 'Each player consecutively not making a purchase or a sale. The priority then goes to the player after the one who last made a purchase or a sale.';
const priorityCashHeld = 'Each player consecutively passing. The priority, and subsequent places, are then assigned according to cash held.';
const consecutiveNonPurchase = 'Each player consecutively not making a purchase. The priority then goes to the player after the one who last made a purchase.';
const notApplicable = 'Not Applicable.';
const priorityFirstPass = 'Each player consecutively not making a purchase or a sale. Priority for the next stock round is determined by who passed first.';

export default {
  '1761': standard,
  '1800': standard,
  '1817': standard,
  '1824': standard,
  '1826': standard,
  '1830': standard,
  '1831': standard,
  '1832': standard,
  '1834': standard,
  '1837SX': standard,
  '1838 Rheinland': standard,
  '1841': standard,
  '1846': standard,
  '1847AE': standard,
  '1848': standard,
  '1849': standard,
  '1850': standard,
  '1851': standard,
  '1854': standard,
  '1856': standard,
  '1858': standard,
  '1859': standard,
  '1860': standard,
  '1861': standard,
  '1862': standard,
  '1862EA': standard,
  '1865 Sardinia': standard,
  '1867': standard,
  '1868': standard,
  '1869 The Golden Spike': standard,
  '1869 USA West': standard,
  '1870': standard,
  '1879': standard,
  '1880': standard,
  '1889': standard,
  '1891': standard,
  '1893': standard,
  '1895': standard,
  '1898': standard,
  '18??': standard,
  '18Ardennes': standard,
  '18BL': standard,
  '18C2C': standard,
  '18CLE': standard,
  '18Dixie': standard,
  '18EC': standard,
  '18EU': standard,
  '18EZ Level 2': standard,
  '18EZ Level 3': standard,
  '18FL': standard,
  '18GA': standard,
  '18GL': standard,
  '18GM': standard,
  '18Ireland': standard,
  '18Kaas': standard,
  '18Mex': standard,
  '18MS': standard,
  '18MW': standard,
  '18NK': standard,
  '18NL': standard,
  '18NW': standard,
  '18NY': standard,
  '18OE': standard,
  '18PA': standard,
  '18Rhl': standard,
  '18Ruhr': standard,
  '18SA': standard,
  '18Scan': standard,
  '18SS': standard,
  '18SY': standard,
  '18TN': standard,
  '18US': standard,
  '18USA': standard,
  '18VA': standard,
  '18West': standard,
  '2038': standard,
  'Railroad Barons': standard,
  '1812': priorityCashHeld,
  '1822': priorityCashHeld,
  '1822CA': priorityCashHeld,
  '1844': priorityCashHeld,
  '1857': priorityCashHeld,
  '1873': priorityCashHeld,
  '18CZ': priorityCashHeld,
  'Rolling Stock': priorityCashHeld,
  '1825': consecutiveNonPurchase,
  '1829': consecutiveNonPurchase,
  '1835': consecutiveNonPurchase,
  '1847': consecutiveNonPurchase,
  '1881': consecutiveNonPurchase,
  '18Africa': consecutiveNonPurchase,
  '1827Jr': 'Unknown. Your input is welcome', // TODO
  '1842': 'Unknown. Your input is welcome', // TODO
  '1829 Mainline': 'Each player consecutively not making a purchase. The round ends immediately if all share certificates are sold.',
  '1830 Cardgame': notApplicable,
  'Crisis': notApplicable,
  '1830BC': 'Each player consecutively not making a purchase or a sale. The priority then goes to the player who has bid highest for it, or remains with the same player if no bids.',
  '1837': "Round ends as in 1830, priority assigned as in 1829. The designer's intention was as in 1830.",
  '1853': 'Each player consecutively not making a purchase. The priority then goes to the player after the one who last made a purchase. The elephant that confers priority may be sold to another player.',
  '18EZ Level 1': 'Not Applicable (no share dealing).',
  '18GB': priorityFirstPass,
  '18Neb': priorityFirstPass,
  'Poseidon': 'Each player consecutively not making a purchase or a sale. The starting player card moves one player in clockwise order.',
  'Steam Over Holland': 'Each player consecutively not making a purchase or a sale. The priority then goes to the player to the left of the current priority holder. (Note - the first edition of the English rules say to the right; this was clarified on BoardGameGeek by the designer as incorrect and has been amended in the second edition of the rules.)',
};
