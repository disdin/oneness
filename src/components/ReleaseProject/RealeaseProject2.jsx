import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {
  blue,
  deepOrange,
  deepPurple,
  grey,
  lightBlue,
  lightGreen,
  orange,
  red,
  teal,
  yellow,
} from "@mui/material/colors";
import Element from "./Element";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const ListEle = styled("div")(({ theme }) => ({
  display: "inline-block",
  margin: "0px 11px",
  [theme.breakpoints.down("md")]: {
    margin: "0px 5px",
  },
}));

export default function ImageMasonry() {
  return (
    <Root>
      <ListEle>
        <div>
          <div style={{ backgroundColor: "purple", height: 2 }}></div>
          <Stack
            style={{
              boxShadow: "3px 3px 20px #d2d2d2",
              borderRadius: "8px",
              marginBottom: "15px",
              padding:'7px 0px'
            }}
          >
            <Box
              style={{
                margin: "10px",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "spaceBetween",
                width: "90%",
              }}
            >
              <Typography
                style={{
                  fontWeight: "bolder",
                  fontSize: 18,
                  color: "#414141",
                  fontFamily: "serif",
                  marginLeft:10 
                }}
              >
                Ready
              </Typography>
            </Box>
          </Stack>
        </div>
        <Element Data={itemData[0]} />
      </ListEle>
      <ListEle>
        <div>
          <div style={{ backgroundColor: "#2196f3", height: 2 }}></div>
          <Stack
            style={{
              boxShadow: "3px 3px 20px #d2d2d2",
              borderRadius: "8px",
              marginBottom: "15px",
              padding:'7px 0px'
            }}
          >
            <Box
              style={{
                margin: "10px",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "spaceBetween",
                width: "90%",
              }}
            >
              <Typography
                style={{
                  fontWeight: "bolder",
                  fontSize: 18,
                  color: "#414141",
                  fontFamily: "serif",
                  marginLeft:10 
                }}
              >
                In Progress
              </Typography>
            </Box>
          </Stack>
        </div>
        <Element Data={itemData[1]} />
      </ListEle>
      <ListEle>
        <div>
          <div style={{ backgroundColor: "#ff9800", height: 2 }}></div>
          <Stack
            style={{
              boxShadow: "3px 3px 20px #d2d2d2",
              borderRadius: "8px",
              marginBottom: "15px",
              padding:'7px 0px'
            }}
          >
            <Box
              style={{
                margin: "10px",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "spaceBetween",
                width: "90%",
              }}
            >
              <Typography
                style={{
                  fontWeight: "bolder",
                  fontSize: 18,
                  color: "#414141",
                  fontFamily: "serif",
                  marginLeft:10 
                }}
              >
                Review
              </Typography>
            </Box>
          </Stack>
        </div>
        <Element Data={itemData[2]} />
      </ListEle>
    </Root>
  );
}

const itemData = [
  [
    {
      text: "Refresh company website urgently and report back to the officeefresh company website urgently and report back to  to the office",
      avatar: "N",
      avatarC: deepOrange[500],
      color: "secondary",
    },
    {
      text: "Update contractor agreement",
      avatar: "S",
      avatarC: deepPurple[500],
      color: "success",
    },

    {
      text: "Avatars are found throughout material design with uses in everything from tables to dialog menus.",
      avatar: "T",
      avatarC: teal[500],
      color: "success",
    },
  ],
  [
    {
      text: "Refresh company website",
      avatar: "R",
      avatarC: lightBlue[500],
      color: "action",
    },
    {
      text: "Avatars are found throughout material design with uses in everything from tables to dialog menus.Avatars o dialog menus.website",
      avatar: "S",
      avatarC: red[500],
      color: "success",
    },
    {
      text: "Refresh company website",
      avatar: "B",
      avatarC: grey[500],
      color: "secondary",
    },
    {
      text: "Avatars are found throughout material design with uses in everything Avatars are re found throughout materiay website",
      avatar: "R",
      avatarC: lightBlue[500],
      color: "action",
    },
  ],
  [
    {
      text: "Go to market",
      avatar: "F",
      avatarC: blue[500],
      color: "success",
    },
    {
      text: "Avatars are found throughout material design with uses in everything from tables to dialog menus.",
      avatar: "HI",
      avatarC: lightGreen[500],
      color: "action",
    },
    {
      text: "Refresh company website",
      avatar: "PG",
      avatarC: orange[500],
      color: "secondary",
    },
    {
      text: "Avatars are found throughout material design with uses in everything from tables to dialog menus.Avatars om tables to dialog menus.",
      avatar: "W",
      avatarC: yellow[500],
      color: "success",
    },
  ],
];
