import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import MapComponent from "../../components/Map";

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.map}>
        <MapComponent />
      </div>
      <div className={classes.text}>
        <Typography variant="h4">
          Welcome to My Roadtrip App!
        </Typography>
        <Typography variant="h5">
          Here you will be able to view someone else's roadtrips, their
          suggestions and tips. You will also be able to register and share your
          memories of your favorites roadtrips.
        </Typography>
        <Typography variant="h5">
          Let's grow this app as much as possible so others can continue
          travelling and getting to know the amazing places this world has for
          us.
        </Typography>
      </div>
    </div>
  );
}
