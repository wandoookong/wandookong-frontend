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
import { getIsValidToCreateTeamApi } from "../../api/home/getIsValidToCreateTeamApi";
import FloatingModal from "../../components/modal/FloatingModal";
import { IsValidToCreateTeam } from "../../@types/dto/isValidToCreateTeam";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCreateTeamFailModalOn, setIsCreateTeamFailModalOn] = useState(false);
  const [createdMyTeamId, setCreatedMyTeamId] = useState(0);
  const [teamsData, setTeamsData] = useState<Team[]>([]);
  const [findTeamFilters, setFindTeamFilters] = useState<TeamFilters>({
    roleDetail: "",
    teamCategory: "",
  });

  const onClickHandler = () => {
    setIsCreateTeamFailModalOn(!isCreateTeamFailModalOn);
    navigate(`/team/${createdMyTeamId}`);
  };

  const onClickCreateTeam = async () => {
    const response: IsValidToCreateTeam = await getIsValidToCreateTeamApi();
    if (!response.result) {
      setCreatedMyTeamId(response.teamId);
      setIsCreateTeamFailModalOn(!isCreateTeamFailModalOn);
      return;
    }
    return navigate("/request");
  };

  useEffect(() => {
    (async function () {
      const response = await getHomeTeamsApi(location.search);
      setTeamsData(response);
    })();
  }, [location]);

  return (
    <>
      {isCreateTeamFailModalOn && (
        <FloatingModal
          title="아직 모집중인 완두콩이 있습니다!"
          content="현재 모집중인 완두콩이 마감 되어야 새로운 완두콩을 만들 수 있습니다. 모집중인 완두콩으로 이동하시겠습니까?"
          buttonLabel="내 완두콩으로 이동하기"
          onClickButton={onClickHandler}
          onClose={() => setIsCreateTeamFailModalOn(!isCreateTeamFailModalOn)}
          showClose={true}
        />
      )}
      <HomeHeader />
      <Container>
        <Carousel>
          <button onClick={onClickCreateTeam}>완두콩 만들기</button>
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
