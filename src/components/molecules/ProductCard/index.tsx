import { Grid, Typography } from "@material-ui/core";
import React from "react";
import ImageCard from "../../atoms/ImageCard";

export interface ProductCardProps {
  url?: string;
  name?: string;
  cost?: string | number;
  stepIndex?: string | number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  url,
  name,
  cost,
  stepIndex,
}) => {
  return (
    <Grid container direction="column" spacing={1} style={{ width: "200px" }}>
      <Grid item>
        <ImageCard url={url} stepIndex={stepIndex} />
      </Grid>
      <Grid item>
        <Typography style={{ flexShrink: 1 }}>{name}</Typography>
      </Grid>
      <Grid item>
        <Typography>$ {cost}</Typography>
      </Grid>
    </Grid>
  );
};

export default ProductCard;
