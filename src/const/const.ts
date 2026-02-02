const STARS_COUNT = 5;
const MAX_PERCENT_STARS_WIDTH = 100;

const FEATURES = [
  'Wi-Fi',
  'Heating',
  'Kitchen',
  'Fridge',
  'Washing machine',
  'Coffee machine',
  'Dishwasher',
  'Towels',
  'Baby seat',
  'Cabel TV',
  'Oven',
  'Microwave',
  'Air conditioning',
  'Smart TV',
  'Sound system',
  'Security system',
  'Smart lock',
  'Smart lighting',
  'Smart thermostat',
  'Smart blinds',
  'Smart speakers',
  'Smart plugs',
  'Smart cameras',
];

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = '/img/pin-active.svg';


export { STARS_COUNT, MAX_PERCENT_STARS_WIDTH, FEATURES, CITIES };
