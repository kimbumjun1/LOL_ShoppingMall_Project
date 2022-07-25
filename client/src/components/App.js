import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import UploadProductPage from "./views/UploadProductPage/UploadProductPage";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import DetailProductPage from "./views/DetailProductPage/DetailProductPage";
import CartPage from "./views/CartPage/CartPage";
import HistoryPage from "./views/HistoryPage/HistoryPage";
import TotalProductPage from "./views/LandingPage/TotalProductPage.js";
import DetailProductPage_copy from "./views/DetailProductPage/DetailProductPage_copy.js"
import TotalLegoPage2 from "./views/TotalLegoPage2/TotalLegoPage2";

import TotalLegoPage from "./views/TotalLegoPage/TotalLegoPage";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside
//null 아무나, false 로그인한사람 못들어감 true 로그인 한 사람만 들어감
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/totalproduct"component={Auth(TotalProductPage, null)}/>
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
          <Route exact path="/product/:productId" component={Auth(DetailProductPage_copy, null)} />
          <Route exact path="/user/cart" component={Auth(CartPage, true)} />
          <Route exact path="/history" component={Auth(HistoryPage, true)} />
          <Route exact paah="/detailproduct" component={Auth(DetailProductPage_copy, true)} />
          <Route exact path="/total2" component={Auth(TotalLegoPage2, true)} />

          {/* <Route exact path="/total" component={Auth(TotalLegoPage, null)} /> */}
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
