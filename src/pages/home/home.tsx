import React from "react";
import { HomeHeader } from "./components/homeHeader";
import { Carousel } from "./components/carousel";
import Filter from "./components/filter";
import RequestItem from "./components/requestItem";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <Carousel />
      <Filter />
      <RequestItem />
    </>
  );
}
