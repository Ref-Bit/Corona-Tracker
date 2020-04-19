import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { withTranslation } from 'react-i18next';
import { ThemeProvider } from '@material-ui/core/styles'
import { Cards, Chart, CountryPicker } from './components'
import { theme, dev } from './config';
import { fetchData } from './api';
import Lang from './switchLanguage'
import Styles from './App.module.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      country: '',
      code:'',
      country_flag: ''
    }
  } 
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
    this.fetchIP();
  }

  fetchIP = () => {
    axios.get(`http://api.ipstack.com/check?access_key=${process.env.REACT_APP_IP_SERVICE_PROVIDER_API_KEY}&security=1`)
    .then((res) => {
      const { code } = res.data.location.languages[0]
      const { country_flag } = res.data.location

      this.setState({code})
      this.setState({country_flag})
      switch (code) {
        case 'en':moment.locale('en-ca');break;
        case 'hy':moment.locale('hy-am');break;
        case 'tl':moment.locale('tl-ph');break;
        case 'zh':moment.locale('zh-cn');break;
        default:moment.locale(code);
          break;
      }
      Lang.prototype.switchLang(code);
    })      
    .catch((err) => console.log(err));
  } 
  handleCountryChange = async (country) => {
    // Fetch Data
    const fetchedData = await fetchData(country);

    // Set Country
    this.setState({ data:fetchedData, country: country });
  }
  
  render(){
    const { data, country, code } = this.state;
    // const { t } = this.props;

    return(
      <ThemeProvider theme={theme}>
        <div className={Styles.container}>
          <img src="logo.png" alt="Logo" className={Styles.logo}/>
          <Cards data={data} locale={code}/>
          <CountryPicker handleCountryChange={this.handleCountryChange}/>
          <Chart data={data} country={country}/>
          <p>This web app uses <span>Covid19-Mathdro API</span> to update coronavirus stats.</p>
          <div className={Styles.copyright}>
            <h5>This project was inspired by&nbsp; 
              <a href={dev.origin.repo} target="_blank" rel="noopener noreferrer">{dev.origin.name}</a> 
              &nbsp;and built by  
              <a href={dev.developed.repo} target="_blank" rel="noopener noreferrer">{dev.developed.name}</a>
            </h5>
          </div>
        </div>
      </ThemeProvider>
    )
  }
}

export default withTranslation()(App);