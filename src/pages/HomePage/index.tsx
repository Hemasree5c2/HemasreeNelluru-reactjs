import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/molecules/ProductCard";
import { makeStyles } from "@material-ui/styles";
import { useNavigate } from "react-router-dom";
import { CREATE_PRODUCT, DETAILS_ROUTE_WITH_ID } from "../../routes";
import Textfield from "../../components/atoms/Textfield";
import DropDown from "../../components/atoms/Dropdown";
import { Category, Product } from "../../helpers/types";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import { AXIOS_GET } from "../../helpers/axiosHelper";
import { CATEGORY_URL, PRODUCTS_URL } from "../../helpers/apiEndpoints";

const useStyles = makeStyles({
  root: {
    width: "50%",
  },
  filters: {
    marginBottom: "2%",
  },
  addIconGrid: {
    position: "fixed",
    bottom: "10px",
    right: "10px",
  },
  addIcon: {
    height: "60px",
    width: "60px",
    cursor: "pointer",
  },
  text: {
    textAlign: "start",
    display: "flex",
    flexDirection: "column",
    width: "25%",
  },
});

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [category, setCategory] = useState<Category>({});
  const [search, setSearch] = useState("");
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    AXIOS_GET(PRODUCTS_URL).then((res) => {
      setProducts(res?.data?.products);
      setFilteredProducts(res?.data?.products);
    });
    AXIOS_GET(CATEGORY_URL).then((res) => {
      if (res?.data?.categories) {
        setCategories([{ id: "0", name: "All" }, ...res?.data?.categories]);
        setCategory({ id: "0", name: "All" });
      }
    });
  }, []);

  useEffect(() => {
    let filteredItems: Product[] = [];
    if (category?.name === "All" && !search) {
      setFilteredProducts(products);
    } else {
      if (search && category?.name && category?.name !== "All") {
        filteredItems = products?.filter(
          (product) =>
            product?.category === category?.name &&
            product?.name?.toLowerCase()?.includes(search?.toLowerCase())
        );
      } else if (search) {
        filteredItems = products?.filter((product) =>
          product?.name?.toLowerCase()?.includes(search?.toLowerCase())
        );
      } else if (category?.name && category?.name !== "All") {
        filteredItems = products?.filter(
          (product) => product?.category === category?.name
        );
      }
      setFilteredProducts([...filteredItems]);
    }
  }, [search, category, products]);

  const handleAddProduct = () => {
    navigate(CREATE_PRODUCT);
  };

  const handleCategoryChange = (event: any, value: any) => {
    setCategory(value);
  };

  const handleSearch = (
    e: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setSearch(e.target.value as string);
  };

  const handleProductClick = (e: any) => {
    if (e.target.dataset?.index) {
      navigate(DETAILS_ROUTE_WITH_ID(e.target.dataset?.index));
    }
  };

  return (
    <Grid container direction="row" alignItems="center" justifyContent="center">
      <Grid item xs={10} className={classes.filters}>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item xs={4}>
            <Textfield
              placeholder="Search by product name..."
              handleChange={handleSearch}
            />
          </Grid>
          <Grid item xs={3}>
            <DropDown
              placeholder="Categories"
              value={category}
              options={categories ?? []}
              onChange={handleCategoryChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.root} onClick={handleProductClick}>
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          justifyContent="flex-start"
          spacing={4}
        >
          {filteredProducts?.length < 1 && (
            <Grid item>
              <Typography variant="h6">No products available</Typography>
            </Grid>
          )}
          {filteredProducts?.map((product, index) => (
            <Grid item key={index}>
              <ProductCard
                stepIndex={product?._id}
                url={product?.avatar}
                name={product?.name}
                cost={product?.price}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item className={classes.addIconGrid}>
        <AddCircleOutlinedIcon
          onClick={handleAddProduct}
          className={classes.addIcon}
        />
      </Grid>
    </Grid>
  );
};

export default HomePage;
