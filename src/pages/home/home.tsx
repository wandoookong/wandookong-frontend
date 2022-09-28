import React, { useEffect, useState } from "react";
import { HomeHeader } from "./components/homeHeader";
import { Carousel } from "./components/carousel";
import Filter from "./components/filter";
import RequestItem from "./components/requestItem";
import styled from "@emotion/styled";
import { roleData } from "../requestForm/requestFormSteps/roleData";
import TeamFilter from "../../api/teamFilter";
import { useLocation } from "react-router-dom";

export default function Home() {
  // const [teamData, setTeamData] = useState({});
  const location = useLocation();
  const [filters, setFilters] = useState<TeamFilters>({
    roleDetail: "",
    teamCategory: "",
  });

  // useEffect(() => {
  //   (async function () {
  //     const response = await TeamFilter();
  //     if (response.status !== 200) {
  //       return alert("다시 시도해주세요.");
  //     }
  //     return console.log(response);
  //   })();
  // }, [location]);

  return (
    <div>
      <HomeHeader />
      <Container>
        <Carousel />
        <Filter filters={filters} setFilters={setFilters} />
        <RequestItem position={roleData} />
        <RequestItem position={roleData} />
        <RequestItem position={roleData} />
        <RequestItem position={roleData} />
        <RequestItem position={roleData} />
      </Container>
    </div>
  );
}
// function TeamApi() {
//   throw new Error("Function not implemented.");
// }

const Container = styled.div`
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
`;
