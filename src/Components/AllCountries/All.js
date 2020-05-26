import React, { Component } from "react";
import axios from "axios";
import "./All.css";

class AllCountries extends Component {
  state = {
    data: [],
    loading: true,
  };

  async componentDidMount() {
    const ans = await axios.get(
      `https://corona-virus-world-and-india-data.p.rapidapi.com/api`,
      {
        headers: {
          "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
          "x-rapidapi-key":
            "39798c57d9msh9d50ad46ff0bc95p1b9baejsnf9623f2b3e0a",
        },
      }
    );

    this.setState({ data: ans.data.countries_stat, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div
        style={{
          height: "500px",
          overflowY: "scroll",
          margin: "50px",
        }}
      >
        <table
          border="1"
          class="table table-striped table-hover table-dark"
          style={{ width: "75vw" }}
        >
          <thead>
            <tr>
              <th>Country</th>
              <th>Cases</th>
              <th>Active Cases</th>
              <th>Total Recovered</th>
              <th>Deaths</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((data) => (
              <tr key={data.country_name}>
                <td>{data.country_name}</td>
                <td>{data.cases}</td>
                <td>{data.active_cases}</td>
                <td>{data.total_recovered}</td>
                <td>{data.deaths}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AllCountries;
