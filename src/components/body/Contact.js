import { Box, Button, Container, Grid, Hidden } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./BodyStyle";
import image from "../../images/contactus.jpg";
import { RenderSectionHeading } from "../common/Common";
import { RenderInputText } from "../common/FormCommon";

export default function Contact() {
  const classes = useStyles();
  const [state, setState] = useState({
    data: {
      firstname: "",
      email: "",
      messages: "",
    },
    errors: {},
  });
  const handleOnChange = ({ target }) => {
    const { data, errors } = state;

    //setting errors
    target.value.length <= 3
      ? (errors[target.name] = `${target.name} at least have 3 letters`)
      : (errors[target.name] = "");

    data[target.name] = target.value;
    setState({ data, errors });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted ,", state.data);
    //api call to psot data
    //konsoldan görüntüleyebiliriz (we can see at console)
  };

  return (
    <Box className={classes.section1} id="Contact">
      <Container maxWidth="xl">
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
              smallText: " Contact Me",
              heading: "Seems To be Interesting",
              description:
                "Got my Portfolio seen , than feel free to contact me for your future projects",
            })}
            <br />
            <form onSubmit={handleSubmit}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                  {RenderInputText({
                    label: "First Name",
                    name: "firstname",
                    state: state,
                    onChange: handleOnChange,
                  })}
                </Grid>
                <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                  {RenderInputText({
                    label: "Email",
                    name: "email",
                    state: state,
                    onChange: handleOnChange,
                  })}
                </Grid>
                <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                  {RenderInputText({
                    label: "Messages",
                    name: "messages",
                    state: state,
                    onChange: handleOnChange,
                    multiline: true,
                    rows: 5,
                  })}
                </Grid>
                <Grid item xs={12} sm={8} style={{ marginBottom: "16px" }}>
                  <Button
                    variant="outlined"
                    type="submit"
                    fullWidth={true}
                    className={classes.submitBtn}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
