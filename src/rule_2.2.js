// 2.2 - Are you limited to buying one certificate on your turn?

const exceptWhenLaunching = 'Yes; except that when launching a company you may buy up to 40% at once.';
const no = 'No.';
const brownZone = 'Yes, unless in brown zone of market. In the case of shares in the brown zone, multiple shares may be purchased from the bank pool as a single purchase.';

export default {
  '1827Jr': exceptWhenLaunching,
  '1841': exceptWhenLaunching,
  '1849': exceptWhenLaunching,
  '1873': exceptWhenLaunching,
  '1898': exceptWhenLaunching,
  '1829 Mainline': no,
  '18Africa': no,
  'Poseidon': no,
  '1830': brownZone,
  '1832': brownZone,
  '1850': brownZone,
  '1868': brownZone,
  '1870': brownZone,
  '1879': brownZone,
  '18??': brownZone,
  '18C2C': brownZone,
  '18MW': brownZone,
  '1831': 'Yes, with Government Intervention. Without GI, yes until 4 trains are bought, then 2 certificates until 7 trains, then 4 certificates.',
  '1858': "Yes. Starting a company or putting up a private for auction also count as a 'buy action'.",
  '18CLE': 'No. By carrying out a Corporation Starting step and then a buy step, a player may buy 2 certificates in one stock turn.',
  '18EZ Level 1': 'Not Applicable (no share dealing).',
  'Crisis': "Yes, unless the grey zone of market applies. This restriction does not apply to forced purchases. 'Fast floating' is an alternative.",
  'Rolling Stock': 'Yes; except that when launching a company you will always acquire 50% of the new company.',
  'Steam Over Holland': 'Yes, unless starting a company, when you must buy a number of shares equal to the current phase number as one purchase.',
  default: 'Yes.',
};
