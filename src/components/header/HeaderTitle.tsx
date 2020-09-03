import React from "react";
import {Button, Typography} from "@material-ui/core";
import Link from "../../utils/Link";
import {useRouter} from "next/router";

export default function HeaderTitle() {

  const router = useRouter();

  const homeTitleStyle = {
    fontSize:"1.2rem",
    fontWeight:router.pathname === "/" ? 700 : 400,
  };

  return (
    <Button component={Link} naked href="/">
      <Typography style={homeTitleStyle}>
        NextJs Starter
      </Typography>
    </Button>
  );

}

