import React, { useEffect, useState } from "react";
import { HomeHeader } from "./components/homeHeader";
import { Carousel } from "./components/carousel";
import Filter from "./components/filter";
import RequestItem from "./components/requestItem";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import { TeamListReturnType } from "../../api/types/teamType";
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
      const response = await TeamApi.getTeamList(location.search);
      setTeamData(response);
    })();
  }, [location]);

  return (
    <>
      <HomeHeader />
      <Container>
        <Carousel />
        <Filter filters={filters} setFilters={setFilters} />
        {teamData.list.length === 0 && <p>아직 만들어진 완두콩이 없습니다.</p>}
        {teamData.list.length > 0 &&
          teamData.list.map((teamDataList, index) => (
            <RequestItem key={index} teamId={teamDataList.teamId} content={teamDataList} />
          ))}
      </Container>
    </>
  );
}

const Container = styled.main`
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-y: hidden;

  p {
    margin-top: 80px;
    font-size: 14px;
    color: #999999;
    text-align: center;
  }
`;
