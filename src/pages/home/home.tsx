import React, { useEffect, useState } from "react";
import { HomeHeader } from "./components/homeHeader";
import { Carousel } from "./components/carousel";
import Filter from "./components/filter";
import RequestItem from "./components/requestItem";
import styled from "@emotion/styled";
import { roleData } from "../requestForm/requestFormSteps/roleData";
import TeamFilter from "../../api/teamFilter";
import { useLocation, useNavigate } from "react-router-dom";
import { TeamListReturnType, TeamReturnType } from "../../api/types/teamType";
import TeamApi from "../../api/teamApi";

export default function Home() {
  const location = useLocation();
  const [teamData, setTeamData] = useState<TeamListReturnType>({ list: [] });
  const [filters, setFilters] = useState<TeamFilters>({
    roleDetail: "",
    teamCategory: "",
  });

  useEffect(() => {
    (async function () {
      const response = await TeamApi.getTeamList();
      setTeamData(response);
      // if (response.status !== 200) {
      //   return alert("다시 시도해주세요.");
      // }
    })();
  }, [location]);

  return (
    <div>
      <HomeHeader />
      <Container>
        <Carousel />
        <Filter filters={filters} setFilters={setFilters} />
        {teamData.list.length !== 0 ? <RequestItem content={teamData.list[0]} /> : <p>불러오는 중입니다.</p>}
      </Container>
    </div>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
`;
