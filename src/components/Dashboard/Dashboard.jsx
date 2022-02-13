import React from "react";
import { styled } from "@mui/material/styles";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import TableData from "./TableData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Root = styled("div")(({ theme }) => ({
  // border: "4px solid red",
  // padding: theme.spacing(1),
  marginBottom:'80px',
  [theme.breakpoints.down("sm")]: {
    //600
    maxHeight: 160,
    maxWidth: "100%",
  },
  // [theme.breakpoints.up("sm")]: {
  //   //600
  //   display: "inline-block",
  //   maxHeight: 300,
  //   maxWidth: "100%",
  //   padding: "0px 40px",
  // },
  [theme.breakpoints.up("lg")]: {
    //1200
    display: "inline-block",
    // maxHeight: "700rem",
    height:'350px',
    width: "90%",
  },
}));
const Dashboard = () => {
  return (
    <div style={{ display: "flex",flexDirection:'column', alignItems: "center",margin:'40px 0px' }}>
      <Root>
        <Line
          style={{ position: "relative" }}
          data={{
            labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
            datasets: [
              {
                label: "green Dataset",
                data: [55, 39, 40, 61, 26, 85, 90],
                backgroundColor: "#00dd00a1",
                borderColor: "#00dd00a1",
                
                borderWidth: 2,
                pointBorderWidth: 0,
                tension: 0.3,
                pointStyle: "line",
                // fill: {
                //   target: "origin",
                //   above: "#e3e3e3", // Area will be red above the origin
                //   // below: "rgb(0, 0, 255)", // And blue below the origin
                // },
              },
              {
                label: "Blue Dataset",
                data: [65, 59, 60, 81, 56, 55, 50],
                backgroundColor: "#62a8ff",
                borderColor: "#62a8ff",
                borderWidth: 3,
                pointBorderWidth: 0,
                tension: 0.4,
                pointStyle: "line",
                fill: {
                  target: "origin",
                  above: "#e3e3e3", // Area will be red above the origin
                  // below: "rgb(0, 0, 255)", // And blue below the origin
                },
              },
            ],
          }}
          height="300%"
          width="600%"
          options={{
            maintainAspectRatio: false,
          }}
        />
      </Root>
      <TableData/>
    </div>
  );
};

export default Dashboard;
