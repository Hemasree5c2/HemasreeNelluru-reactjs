import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@material-ui/core";
import { Category, NewProduct } from "../../helpers/types";
import Textfield from "../../components/atoms/Textfield";
import DropDown from "../../components/atoms/Dropdown";
import Button from "../../components/atoms/Button";
import { HOME_ROUTE } from "../../routes";
import { AXIOS_GET, AXIOS_POST } from "../../helpers/axiosHelper";
import { CATEGORY_URL, PRODUCTS_URL } from "../../helpers/apiEndpoints";

function AddProductPage() {
  const [product, setProduct] = useState<NewProduct>({});
  const [categories, setCategories] = useState<Category[]>([]);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    AXIOS_GET(CATEGORY_URL).then((res) => {
      if (res?.data?.categories) {
        setCategories(res?.data?.categories);
      }
    });
  }, []);

  const handleTextField = (
    e: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    let value = e?.target?.value as string;
    if (e.target.name === "developerEmail") {
      setIsValidEmail(
        value?.match(
          "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$"
        )
          ? true
          : false
      );
    } else if (e.target.name === "price") {
      const regExp1 = /^([0-9]*[.])?[0-9]+$/;
      const regExp2 = /^-?[0-9]*[.]+$/;
      if (value && !(regExp1.test(value) || regExp2.test(value))) {
        return;
      }
    }
    setProduct((prevState: NewProduct) => ({
      ...prevState,
      [e.target.name as string]: value,
    }));
  };

  const handleSubmit = () => {
    AXIOS_POST(PRODUCTS_URL, formateReqBody()).then(() => {
      navigate(HOME_ROUTE);
    });
  };

  const formateReqBody = () => {
    return {
      ...product,
      category: product?.category?.name,
    };
  };

  const handleCategoryChange = (event: any, value: any) => {
    setProduct((prevState: NewProduct) => ({
      ...prevState,
      category: value,
    }));
  };

  return (
    <Box alignItems="center" pl="30%">
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={5}>
          <Typography variant="h4">Create Product</Typography>
        </Grid>
        <Grid item xs={5}>
          <Textfield
            placeholder="Product name"
            value={product?.name}
            name="name"
            handleChange={handleTextField}
          />
        </Grid>
        <Grid item xs={5}>
          <Textfield
            placeholder="Developer email"
            error={!isValidEmail}
            value={product?.developerEmail}
            name="developerEmail"
            handleChange={handleTextField}
          />
        </Grid>
        <Grid item xs={5}>
          <Textfield
            placeholder="Description"
            value={product?.description}
            name="description"
            multiline
            handleChange={handleTextField}
          />
        </Grid>
        <Grid item xs={5}>
          <Textfield
            placeholder="Image URL"
            value={product?.avatar}
            name="avatar"
            handleChange={handleTextField}
          />
        </Grid>
        <Grid item xs={5}>
          <DropDown
            placeholder="Categories"
            value={product?.category}
            options={categories ?? []}
            name="category"
            onChange={handleCategoryChange}
          />
        </Grid>
        <Grid item xs={5}>
          <Textfield
            placeholder="Price"
            value={product?.price ?? ""}
            name="price"
            handleChange={handleTextField}
          />
        </Grid>
        <Grid item xs={5}>
          <Button
            label="SUBMIT"
            onClick={handleSubmit}
            disabled={
              !(
                isValidEmail &&
                product?.name &&
                product?.description &&
                product?.avatar &&
                product?.category &&
                product?.price &&
                product?.developerEmail
              )
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AddProductPage;
