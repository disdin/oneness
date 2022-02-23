import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// import Paper from '@mui/material/Paper';
import Masonry from "@mui/lab/Masonry";
// import { styled } from '@mui/material/styles';
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import Avatar from "@mui/material/Avatar";
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

export default function ImageMasonry() {
  return (
    <Box sx={{ width: "100%", minHeight: 829 }}>
      <Masonry columns={{ xs: 2, sm: 3 }} spacing={2.8}>
        {itemData.map((item, index) => (
          <Stack
            style={{ boxShadow: "3px 3px 20px #d2d2d2", borderRadius: "5px" }}
            key={index}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "spaceBetween",
                // alignItems: "center",
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
                  style={{ fontFamily: "Nunito" }}
                >{`Release project > Stage 1`}</Typography>
                <Typography
                  style={{
                    fontFamily: "Nunito",
                    fontWeight: 600,
                    fontSize: "15px",
                    margin: "20px 0px",
                    color: "#676767",
                  }}
                >
                  {item.text}
                </Typography>
                <FlagRoundedIcon color={item.color} />
              </Box>
              <Box
                sx={{ display: { xs: "none", md: "flex" } }}
                style={{
                  position: "relative",
                  top: "20px",
                  marginRight: "10px",
                }}
              >
                <Avatar sx={{ bgcolor: item.avatarC, width: 34, height: 34  }}>{item.avatar}</Avatar>{" "}
              </Box>
            </Box>
          </Stack>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
  {
    text: "Refresh company website urgently and report back to the office",
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
    text: "Refresh company website[500]",
    avatar: "SB",
    avatarC: lightGreen[500],
    color: "action",
  },

  {
    text: "Avatars are found throughout material design with uses in everything from tables to dialog menus.",
    avatar: "T",
    avatarC: teal[500],
    color: "success",
  },
  {
    text: "Refresh company website",
    avatar: "R",
    avatarC: lightBlue[500],
    color: "action",
  },
  {
    text: "Avatars are found throughout material design with uses in everything from tables to dialog menus.Avatars are found throughout material design with uses in everything from tables to dialog menus.website",
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
    text: "Avatars are found throughout material design with uses in everything from tables to dialog menus.Avatars are found throughout material design with uses in everything from tables to dialog menus.",
    avatar: "W",
    avatarC: yellow[500],
    color: "success",
  },
];
