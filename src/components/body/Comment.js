import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Hidden,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./BodyStyle";
import image from "../../images/commentPic.jpeg";
import { RenderSectionHeading } from "../common/Common";
import Avatar from "@mui/material/Avatar";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Comment() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [comment, setComment] = useState("");
  const [list, setList] = useState([]);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeMail = (event) => {
    setMail(event.target.value);
  };
  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([
      ...list,
      {
        id: Math.floor(Math.random() * 10000),
        title: name,
        title1: mail,
        title2: comment,
      },
    ]);
    setName("");
    setMail("");
    setComment("");
  };

  return (
    <Box className={classes.section3} id="Comments">
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
              smallText: "Make a Comment!",
              heading: "Comment Section has been designed for you..",
              description: "We are always open for your feedbacks! ",
            })}
            <br />
            <form onSubmit={handleSubmit}>
              <Box
                className={classes.formCommentBox}
                justifyContent="space-evenly"
              >
                <Grid
                  className={classes.CommentForm}
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={12} sm={9}>
                    <TextField
                      required
                      margin="normal"
                      fullWidth
                      id="outlined-basic"
                      label="Your Name"
                      variant="outlined"
                      value={name}
                      onChange={handleChangeName}
                    />
                    <TextField
                      required
                      margin="normal"
                      fullWidth
                      id="outlined-basic"
                      label="Your Mail"
                      variant="outlined"
                      value={mail}
                      onChange={handleChangeMail}
                    />
                    <TextField
                      required
                      margin="normal"
                      id="outlined-multiline-static"
                      label="Leave a Comment!"
                      multiline
                      rows={4}
                      fullWidth
                      value={comment}
                      onChange={handleChangeComment}
                    />
                    <Button
                      onClick={handleSubmit}
                      fullWidth
                      className={classes.submitBtn}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="right"
                  alignItems="right"
                  className={classes.CommentBox}
                >
                  <Grid item xs={12} sm={10}>
                    {list.map((item) => (
                      <div key={item.id}>
                        <Grid item xs={12} md={12}>
                          <Card>
                            <CardHeader
                              avatar={
                                <Avatar sx={{ backgroundColor: "#885053" }}>
                                  {item.title[0].toUpperCase()}
                                </Avatar>
                              }
                              title={item.title}
                              subheader={item.title1}
                            />
                            <CardContent>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {item.title2}{" "}
                                <IconButton aria-label="delete" color="primary">
                                  <DeleteOutlineIcon
                                    onClick={() =>
                                      setList(
                                        list.filter((i) => i.id !== item.id)
                                      )
                                    }
                                  />
                                </IconButton>
                              </Typography>
                            </CardContent>
                          </Card>
                          <br />
                        </Grid>
                      </div>
                    ))}
                  </Grid>
                </Grid>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
