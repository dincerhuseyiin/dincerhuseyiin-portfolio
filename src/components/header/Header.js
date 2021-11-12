import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./HeaderStyle";
import Navbar from "./Navbar";
import { Decorator } from "../common/Common";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DrawerComponent from "./DrawerComponent";
import Typewriter from "typewriter-effect";

export default function Header() {
  const classes = useStyles();

  const [initialState, setInitialState] = useState(false);
  const handleDrawerToogler = () => {
    setInitialState(!initialState);
  };

  const navlinks = [
    { label: "About", Id: "About" },
    { label: "Works", Id: "Portfolio" },
    { label: "Comments", Id: "Comments" },
    { label: "Contact", Id: "Contact" },
  ];

  return (
    <Box className={classes.HeardeWraper} id="Headder">
      <Navbar navlinks={navlinks} handleDrawerToogler={handleDrawerToogler} />
      <DrawerComponent
        initialState={initialState}
        navlinks={navlinks}
        handleDrawerToogler={handleDrawerToogler}
      />

      <Box className={classes.Headercontaier}>
        <div className={classes.Type}>
          <Typewriter
            options={{
              strings: [
                " I am a Web developer,",
                " I am a UI/UX Designer,",
                " I am a Digital Expert,",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <Typography varinat="h3" component="h4" className={classes.headerDesc}>
          I Create Website And Application,
          <br />
          Based On Your Needs...
        </Typography>

        {Decorator({
          label: "About Us",
          withIcon: true,
          Icon: <ArrowDownwardIcon />,
        })}
      </Box>
    </Box>
  );
}
