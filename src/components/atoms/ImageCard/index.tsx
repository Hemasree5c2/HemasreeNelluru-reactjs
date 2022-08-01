import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export interface ImageCardProps {
  url?: string;
  stepIndex?: string | number;
}

const useStyles = makeStyles({
  root: {
    borderRadius: "8px",
    backgroundColor: "white",
    height: "200px",
    width: "200px",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
    },
  },
});

const ImageCard: React.FC<ImageCardProps> = ({ url, stepIndex }) => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      alignItems="center"
      justifyContent="center"
      direction="row"
      data-index={stepIndex}
    >
      <Grid item>
        <img
          src={url}
          alt="avatar"
          width="180px"
          height="180px"
          data-index={stepIndex}
        />
      </Grid>
    </Grid>
  );
};

export default ImageCard;
