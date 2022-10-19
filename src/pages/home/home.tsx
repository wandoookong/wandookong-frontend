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
      // if (response.status !== 200) {
      //   return alert("다시 시도해주세요.");
      // }
    })();
  }, [location]);

  //TODO 헤더 로그인 여부에 따라 변경

  return (
    <>
      <HomeHeader />
      <Container>
        <Carousel />
        <Filter filters={filters} setFilters={setFilters} />
        {teamData.list.length === 0 && <EmptyPage>아직 만들어진 완두콩이 없습니다.</EmptyPage>}
        {teamData.list.length > 0 &&
          teamData.list.map((teamDataList) => (
            <RequestItem key={teamDataList.teamId} teamId={teamDataList.teamId} content={teamDataList} />
          ))}
      </Container>
    </>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-y: hidden;
`;

const EmptyPage = styled.p`
  margin-top: 80px;
  font-size: 14px;
  color: #999999;
  text-align: center;
`;
