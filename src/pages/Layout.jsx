import React from "react";
import MenuHead from "../components/MenuHead";
import styled from "styled-components";
import image from "../images/background-image.jpg";
import { Outlet } from "react-router-dom";

function Layout() {
  const BgPage = styled.div`
    background-image: url(${image});
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: white;
  `;
  return (
    <BgPage>
      <MenuHead />
      <div className="container">
        <Outlet />
      </div>
    </BgPage>
  );
}

export default Layout;
