import React from "react";
import {Box, Typography} from "@material-ui/core";
import Link from "../../utils/Link";

export default function ContactContent() {

  const textStyle = {
    fontWeight:300,
    lineHeight:"1.8",
    marginTop:"1rem"
  };

  return (
    <Box textAlign="justify">

      <Typography variant="body2" style={textStyle}>
        A stone-flagged passage, with the kitchens branching away from it, led by a wooden
        staircase directly to the first floor of the house. It came out upon the landing
        opposite to a second more ornamental stair which came up from the front hall. Out of
        this landing opened the drawing-room and several bedrooms, including those of
        Mr. Cunningham and his son. Holmes walked slowly, taking keen note of the architecture
        of the house. I could tell from his expression that he was on a hot scent, and yet I
        could not in the least imagine in what direction his inferences were leading him.
      </Typography>

      <Typography variant="body2" style={textStyle}>
        His words were cut short by a sudden scream of “Help! Help! Murder!” With a thrill
        I recognised the voice of that of my friend. I rushed madly from the room on to the
        landing. The cries, which had sunk down into a hoarse, inarticulate shouting, came
        from the room which we had first visited. I dashed in, and on into the dressing-room
        beyond. The two Cunninghams were bending over the prostrate figure of Sherlock Holmes,
        the younger clutching his throat with both hands, while the elder seemed to be twisting
        one of his wrists. In an instant the three of us had torn them away from him, and
        Holmes staggered to his feet, very pale and evidently greatly exhausted.
      </Typography>

      <Box mt={5}>
        <Link href="/">
          Go back to the main page
        </Link>
      </Box>

    </Box>
  );

}

