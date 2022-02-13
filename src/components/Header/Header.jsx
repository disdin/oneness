import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MessageIcon from "@mui/icons-material/Message";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LogoutIcon from "@mui/icons-material/Logout";
import { makeStyles } from "@mui/styles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Drawer from "@mui/material/Drawer";
import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MuiAppBar from "@mui/material/AppBar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Routes, Route } from "react-router-dom";
import Badge from "@mui/material/Badge";

import MobileHeader from "./MobileHeader";
import RealeaseProject from "../ReleaseProject/RealeaseProject";
import Dashboard from "../Dashboard/Dashboard";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "white",
    // borderTop:'2px solid #bdbdbd',
    borderBottom: "2px solid #bdbdbd",
    padding: "0px",
  },
}));

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Header = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MobileHeader />
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <AppBar position="fixed" open={open}>
          {/* <Container className={classes.navbar} maxWidth="xl"> */}
          <Toolbar className={classes.navbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon color="disabled" />
            </IconButton>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: {
                  color: "#9a9a9a",
                  xs: "none",
                  md: "flex",
                  fontSize: "30px",
                },
              }}
            >
              Oneness
            </Typography>

            <Box
              sx={{
                position: "absolute",
                right: "10px",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Tooltip title="Light Mode">
                <LightModeIcon color="primary" sx={{ mr: "15px" }} />
              </Tooltip>
              <Tooltip title="Dark Mode">
                <DarkModeIcon color="primary" sx={{ mr: "15px" }} />
              </Tooltip>
              <Tooltip title="Notifications">
                {/* <Badge
                  badgeContent={4}
                  color="secondary"
                  variant="dot"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                > */}
                  <NotificationsNoneIcon color="disabled" sx={{ mr: "15px" }} />
                {/* </Badge> */}
              </Tooltip>
              <Tooltip title="Messages">
                <Badge
                  badgeContent={7}
                  color="success"
                  variant="dot"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <MessageIcon color="disabled" sx={{ mr: "15px" }} />
                </Badge>
              </Tooltip>
              <Tooltip title="Todos">
                <FormatListBulletedIcon color="disabled" sx={{ mr: "15px" }} />
              </Tooltip>
              <Tooltip title="Logout">
                <LogoutIcon color="disabled" sx={{ mr: "15px" }} />
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <Button
            sx={{ my: 2, color: "#bdbdbd", display: "block" }}
            onClick={() => {
              navigate("/");
              handleDrawerClose();
            }}
          >
            Dashboards
          </Button>
          <Button
            sx={{ my: 2, color: "#bdbdbd", display: "block" }}
            onClick={() => {
              navigate("/releaseProject");
              // handleDrawerClose();
            }}
          >
            Release Project
          </Button>
        </Drawer>

        <Main open={open} >
          <DrawerHeader />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/releaseProject" element={<RealeaseProject />} />
          </Routes>
        </Main>
      </Box>
    </>
  );
};
export default Header;
