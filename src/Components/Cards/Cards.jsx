import React from "react";
import Countup from "react-countup";
import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div
      style={{
        position: "static",
        width: "100%",
        marginTop: "2%",
      }}
    >
      <AppBar
        className="apps"
        style={{
          width: "75%",
          position: "static",
          marginTop: "10px",
          margin: "auto",
        }}
      >
        <div className="mains" style={{ display: "flex" }}>
          <div>
            <Typography variant="h5">
              <Typography variant="h5">Infected</Typography>
              <Countup
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
          </div>
          <div>
            {" "}
            <Typography variant="h5">
              <Typography variant="h5">Deaths</Typography>
              <Countup
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
          </div>
          <div>
            <Typography variant="h5">
              <Typography variant="h5">Recovered</Typography>
              <Countup
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default Cards;
