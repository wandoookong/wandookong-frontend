import React, { useCallback, useEffect, useMemo, useState } from "react";
import { HomeHeader } from "./components/homeHeader";
import { Carousel } from "./components/carousel";
import Filter from "./components/filter";
import RequestItem from "./components/requestItem";
import styled from "@emotion/styled";
import { roleData } from "../requestForm/requestFormSteps/roleData";
import TeamApi from "../../api/teamApi";

const Container = styled.div`
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export default function Home() {
  const [teamData, setTeamData] = useState([]);
  const [checked, setChecked] = useState(false);

  // const onClick = (e) => {
  //   if()
  //   setChecked(e.currentTarget.name);
  // };

  // useEffect(() => {
  //   (async function () {
  //     const response = await TeamApi.getTeamList();
  // if (!response) {
  //   alert(response.message);
  //   return;
  // }
  // setTeamData(response.list);
  //   })();
  // }, []);

  return (
    <div>
      <HomeHeader />
      <Container>
        <Carousel />
        <Filter checked={checked} />
        <RequestItem position={roleData} />
        <RequestItem position={roleData} />
        <RequestItem position={roleData} />
        <RequestItem position={roleData} />
        <RequestItem position={roleData} />
      </Container>
    </div>
  );
}
