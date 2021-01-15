import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  map: {
    minHeight: "80vh",
    width: "80vh",
    margin: "10px",
    [theme.breakpoints.down("sm")]: {
      minHeight: "80vw",
      width: "80vw"
    },
  },
}));

export default useStyles;

