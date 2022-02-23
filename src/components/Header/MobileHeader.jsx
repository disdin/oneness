import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MessageIcon from "@mui/icons-material/Message";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LogoutIcon from "@mui/icons-material/Logout";
import { makeStyles } from "@mui/styles";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import RealeaseProject2 from "../ReleaseProject/RealeaseProject2";
import Badge from "@mui/material/Badge";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "white",
    // borderTop:'2px solid #bdbdbd',
    borderBottom: "2px solid #bdbdbd",
    padding: "0px",
  },
}));

const MobileHeader = () => {
  const navigate = useNavigate();

  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <AppBar
        style={{ marginBottom: "30px" }}
        sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}
        position="static"
      >
        <Container className={classes.navbar} maxWidth="xl">
          <Toolbar disableGutters>
            {/* mobile view*/}
            <Box sx={{ flexGrow: 1 }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon color="disabled" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem
                  onClick={() => {
                    navigate("/");
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center">Dashboards</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/releaseProject");
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center">Release Project</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { color: "#9a9a9a" },
                fontSize:22
              }}
            >
              Oneness
            </Typography>

            <Box>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <PermIdentityIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Badge
                    badgeContent={4}
                    color="secondary"
                    variant="dot"
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <NotificationsNoneIcon />
                  </Badge>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Badge
                    badgeContent={7}
                    color="success"
                    variant="dot"
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <MessageIcon />
                  </Badge>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <FormatListBulletedIcon />
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <LogoutIcon />
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
        <Route exact path="/" element={<Box sx={{ display: { md: "none" } }}><Dashboard /></Box>} />
        <Route exact path="/releaseProject" element={<Box sx={{  display: { xs: "flex", md: "none" } }}><RealeaseProject2 /></Box>} />
      </Routes>
    </>
  );
};

export default MobileHeader;
