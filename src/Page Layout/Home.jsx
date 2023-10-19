import React from "react";
import Banner from "../Component/Banner";
import Card from "../Component/Brand-Card/Card";
import SkinCare from "../Component/SkinCare/SkinCare";
import Claim from "../Component/BrandClaim/Claim";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Claim></Claim>
      <Card></Card>
      <SkinCare></SkinCare>
    </>
  );
};

export default Home;
