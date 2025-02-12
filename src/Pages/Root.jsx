import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";
import { RootContainer } from "../Components/Styled-Components/RootComponent";

const Root = () => {
  return (
    <RootContainer>
      <SideBar />
      <Outlet />
    </RootContainer>
  );
};

export default Root;
