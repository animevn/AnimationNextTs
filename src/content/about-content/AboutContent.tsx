import React from "react";
import {Typography, Box} from "@material-ui/core";
import Link from "../../utils/Link";

export default function AboutContent() {

  const textStyle = {
    fontWeight:300,
    lineHeight:"1.8",
    marginTop:"1rem"
  };

  return (
    <Box textAlign="justify">

      <Typography variant="body2" style={textStyle}>
        I was not surprised. Indeed, my only wonder was that he had not already been mixed up
        in this extraordinary case, which was the one topic of conversation through the length
        and breadth of England. For a whole day my companion had rambled about the room with
        his chin upon his chest and his brows knitted, charging and recharging his pipe with
        the strongest black tobacco, and absolutely deaf to any of my questions or remarks.
        Fresh editions of every paper had been sent up by our news agent, only to be glanced
        over and tossed down into a corner. Yet, silent as he was, I knew perfectly well what
        it was over which he was brooding. There was but one problem before the public which
        could challenge his powers of analysis, and that was the singular disappearance of the
        favourite for the Wessex Cup, and the tragic murder of its trainer. When, therefore,
        he suddenly announced his intention of setting out for the scene of the drama it was
        only what I had both expected and hoped for.
      </Typography>

      <Typography variant="body2" style={textStyle}>
        It was evening before we reached the little town of Tavistock, which lies, like
        the boss of a shield, in the middle of the huge circle of Dartmoor. Two gentlemen
        were awaiting us in the station—the one a tall, fair man with lion-like hair and
        beard and curiously penetrating light blue eyes; the other a small, alert person,
        very neat and dapper, in a frock-coat and gaiters, with trim little side-whiskers
        and an eye-glass. The latter was Colonel Ross, the well-known sportsman; the other,
        Inspector Gregory, a man who was rapidly making his name in the English detective
        service.
      </Typography>

      <Box mt={5}>
        <Link href="/">
          Go back to the main page
        </Link>
      </Box>
    </Box>
  );

}

