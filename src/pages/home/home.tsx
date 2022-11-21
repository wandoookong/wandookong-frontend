import React, { useEffect, useState } from "react";
import { HomeHeader } from "./components/homeHeader";
import FindTeamFilter from "./components/findTeamFilter";
import TeamItem from "./components/teamItem";
import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";
import { isEmpty } from "../../@types/utility/typeGuard";
import { colors } from "../../styles/colors";
import CarouselImg from "./assets/image.jpg";
import { getHomeTeamsApi } from "../../api/home/getHomeTeamsApi";
import { TeamFilters } from "../../@types/model/homeCategoryFilters";
import { Team } from "../../@types/dto/getHomeTeams";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [teamsData, setTeamsData] = useState<Team[]>([]);
  const [findTeamFilters, setFindTeamFilters] = useState<TeamFilters>({
    roleDetail: "",
    teamCategory: "",
  });

  useEffect(() => {
    (async function () {
      const response = await getHomeTeamsApi(location.search);
      setTeamsData(response);
    })();
  }, [location]);

  return (
    <>
      <HomeHeader />
      <Container>
        <Carousel>
          <button onClick={() => navigate("/request")}>완두콩 만들기</button>
        </Carousel>
        <FindTeamFilter filters={findTeamFilters} setFilters={setFindTeamFilters} />
        {!teamsData && <p>완두콩 불러오는 중...</p>}
        {isEmpty(teamsData) && <p>아직 만들어진 완두콩이 없습니다.</p>}
        {!isEmpty(teamsData) &&
          teamsData.map((data, index) => <TeamItem key={index} teamId={data.teamId} teamData={data} isDday={true} />)}
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
    color: ${colors.grey600};
    text-align: center;
  }
`;

const Carousel = styled.div`
  top: 0;
  width: 100%;
  height: 360px;
  background: transparent url(${CarouselImg}) center / 100% no-repeat;
  background-size: cover;
  border-radius: 0 0 8px 8px;
  padding: 280px 20px 20px 20px;
  box-sizing: border-box;

  button {
    margin: 0;
    width: 100%;
    height: 52px;
    border-radius: 12px;
    border: 0;
    background: ${colors.brand900};
    font-size: 16px;
    font-weight: bold;
    color: ${colors.white};
    cursor: pointer;
  }
`;
