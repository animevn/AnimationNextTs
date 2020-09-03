import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import useStyles from "./IndexStyles";

export default function IndexContent() {

  const classes = useStyles();
  const [style, setStyle] = useState("");

  function handleAnimationEnd() {
    setStyle("");
  }

  function rotateLeft() {
    const newStyle = classes.rotateleft;
    setStyle(newStyle);
  }

  function rotateRight() {
    setStyle(classes.rotatateright);
  }

  function fadeIn() {
    setStyle(classes.fadein);
  }

  function fadeOut() {
    setStyle(classes.fadeout);
  }

  function fadeInOut() {
    setStyle(classes.fadeinout);
  }

  function zoomIn() {
    setStyle(classes.zoomin);
  }

  function zoomOut() {
    setStyle(classes.zoomout);
  }

  function leftIn() {
    setStyle(classes.leftin);
  }

  function rightIn() {
    setStyle(classes.rightin);
  }

  function topBot() {
    setStyle(classes.topbot);
  }

  function flash() {
    setStyle(classes.flash);
  }

  function bounce() {
    setStyle(classes.bounce);
  }

  const boxStyle = {
    marginTop:"8px",
    marginBottom:"8px",
    display:"flex",
    justifyContent:"center",
    paddingTop:"3rem",
    paddingBottom:"3rem",
    borderRadius:"2rem",
    borderColor:"orange",
    overflow:"hidden"
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <>
        <Box border={1} boxShadow={2} flexDirection="row" style={boxStyle}>

          <img className={style} style={{"width":"25%"}}
               src="/images/image.png" onAnimationEnd={handleAnimationEnd} alt="rleft">
          </img>
        </Box>

        <Box my={3} display="flex" flexDirection="column"
             justifyContent="space-around" py={3}>

          <Box display="flex" flexDirection="row" justifyContent="space-around" pb={3}>
            <Button variant="contained" color="primary"
                    onClick={rotateLeft}>
              Rotate Left
            </Button>

            <Button variant="contained" color="primary"
                    onClick={rotateRight}>
              Rotate Right
            </Button>
          </Box>

          <Box display="flex" flexDirection="row" justifyContent="space-around" pb={3}>
            <Button variant="contained" color="primary"
                    onClick={fadeIn}>
              Fade In
            </Button>

            <Button variant="contained" color="primary"
                    onClick={fadeInOut}>
              Fade In Out
            </Button>

            <Button variant="contained" color="primary"
                    onClick={fadeOut}>
              Fade Out
            </Button>
          </Box>

          <Box display="flex" flexDirection="row" justifyContent="space-around" pb={3}>

            <Button variant="contained" color="primary"
                    onClick={zoomIn}>
              Zoom In
            </Button>

            <Button variant="contained" color="primary"
                    onClick={zoomOut}>
              Zoom Out
            </Button>

          </Box>

          <Box display="flex" flexDirection="row" justifyContent="space-around" pb={3}>
            <Button variant="contained" color="primary"
                    onClick={leftIn}>
              Left In
            </Button>

            <Button variant="contained" color="primary"
                    onClick={topBot}>
              Top Bot
            </Button>

            <Button variant="contained" color="primary"
                    onClick={rightIn}>
              Right In
            </Button>
          </Box>

          <Box display="flex" flexDirection="row" justifyContent="space-around">
            <Button variant="contained" color="primary"
                    onClick={bounce}>
              Bounce
            </Button>

            <Button variant="contained" color="primary"
                    onClick={flash}>
              Flash
            </Button>
          </Box>

        </Box>

      </>
    </Grid>
  )
}

