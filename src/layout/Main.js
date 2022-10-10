import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../pages/MainHeader/MainHeader";

const Main = () => {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Main;
