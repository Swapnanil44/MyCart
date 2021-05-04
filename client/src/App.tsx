import React from "react";
import {
  ThemeProvider,
  CssBaseline,
  Typography,
  Container,
} from "@material-ui/core";
import theme from "./theme";
import useStyles from "./styles";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import HomeScreen from "./Screens/Home/HomeScreen";
import ProductScreen from "./Screens/Product/ProductSceen";

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header themeType={"dark"} />
        <Container maxWidth={"lg"}>
          <main className={classes.mainWrapper}>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/product/:id" component={ProductScreen} />
          </main>
        </Container>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
