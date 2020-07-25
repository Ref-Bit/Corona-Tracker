import React from "react";
import axios from "axios";
import { withTranslation } from "react-i18next";
import { ThemeProvider } from "@material-ui/core/styles";
import { Cards, Chart, CountryPicker } from "./components";
import { theme, dev } from "./config";
import { fetchData } from "./api";
import { switchLang } from "./helpers";
import Styles from "./App.module.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      country: "",
      code: "",
      flag: "",
    };
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    this.fetchIP();
  }
  fetchIP = () => {
    axios
      .get("https://freegeoip.app/json/")
      .then((res) => {
        const { country_code } = res.data;
        axios
          .get(`https://restcountries.eu/rest/v2/alpha/${country_code}`)
          .then((res) => {
            const code = res.data.languages[0].iso639_1;
            const { flag } = res.data;
            this.setState({ code });
            this.setState({ flag });

            switchLang(code);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  handleCountryChange = async (country) => {
    // Fetch Data
    const fetchedData = await fetchData(country);

    // Set Country
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country, code } = this.state;
    // const { t } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <div className={Styles.container}>
          <img src="logo.png" alt="Logo" className={Styles.logo} />
          <Cards data={data} locale={code} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
          <p>
            This data is provided by <span>Covid19-Mathdro API</span>
          </p>
          <div className={Styles.copyright}>
            <h5>
              This project was inspired by&nbsp;
              <a
                href={dev.origin.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                {dev.origin.name}
              </a>
              &nbsp;and built by&nbsp;
              <a
                href={dev.developed.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                {dev.developed.name}
              </a>
            </h5>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default withTranslation()(App);
