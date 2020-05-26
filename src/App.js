import React from "react";
import "./App.css";
import Cards from "./Components/Cards/Cards";
import Chart from "./Components/Chart/Chart";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import AllCountries from "./Components/AllCountries/All";
import styles from "./App.module.css";
import { fetchData } from "./api/index";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <AllCountries />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
