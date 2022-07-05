import React from "react";
import { HomeHeader } from "./components/homeHeader";
import { Carousel } from "./components/carousel";
import Filter from "./components/filter";
import RequestItem from "./components/requestItem";

const rules = [
  { id: 1, label: "앱 개발", gradientStart: "#fff", gradientEnd: "000" },
  { id: 2, label: "웹 프론트", gradientStart: "#fff", gradientEnd: "000" },
  { id: 3, label: "백엔드", gradientStart: "#fff", gradientEnd: "000" },
  { id: 4, label: "UX/UI", gradientStart: "#fff", gradientEnd: "000" },
  { id: 5, label: "서비스기획", gradientStart: "#fff", gradientEnd: "000" },
];

export default function Home() {
  return (
    <>
      <HomeHeader />
      <Carousel />
      <Filter />
      <RequestItem position={rules} />
      <RequestItem position={rules} />
      <RequestItem position={rules} />
    </>
  );
}
