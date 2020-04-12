import React from 'react';
import { Cards, Chart, CountryPicker } from './components'
import Styles from './App.module.css';
import { fetchData } from './API';

class App extends React.Component{
  state = {
    data: {},
    country: ''
  }
  async componentWillMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }
  handleCountryChange = async (country) => {
    // Fetch Data
    const fetchedData = await fetchData(country);

    // Set Country
    this.setState({ data:fetchedData, country: country });
  }
  render(){
    const { data, country } = this.state
    return(
      <div className={Styles.container}>
        <img src="logo.png" alt="Logo" className={Styles.logo}/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    )
  }
}

export default App;