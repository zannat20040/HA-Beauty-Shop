import React from "react";
import Banner from "../Component/Banner";
import Card from "../Component/Brand-Card/Card";
import SkinCare from "../Component/SkinCare/SkinCare";
import Claim from "../Component/Claim";
import Policy from "../Component/Policy";
import Footer from "../Component/Footer";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Claim></Claim>
      <Card></Card>
      <SkinCare></SkinCare>
      <Policy></Policy>
      <Footer></Footer>
    </>
  );
};

export default Home;
