import { Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ourStoryBg from "../../assets/ourMission/background1.jpg";
import image1 from "../../assets/ourMission/image01.jpg";
import image2 from "../../assets/ourMission/image02.jpg";
import image3 from "../../assets/ourMission/image03.jpg";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useStyles: any = makeStyles((theme: any) => ({
  root: {
    padding: "2rem 5vw",
    fontFamily: "'Playfair Display', serif !important",
    // height: "35rem",
    background: "linear-gradient(90deg, #E0C387 85%, #1A181F 15%)",
    position: "relative",
    zIndex: "1",
    "&>img": {
      width: "20rem",
      height: "28rem",
      objectFit: "cover",
      position: "absolute",
      right: "1%",
      top: "3rem",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    [theme.breakpoints.down("lg")]: {
      background: "linear-gradient(90deg, #E0C387 100%, #1A181F 0%)",
    },
  },
  ytVideo: {
    width: "25rem",
    height: "15rem",
    margin: "auto",
    borderRadius: "0.8rem",
    overflow: "hidden",
  },
  missionBody: {
    fontFamily: "'Playfair Display', serif !important",
  },
  content1: {
    height: "30rem",
    position: "absolute",
    zIndex: "10",
    fontFamily: "'Playfair Display', serif !important",
    "&>div": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'Playfair Display', serif !important",
      [theme.breakpoints.down("md")]: {
        marginTop: "2.5rem",
        margin: "auto",
        textAlign: "center",
        "&>h2": {
          textAlign: "center",
        },
      },
    },
    "&>div:nth-child(1)": {
      marginRight: "2rem",
    },
    [theme.breakpoints.down("md")]: {
      position: "relative",
    },
  },
  title: {
    marginBottom: "3rem !important",
    textAlign: "left",
    width: "100%",
    fontFamily: "'Playfair Display', serif !important",
  },
  content2: {
    margin: "auto",
    width: "55rem",
    marginTop: "35rem",
    fontFamily: "'Playfair Display', serif !important",
    [theme.breakpoints.down(954)]: {
      width: "90vw",
    },

    "&>div": {
      height: "26rem",
      display: "flex",
      alignItems: "flex-end",
      fontFamily: "'Playfair Display', serif !important",
      "&>div": {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "4rem",
        fontFamily: "'Playfair Display', serif !important",
        "&>img": {
          height: "29rem",
          width: "29rem",
          boxShadow: "5px 5px 15px #000000",
          [theme.breakpoints.down("lg")]: {
            height: "29rem",
            width: "29rem",
          },
        },
        [theme.breakpoints.down("md")]: {
          marginRight: "1.5rem",
          "&>div p": {
            lineHeight: "1.3",
          },
          "&>div h3": {
            fontSize: "2.5rem",
            lineHeight: "1.1",
          },
        },
      },
    },

    "&>div:nth-child(2)": {
      flexDirection: "row-reverse",
      "&>div": {
        marginLeft: "4rem",
        [theme.breakpoints.down("md")]: {
          marginLeft: "1.5rem",
        },
      },
      [theme.breakpoints.down(777)]: {
        flexDirection: "column",
      },
    },

    [theme.breakpoints.down(777)]: {
      "&>div": {
        height: "unset",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3rem",
        "&>div": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          margin: "1rem",
        },
        "&>img": {
          width: "90vw",
          height: "90vw",
          boxShadow: "5px 5px 15px #000000",
          marginTop: "2rem",
          marginBottom: "1rem",
        },
      },

      "&>div:nth-child(2)": {
        flexDirection: "column",
      },
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "15rem",
    },
  },
}));

const OurStory = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Grid container className={classes.content1}>
        <Grid item sm={12} md={6}>
          <Typography variant="h2" className={classes.title}>
            Our Mission
          </Typography>
          <Typography className={classes.missionBody}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab
            voluptatum pariatur ut necessitatibus laboriosam labore eos, tempora
            natus nemo dicta odio asperiores nam accusamus modi ex. Quaerat
            ratione consequuntur ducimus obcaecati aut odit porro perspiciatis
            accusantium, maxime perferendis qui repellat, expedita laborum totam
            molestias? nemo dicta odio asperiores nam accusamus modi ex. Quaerat
            ratione consequuntur ducimus obcaecati aut odit porro perspiciatis
            accusantium, maxime perferendis qui repellat, expedita laborum totam
            molestias?
          </Typography>
        </Grid>
        <Grid item sm={12} md={5}>
          <div className={classes.ytVideo}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/wi-IJjwh7YY?controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Grid>
      </Grid>
      <div className={classes.content2}>
        <div>
          <div>
            <div>
              <Typography
                variant="h3"
                sx={{ fontFamily: "'Playfair Display', serif !important" }}
              >
                Meet the Artisans
              </Typography>
              <Typography
                sx={{ fontFamily: "'Playfair Display', serif !important" }}
              >
                Take a look at our all new handcrafted and handpicked pieces of
                art by our artisans/weavers from the rarest of corners of India
                in vibrant hues for the conscious you.
              </Typography>
            </div>
          </div>
          <Fade left>
            <img src={image1} alt="our-mission" />
          </Fade>
        </div>

        <div>
          <div>
            <div>
              <Typography
                variant="h3"
                sx={{ fontFamily: "'Playfair Display', serif !important" }}
              >
                What's New
              </Typography>
              <Typography
                sx={{ fontFamily: "'Playfair Display', serif !important" }}
              >
                Take a dive into our latest collection by the Tangaliya weavers
                from Surendernagar and Bhuj, experimenting with kala cotton and
                organic dyes in collaboration with Tangaliya weavers.
              </Typography>
            </div>
          </div>
          <Fade right>
            <img src={image2} alt="our-mission" />
          </Fade>
        </div>

        <div>
          <div>
            <div>
              <Typography
                variant="h3"
                sx={{ fontFamily: "'Playfair Display', serif !important" }}
              >
                Blog
              </Typography>
              <Typography
                sx={{ fontFamily: "'Playfair Display', serif !important" }}
              >
                Discover the joy of organic world with our exquisite insights on
                different crafts and a fun experience with our bloggers.
              </Typography>
            </div>
          </div>
          <Fade left>
            <img src={image3} alt="our-mission" />
          </Fade>
        </div>
      </div>
      <Zoom>
        <img src={ourStoryBg} alt="our-story-bg" />
      </Zoom>
    </section>
  );
};

export default OurStory;
