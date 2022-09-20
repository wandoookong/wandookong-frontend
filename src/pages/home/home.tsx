import React, { useState } from "react";
import { HomeHeader } from "./components/homeHeader";
import { Carousel } from "./components/carousel";
import Filter from "./components/filter";
import RequestItem from "./components/requestItem";
import styled from "@emotion/styled";
import { roleData } from "../requestForm/requestFormSteps/roleData";

const Container = styled.div`
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export default function Home() {
  const [teamData, setTeamData] = useState([]);
  const [roleDetailFilters, setRoleDetailFilters] = useState<RoleDetail[]>([]);

  // const onClick = (e) => {
  //   if()
  //   setChecked(e.currentTarget.name);
  // };

  // useEffect(() => {
  //   (async function () {
  //     const response = await TeamApi();
  //     if (!response.success) {
  //       alert(response.message);
  //       return;
  //     }
  //     setTeamData(response.data);
  //   })();
  // }, []);

  return (
    <div>
      <HomeHeader />
      <Container>
        <Carousel />
        <Filter setFilters={setRoleDetailFilters} filters={roleDetailFilters} />
        <RequestItem position={roleData} />
        <RequestItem position={roleData} />
        <RequestItem position={roleData} />
        <RequestItem position={roleData} />
        <RequestItem position={roleData} />
      </Container>
    </div>
  );
}
function TeamApi() {
  throw new Error("Function not implemented.");
}
