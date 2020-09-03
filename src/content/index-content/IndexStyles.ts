import {createStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(()=>createStyles({
  "@keyframes rotateLeft":{
    "0%" :  {transform: "rotate(0)"},
    "100%" : {transform: "rotate(-720deg)"}
  },
  rotateleft:{
    animation: `$rotateLeft`,
    animationDuration: "2s",
    animationTimingFunction: "linear"
  },

  "@keyframes rotateRight":{
    "0%" :{transform: "rotate(0)"},
    "100%" : {transform: "rotate(720deg)"}
  },

  rotatateright:{
    animation: `$rotateRight`,
    animationDuration: "2s",
    animationTimingFunction: "linear"
  },

  "@keyframes fadeIn":{
    "0%" :{filter: "opacity(0)"},
    "100%" : {filter: "opacity(100%)"}
  },

  fadein:{
    animation: `$fadeIn`,
    animationDuration: "2s",
    animationTimingFunction: "linear"
  },

  "@keyframes fadeOut":{
    "0%" :{filter: "opacity(100%)"},
    "100%" : {filter: "opacity(0%)"}
  },

  fadeout:{
    animation: `$fadeOut`,
    animationDuration: "2s",
    animationTimingFunction: "linear"
  },

  "@keyframes fadeInOut":{
    "0%" :{filter: "opacity(100%)"},
    "50%" :{filter: "opacity(0%)"},
    "100%" : {filter: "opacity(100%)"}
  },

  fadeinout:{
    animation: `$fadeInOut`,
    animationDuration:"4s",
    animationTimingFunction:"linear"
  },

  "@keyframes zoomIn":{
    "0%":{transform:"scale(1, 1)"},
    "100%":{transform:"scale(2, 2)"}
  },
  zoomin:{
    animation: `$zoomIn`,
    animationDuration:"2s",
    animationTimingFunction:"linear"
  },

  "@keyframes zoomOut":{
    "0%":{transform:"scale(1, 1)"},
    "100%":{transform:"scale(0.5, 0.5)"}
  },
  zoomout:{
    animation: `$zoomOut`,
    animationDuration:"2s",
    animationTimingFunction:"linear"
  },

  "@keyframes leftIn":{
    "0%":{transform:"translateX(-100%)"},
    "100%":{transform:"translateX(0%)"}
  },

  leftin:{
    animation:`$leftIn`,
    animationDuration:"2s",
    animationTimingFunction:"linear"
  },

  "@keyframes rightIn":{
    "0%":{transform:"translateX(100%)"},
    "100%":{transform:"translateX(0%)"}
  },

  rightin:{
    animation:`$rightIn`,
    animationDuration:"2s",
    animationTimingFunction:"linear"
  },

  "@keyframes topBot":{
    "0%":{transform:"translateY(-100%)"},
    "100%":{transform:"translateY(0%)"}
  },

  topbot:{
    animation:`$topBot`,
    animationDuration:"2s",
    animationTimingFunction:"linear"
  },

  "@keyframes flashing":{
    "0%":{filter:"opacity(100%)"},
    "100%":{filter:"opacity(0%)"}
  },

  flash:{
    animation:`$flashing`,
    animationDuration:"0.1s",
    animationTimingFunction:"linear",
    animationIterationCount:10
  },

  "@keyframes bouncing":{
    "0%, 20%, 50%, 80%, 100%":{transform:"translateY(0)"},
    "40%":{transform:"translateY(-30px)"},
    "60%":{transform:"translateY(-15px)"}
  },

  bounce:{
    animation:`$bouncing`,
    animationDuration:"2s",
    animationTimingFunction:"linear"
  }

}));

export default useStyles;