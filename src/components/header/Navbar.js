import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./HeaderStyle";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Link } from "react-scroll";
import { Theme } from "../Theme";

export default function Navbar({ navlinks, handleDrawerToogler }) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.navbar}>
      <Toolbar
        className={classes.ToolBar}
        style={{ backgroundColor: Theme.colors.base1 }}
      >
        <Typography variant="h5" component="h6">
          {"dincerhuseyiin-portfolio"}
        </Typography>

        {/* navlinks  */}
        <Box component={Hidden} xsDown>
          <Box>
            {navlinks.map((item, i) => (
              <Button
                key={i}
                className={classes.navlinks}
                to={`${item.Id}`}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                component={Link}
                color="inherit"
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Box>
        <Box component={Hidden} smUp>
          <IconButton color="inherit" onClick={handleDrawerToogler}>
            <MenuOpenIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
