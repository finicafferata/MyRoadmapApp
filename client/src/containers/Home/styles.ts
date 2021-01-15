import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column"
      },
    },
    map: {
      order: 1,
      flexGrow: 1,
      [theme.breakpoints.down("sm")]: {
        order: 1,
        marginBottom: "20px",
      },
    },
    text: {
      order: 2,
      position: "relative",
      display: "block",
      margin: "50px",
      [theme.breakpoints.down("sm")]: {
        order: 2,
        marginBottom: "40px",
      },
    },
  })
);

export default useStyles;
