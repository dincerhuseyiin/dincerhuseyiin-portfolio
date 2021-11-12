import { Box, Container, Grid, Hidden } from "@material-ui/core";
import React from "react";
import { useStyles } from "./BodyStyle";
import image from "../../images/aboutSide.jpg";
import { RenderSectionHeading, CardMedia } from "../common/Common";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import GifIcon from "@mui/icons-material/Gif";
import DashboardIcon from "@mui/icons-material/Dashboard";

export default function AboutUs() {
  const classes = useStyles();

  const cardMediaData = [
    {
      title: " Web Development",
      description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <DashboardIcon />,
    },
    {
      title: "Graphic Design",
      description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <GifIcon />,
    },
    {
      title: "Mobile Apps",
      description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <DeveloperModeIcon />,
    },
    {
      title: "Marketing",
      description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <AcUnitIcon />,
    },
  ];
  return (
    <Box className={classes.section} id="About">
      <Container>
        <Grid container spacing={1}>
          <Grid item sm={5}>
            <Box component={Hidden} xsDown>
              <img
                src={image}
                alt=" about us"
                className={classes.responsiveImg}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            {RenderSectionHeading({
              smallText: "ABOUT ME",
              heading: "Hello I'm Hüseyin Dinçer",
              description:
                "A self taught developer who loves to codes something that wiil impact majority of the people in good waay!",
            })}
            <br />

            <Grid container>
              {cardMediaData.map((item, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  {CardMedia({
                    label: item.title,
                    Desc: item.description,
                    Icon: item.icon,
                  })}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
