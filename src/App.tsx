import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Header from "./components/molecules/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CREATE_PRODUCT, DETAILS_ROUTE, HOME_ROUTE } from "./routes";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AddProductPage from "./pages/AddProductPage";

function App() {
  return (
    <div className="App">
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={10}>
          <Header />
        </Grid>
      </Grid>
      <BrowserRouter basename="/">
        <Routes>
          <Route path={HOME_ROUTE} element={<HomePage />} />
          <Route path={DETAILS_ROUTE} element={<ProductPage />} />
          <Route path={CREATE_PRODUCT} element={<AddProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
