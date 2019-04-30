// 3.3 - Does a company get full capitalisation upon floating?

const yes = 'Yes.';
const incremental = 'Only for shares sold.';
const style1822 = 'Only for shares sold until phase 6, then fully capitalised when floated.';
const incrementalIssue = 'Only as shares are sold or are issued from the company treasury to the bank pool.';
const style1856 = 'Depends on the type of train currently for sale; and on reaching destination.';
const fullCapAfterFive = 'Only for shares sold until phase 5, then fully capitalised when floated.';
const fullFiveTen = 'A five-share company gets five times its starting value, while a ten-share company gets ten times its starting value.';

export default {
  '1761': yes,
  '1824': yes,
  '1827Jr': yes,
  '1829': yes,
  '1830': yes,
  '1832': yes,
  '1834': yes,
  '1842': yes,
  '1848': yes,
  '1850': yes,
  '1853': yes,
  '1857': yes,
  '1859': yes,
  '1860': yes,
  '1862': yes,
  '1868': yes,
  '1869 The Golden Spike': yes,
  '1869 USA West': yes,
  '1870': yes,
  '1873': yes,
  '1879': yes,
  '1881': yes,
  '1889': yes,
  '1893': yes,
  '18??': yes,
  '18C2C': yes,
  '18CLE': yes,
  '18Dixie': yes,
  '18EC': yes,
  '18EZ Level 2': yes,
  '18EZ Level 3': yes,
  '18GA': yes,
  '18Kaas': yes,
  '18Mex': yes,
  '18MS': yes,
  '18MW': yes,
  '18NK': yes,
  '18NL': yes,
  '18SS': yes,
  '18TN': yes,
  'Railroad Barons': yes,
  '1800': incremental,
  '1812': incremental,
  '1817': incremental,
  '1829 Mainline': incremental,
  '1830BC': incremental,
  '1835': incremental,
  '1837SX': incremental,
  '1838 Rheinland': incremental,
  '1841': incremental,
  '1847': incremental,
  '1847AE': incremental,
  '1849': incremental,
  '1851': incremental,
  '1858': incremental,
  '1861': incremental,
  '1865 Sardinia': incremental,
  '1867': incremental,
  '1895': incremental,
  '1898': incremental,
  '18Africa': incremental,
  '18Ardennes': incremental,
  '18BL': incremental,
  '18GL': incremental,
  '18Ireland': incremental,
  '18NW': incremental,
  '18OE': incremental,
  '18SA': incremental,
  '18USA': incremental,
  'Crisis': incremental,
  'Poseidon': incremental,
  '1822': style1822,
  '1822CA': style1822,
  '1825': "Nine-certificate companies do, four-certificate companies don't.",
  '1826': 'Only for shares sold until phase 10H, then fully capitalised when floated.',
  '1830 Cardgame': 'Not applicable (no company treasuries).',
  '1831': 'Only for shares sold. (Par increases upon floating.)',
  '1837': 'Unknown', // FIXME - Duplicate Answers on FWTWR
  '1844': 'Regional companies get full capitalisation on floating. Other companies get 50% on floating, the rest when they reach their destination. Companies that float after the sale of a 6/6H train are fully capitalised.',
  '1846': incrementalIssue,
  'Steam Over Holland': incrementalIssue,
  '1854': '100% capitalisation on floating, more on splitting.',
  '1856': style1856,
  '1891': style1856,
  '1862EA': 'For companies with a Parliamentary charter (Chartered Companies), 100%. For Non-chartered Companies, only for shares sold.',
  '1880': '50% capitalisation at the start of the game. Once the first 3 train is bought, companies with 5 or fewer shares in the bank receive the remaining 50% capitalisation.',
  '18CZ': 'Yes, but the amount recevied depends on the size of the company. Small = 4 x initial share price, Medium = 5 x, Large = 10 x.',
  '18EU': fullCapAfterFive,
  '18Rhl': fullCapAfterFive,
  '18Ruhr': fullCapAfterFive,
  '18EZ Level 1': 'Not Applicable (no share dealing).',
  '18FL': fullFiveTen,
  '18GB': fullFiveTen,
  '18GM': 'Depends on the type of train currently for sale.',
  '18Neb': 'No, it gets it share by share. Ten-share companies that begin in phase 5 receive their remaining capital after the fifth share is sold.',
  '18NY': 'Prior to the special Capitalisation Round, only for shares sold. After this round, fully capitalised when floated.',
  '18PA': 'Companies start as five-share companies and get five times their starting value. When converted to ten-share companies they get five times the current market value. The NYC is an exception to this and has its own special formation rules.',
  '18Scan': 'Only for shares sold in phases 2 to 4, full capitalisation from phase 5 on.',
  '18SY': `G rules: ${yes}, O rules: If a company is floated with 60% of the shares sold, full capitalisation. If it is floated with ferwer shares, only for shares sold, with the remaining funds withheld until all shares are bought from the bank.`,
  '18US': 'Yes, when initially floated. 4-share and 5-share companies gain additional capital later on.',
  '18VA': 'No, it gets it share by share until the sixth share of a ten-share company is sold, when it gets all the rest.',
  '18West': 'Granger Road companies are fully capitalised. Land Grant and public companies started prior to phase 6 are funded as shares are sold, and fully capitalised once phase 6 has begun.',
  '2038': "Yes, except for growth companies, which get capitalised for shares sold, i.e. excluding the President's double; and for the Asteroid League, which gets capitalisation for the President's double share, and for other shares as sold, but not for independents traded in.",
  'Rolling Stock': 'No, it gets capitalisation for all shares issued during launching, minus the face value of the private company used for launching, plus a cash controbution from the player.',
};
