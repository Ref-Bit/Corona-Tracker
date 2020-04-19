const { createMuiTheme, responsiveFontSizes } = require('@material-ui/core/styles')
const Chart = require('chart.js');

Chart.defaults.global.defaultFontFamily = "'Cairo', sans-serif";

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Cairo','Hind Siliguri', 'Open Sans',
      'Rubik', 'Martel', 'Kantumruy',
      'Gothic A1', 'Noto Sans JP', 'Padauk',
      '"Helvetica Neue"','Arial','sans-serif'
    ].join(','),
  },
});
theme = responsiveFontSizes(theme);

const ip = {
  tr: '88.241.53.56',
  sy: '31.9.250.205',
  jp: '119.63.193.194',
  dz: '41.191.255.255',
  us: '52.179.231.206',
  id: '23.37.207.255',
  za: '137.158.221.53',
  al: '185.120.37.34',
  et: '213.55.98.71',
  am: '87.241.185.88',
  az: '188.72.136.24',
  es: '185.99.187.105',
  by: '46.53.246.24',
  bd: '114.134.89.62',
  bs: '31.223.136.233',
  bg: '79.100.195.59',
  cn: '150.158.105.157',
  hr: '78.0.213.15',
  cz: '217.64.15.106',
  dk: '109.56.196.41',
  nl: '51.145.179.233',
  ee: '84.50.77.205',
  ph: '175.176.45.254',
  fi: '80.220.77.234',
  fr: '80.215.92.51',
  ge: '31.146.180.81',
  de: '217.86.186.25',
  gr: '193.92.105.60',
  il: '31.168.158.51',
  in: '157.51.61.87',
  hu: '80.95.93.227',
  is: '89.17.134.93',
  ie: '109.76.41.4',
  it: '79.16.0.0',
  kz: '89.219.30.72',
  kh: '103.11.217.165',
  ko: '175.223.11.57',
  kg: '46.251.199.71',
  la: '202.123.177.226',
  lv: '91.203.69.82',
  lt: '213.159.63.74',
  lu:'185.108.250.122',
  mg: '41.63.159.255',
  mk: '95.86.62.41',
  my: '61.6.61.24',
  mt: '217.30.100.138',
  mn: '192.82.77.231',
  mm: '37.111.13.245',
}

const dev = {
  origin: {
    name: 'adrianhajdin',
    email: 'adrianhajdin00@gmail.com',
    repo: 'https://github.com/adrianhajdin'
  },
  developed:{
    name: 'Ref-Bit',
    email: 'refaatbitar@gmail.com',
    repo: 'https://github.com/Ref-Bit'
  }

} 

const config = {
  ip,
  dev,
  theme,
  Chart
 };
 
module.exports = config;