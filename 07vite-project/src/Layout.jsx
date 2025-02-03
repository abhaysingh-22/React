import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import {Outlet} from "react-router-dom";    // Outlet jo h vo iss layout file ko as a base use kre ga jismai vo haeder same rakhe ga footer same rakhe ga aur bich mai jo content h vo usko outlet se render kare ga

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default Layout;
