import Game from './game';

const game1822 = new Game({
  name: '1822',
  location: 'Great Britain',
});

const game1830 = new Game({
  name: '1830',
  location: 'Northeastern USA (v1: Avalon Hill version (1986), v2: Mayfair Games/Lookout Games version (2011), v3: Lookout Games version (2018)',
});

const game1835 = new Game({
  name: '1835',
  location: 'Germany',
});

const game18ga = new Game({
  name: '18GA',
  location: 'Georgia',
});

export default [
  new Game({
    name: '1761',
    location: 'England',
  }),
  new Game({
    name: '1800',
    location: 'Denver and Colorado',
  }),
  new Game({
    name: '1812',
    location: 'Northeast England',
  }),
  new Game({
    name: '1817',
    location: 'Northeast USA',
  }),
  game1822,
  new Game({
    name: '1822+',
    location: 'Great Britain',
    notes: 'Expansion for 1822',
    defaultTo: game1822,
  }),
  new Game({
    name: '1822CA',
    location: 'Canada',
    defaultTo: game1822,
  }),
  new Game({
    name: '1822MRS',
    location: 'England',
    notes: 'Medium Regional Scenario',
    defaultTo: game1822,
  }),
  new Game({
    name: '1824',
    location: 'Austria-Hungary',
  }),
  new Game({
    name: '1825',
    location: 'Unit 1, South Eastern England, Unit 2, The Midlands and Unit 3, Scotland and Northumbria',
  }),
  new Game({
    name: '1826',
    location: 'France',
  }),
  new Game({
    name: '1827Jr',
    location: 'USA - Beta version',
  }),
  new Game({
    name: '1829',
    location: 'Southern England; Northern England/Scotland. (Two games with the same rules)',
  }),
  new Game({
    name: '1829 Mainline',
    location: 'England',
  }),
  game1830,
  new Game({
    name: '1830 Cardgame',
  }),
  new Game({
    name: '1830BC',
    location: 'Mesopotamia',
  }),
  new Game({
    name: '1830Lummerland',
    location: "Lummerland is an island from the novel for children 'Jim Knopf and Lukas the engine driver' by Michael Ende",
    defaultTo: game1830,
  }),
  new Game({
    name: '1830NL',
    location: 'Netherlands',
    defaultTo: game1830,
  }),
  new Game({
    name: '1831',
    location: 'Eastern USA',
  }),
  new Game({
    name: '1832',
    location: 'The South (USA)',
  }),
  new Game({
    name: '1834',
    location: 'Belgium and Luxembourg',
  }),
  game1835,
  new Game({
    name: '1837',
    location: 'Austria-Hungary',
  }),
  new Game({
    name: '1837SX',
    location: 'Saxony',
  }),
  new Game({
    name: '1838 Rheinland',
    location: 'Rheinland',
    defaultTo: game1835,
  }),
  new Game({
    name: '1841',
    location: 'Northern Italy (originally issued as 1839)',
  }),
  new Game({
    name: '1842',
    location: 'Hamburg/Schleswig-Holstein',
  }),
  new Game({
    name: '1844',
    location: 'Switzerland',
  }),
  new Game({
    name: '1846',
    location: 'American Midwest.',
  }),
  new Game({
    name: '1847',
    location: 'Pfalz area of Germany',
    notes: 'I {KT} have two versions of 1847, both claiming to be version 10.1 - but the rules are not identical. One copy refers to the basic game and extension A. The other refers to the basic game and the expert game, and also variants 5 and 6, for different player counts. Entries are from this version, which was the most recent purchase.',
  }),
  new Game({
    name: '1847AE',
    location: 'Pfalz area of Germany',
    notes: '25th anniversary edition',
  }),
  new Game({
    name: '1848',
    location: 'Australia',
  }),
  new Game({
    name: '1849',
    location: 'Sicily',
    notes: '(originally issued as 1850) - Releases 1, 3.0 and 4.16',
  }),
  new Game({
    name: '1850',
    location: 'The Midwest',
  }),
  new Game({
    name: '1851',
    location: 'Tennessee & Kentucky',
  }),
  new Game({
    name: '1853',
    location: 'India',
  }),
  new Game({
    name: '1854',
    location: 'Austrian Republic',
  }),
  new Game({
    name: '1856',
    location: 'Ontario',
  }),
  new Game({
    name: '1857',
    location: 'Argentina',
  }),
  new Game({
    name: '1858',
    location: 'The Railways of Iberia',
  }),
  new Game({
    name: '1859',
    location: 'South Africa',
  }),
  new Game({
    name: '1860',
    location: 'Isle of Wight',
  }),
  new Game({
    name: '1861',
    location: 'Russia',
  }),
  new Game({
    name: '1862',
    location: 'North America',
  }),
  new Game({
    name: '1862EA',
    location: 'East Anglia - Railways of the Eastern Counties',
  }),
  new Game({
    name: '1865 Sardinia',
    location: 'Sardinia',
  }),
  new Game({
    name: '1867',
    location: 'Canada',
  }),
  new Game({
    name: '1868',
    location: 'Uruguay',
  }),
  new Game({
    name: '1869 The Golden Spike',
    location: 'Western USA',
  }),
  new Game({
    name: '1869 USA West',
    location: 'USA West',
  }),
  new Game({
    name: '1870',
    location: 'Mississippi Valley',
  }),
  new Game({
    name: '1873',
    location: 'Harz mountains in Germany',
  }),
  new Game({
    name: '1876v30',
    location: 'Trinidad',
    notes: 'version with 1830 rules base',
    defaultTo: game1830,
  }),
  new Game({
    name: '1876v35',
    location: 'Trinidad',
    notes: 'version with 1835 rules base',
    defaultTo: game1835,
  }),
  new Game({
    name: '1876v2',
    location: 'Trinidad',
    notes: 'unrelated to the original 1876',
    defaultTo: game1830,
  }),
  new Game({
    name: '1879',
    location: 'US Pacific Northwest',
  }),
  new Game({
    name: '1880',
    location: 'China',
  }),
  new Game({
    name: '1881',
    location: 'Berlin',
  }),
  new Game({
    name: '1889',
    location: 'Japan',
  }),
  new Game({
    name: '1891',
    location: 'Hiroshima',
  }),
  new Game({
    name: '1893',
    location: 'Cologne',
  }),
  new Game({
    name: '1895',
    location: 'Namibia',
  }),
  new Game({
    name: '1898',
    location: 'France',
  }),
  new Game({
    name: '1899',
    location: 'Northern China and Korea',
    defaultTo: game1830,
  }),
  new Game({
    name: '18??',
    location: 'Fictional 1870 variant',
  }),
  new Game({
    name: '18Africa',
    location: 'Africa',
  }),
  new Game({
    name: '18AL',
    location: 'Alabama',
    defaultTo: game18ga,
  }),
  new Game({
    name: '18Ardennes',
    location: 'Ardennes',
  }),
  new Game({
    name: '18BL',
    location: 'Bergisches Land',
  }),
  new Game({
    name: '18C2C',
    location: 'USA coast to coast',
  }),
  new Game({
    name: '18CLE',
    location: 'Cleveland',
  }),
  new Game({
    name: '18CZ',
    location: 'Czechoslovakia',
  }),
  new Game({
    name: '18Dixie',
    location: 'The Deep South',
  }),
  new Game({
    name: '18EC',
    location: 'USA East Coast',
  }),
  new Game({
    name: '18EU',
    location: 'Europe',
  }),
  new Game({
    name: '18EZ Level 1',
    notes: 'Railroading simplified',
  }),
  new Game({
    name: '18EZ Level 2',
    notes: 'Railroading simplified',
  }),
  new Game({
    name: '18EZ Level 3',
    notes: 'Railroading simplified',
  }),
  new Game({
    name: '18FL',
    location: 'Florida',
  }),
  game18ga,
  new Game({
    name: '18GB',
    location: 'Great Britain',
  }),
  new Game({
    name: '18GL',
    location: 'Great Lakes',
  }),
  new Game({
    name: '18GM',
    notes: 'The 18xx GameMaster - a kit for building your own 18xx game - entries on this list are for The Aurora Limited, the 18GM standard rules',
  }),
  new Game({
    name: '18Ireland',
    location: 'Ireland',
  }),
  new Game({
    name: '18Kaas',
    location: 'The Netherlands',
  }),
  new Game({
    name: '18Mex',
    location: 'Mexico',
  }),
  new Game({
    name: '18MS',
    location: 'Mississippi',
  }),
  new Game({
    name: '18MW',
    location: 'The US Midwest',
  }),
  new Game({
    name: '18Neb',
    location: 'Nebraska',
  }),
  new Game({
    name: '18NK',
    location: 'Nagaokakyo City',
  }),
  new Game({
    name: '18NL',
    location: 'Netherlands',
  }),
  new Game({
    name: '18NW',
    location: 'North Western USA',
  }),
  new Game({
    name: '18NY',
    location: 'New York State',
  }),
  new Game({
    name: '18OE',
    location: 'Orient Express',
  }),
  new Game({
    name: '18PA',
    location: 'Mid-Atlantic USA',
  }),
  new Game({
    name: '18Rhl',
    location: 'Rhineland',
  }),
  new Game({
    name: '18Ruhr',
    location: 'The Ruhr',
  }),
  new Game({
    name: '18SA',
    location: 'South America',
  }),
  new Game({
    name: '18Scan',
    location: 'Scandinavia',
  }),
  new Game({
    name: '18SS',
    location: 'Fictional',
  }),
  new Game({
    name: '18SY',
    location: 'Southern Yamaguchi',
    notes: 'has two sets of rules, Generalisation and Original. If the entry says 18SY, it covers both rule sets, otherwise entries will appear as 18SY-G or 18SY-O.',
  }),
  new Game({
    name: '18TN',
    location: 'Tennessee',
  }),
  new Game({
    name: '18US',
    location: 'USA',
  }),
  new Game({
    name: '18USA',
    location: 'USA',
  }),
  new Game({
    name: '18VA',
    location: 'Virginia',
  }),
  new Game({
    name: '18West',
    location: 'Western USA',
  }),
  new Game({
    name: '2038',
    location: 'Asteroid Belt',
  }),
  new Game({
    name: 'Crisis',
    location: 'Abstract city underground (originally called 18DT)',
  }),
  new Game({
    name: 'Poseidon',
    location: 'Ancient Greece - 1800 BC',
  }),
  new Game({
    name: 'Railroad Barons',
    notes: 'The 18xx card game',
  }),
  new Game({
    name: 'Rolling Stock',
    notes: 'A card game inspired by 18xx',
  }),
  new Game({
    name: 'Steam Over Holland',
    location: 'The Netherlands',
  }),
];
