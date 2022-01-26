import Logo from "../../atoms/Logo/Logo";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import CustomButton from "../../atoms/Button/CustomButton";
import Explore from "../Explore/Explore";
import CustomSearch from "../../atoms/Search/CustomSearch";
import { useNavigate } from "react-router-dom";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Header = () => {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] =
    React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" data-testid='header'>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Logo />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
                maxWidth:"fit-content"
              }}
            >
            </Menu>
          </Box>
          <Box
            sx={{
              
              display: { xs: "none", md: "block" },
              fontSize: "20px",
              marginLeft: "5px",
            }}
          >
            <CustomSearch />
          </Box>
          <Box
            sx={{
             
              display: { xs: "none", md: "block" },
              width:"150px",
            }}
          >
            <Explore />
          </Box>
          <Box
            sx={{
              
              display: { xs: "none", md: "block" },
              
            }}
          >
            <CustomButton
              aria-controls="customized-menu"
              aria-haspopup="true"
              onClick={() => navigate("/")}
              sx={{
                color: "black",
                border: "none",
                borderRadius: "0px 0px 0px 0px",
                display: "block",
                marginLeft:"40px",
                width: "120px",
                "&:hover": {
                  color: "black",
                  backgroundColor: "white",
                  borderBottom:"3px solid #22C870",
                },
              }}
              
            >
              MyLibrary
            </CustomButton>
          </Box>

          <Box sx={{ position: "absolute", right: "100px" }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="A" src="/static/images/avatar/2.jpg" />
              <ExpandMoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
