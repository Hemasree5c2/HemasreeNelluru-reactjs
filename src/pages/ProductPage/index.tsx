import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import ImageCard from "../../components/atoms/ImageCard";
import { makeStyles } from "@material-ui/styles";
import { Product } from "../../helpers/types";
import { AXIOS_GET } from "../../helpers/axiosHelper";
import { PRODUCTS_URL } from "../../helpers/apiEndpoints";
import { HOME_ROUTE } from "../../routes";

const useStyles = makeStyles({
  root: {
    width: "50%",
  },
  price: {
    textAlign: "start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "50%",
  },
  divider: {
    width: "48%",
    marginTop: "8px",
    borderTop: "1px solid black",
  },
});

function ProductPage() {
  const [product, setProduct] = useState<Product>({});
  const params = useParams();
  const classes = useStyles();

  useEffect(() => {
    AXIOS_GET(`${PRODUCTS_URL}/${params?.id}`).then((res) => {
      setProduct(res?.data?.product);
    });
  }, [params?.id]);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={1}
    >
      {product ? (
        <>
          <Grid item className={classes.root}>
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <ImageCard url={product?.avatar} />
              </Grid>
              <Grid item className={classes.price}>
                <Typography variant="h4">
                  <b>{product?.name}</b>
                </Typography>
                <Typography variant="h6">${product?.price}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.divider}></Grid>
          <Grid item className={classes.price}>
            <Typography variant="h6">
              <b>Description</b>
            </Typography>
          </Grid>
          <Grid item className={classes.price}>
            <Typography>{product?.description}</Typography>
          </Grid>
        </>
      ) : (
        <Typography variant="h6">
          Please select a product to view details{" "}
          <a href={HOME_ROUTE}>Redirect to Home Page</a>
        </Typography>
      )}
    </Grid>
  );
}

export default ProductPage;
