import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { RenderSectionHeading } from "../common/Common";
import { useStyles } from "./BodyStyle";

import image1 from "../../images/5-2.jpg";
import image2 from "../../images/5-3.jpg";
import image3 from "../../images/5-4.jpg";
import image4 from "../../images/5-6.jpg";
import image5 from "../../images/5-8.jpg";
import image6 from "../../images/5-9.jpg";

export default function Portfolio() {
  const classes = useStyles();

  const portfolioData = [
    {
      url: image1,
      title: "Quiz App ",
      link: "https://github.com/dincerhuseyiin/quiz-app-api-material",
    },
    {
      url: image2,
      title: "Temperature Color Changer ",
      link: "https://github.com/dincerhuseyiin/Temperature-color-changes",
    },
    {
      url: image3,
      title: "Shopping List",
      link: "https://github.com/dincerhuseyiin/shopping-list",
    },
    {
      url: image4,
      title: "Birthday Reminder ",
      link: "https://github.com/dincerhuseyiin/birthday-reminder",
    },
    {
      url: image5,
      title: "Tours ",
      link: "https://github.com/dincerhuseyiin/Tours",
    },
    {
      url: image6,
      title: "Calculator ",
      link: "https://github.com/dincerhuseyiin/0-calculator",
    },
  ];

  return (
    <Box className={classes.sectionDark} id="Portfolio">
      <Grid
        container
        style={{
          displa: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Grid item xs={12} sm={8}>
          {RenderSectionHeading({
            smallText: "Portfolio",
            heading: "Let's See My Work",
            alignCenter: true,
          })}
        </Grid>
      </Grid>
      {/* imge section  */}

      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {portfolioData.map((item, i) => (
            <Grid item xs={6} sm={6} lg={4} key={i}>
              <Box className={classes.imageContainer}>
                <img
                  src={item.url}
                  alt={item.title}
                  className={classes.responsiveImg}
                />
                <Box className={classes.imageOverlay}>
                  <Typography className={classes.overlayTitle}>
                    {item.title}
                  </Typography>

                  <Button variant="contained" href={item.link}>
                    Visit
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
