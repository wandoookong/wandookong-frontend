import React, { useCallback, useMemo } from "react";
import { HomeHeader } from "./components/homeHeader";
import { Carousel } from "./components/carousel";
import Filter from "./components/filter";
import RequestItem from "./components/requestItem";
import styled from "@emotion/styled";

const rules = [
  { id: 1, label: "앱 개발", gradientStart: "#fff", gradientEnd: "000" },
  { id: 2, label: "웹 프론트", gradientStart: "#fff", gradientEnd: "000" },
  { id: 3, label: "백엔드", gradientStart: "#fff", gradientEnd: "000" },
  { id: 4, label: "UX/UI", gradientStart: "#fff", gradientEnd: "000" },
  { id: 5, label: "서비스\n기획", gradientStart: "#fff", gradientEnd: "000" },
];

const Container = styled.div`
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <Container>
        <Carousel />
        <Filter />
        <RequestItem position={rules} />
        <RequestItem position={rules} />
        <RequestItem position={rules} />
      </Container>
    </div>
  );
}
