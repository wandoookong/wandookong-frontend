import React, { useEffect, useState } from "react";
import { HomeHeader } from "./components/homeHeader";
import FindTeamFilter from "./components/findTeamFilter";
import TeamItem from "./components/teamItem";
import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";
import { isEmpty } from "../../@types/utility/typeGuard";
import { colors } from "../../styles/colors";
import CarouselImg from "./assets/image.jpg";
import { HomeTeam } from "../../@types/dto/getHomeTeam";
import { getIsValidToCreateTeamApi } from "../../api/home/getIsValidToCreateTeamApi";
import FloatingModal from "../../components/modal/FloatingModal";
import { IsValidToCreateTeam } from "../../@types/dto/isValidToCreateTeam";
import WalkThrough from "./walkThrough";
import { getHomeTeamsApi } from "../../api/home/getHomeTeamsApi";

export default function Home() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [isWalkThroughClicked, setIsWalkThroughClicked] = useState(false);
  const [isFetchValid, setIsFetchValid] = useState(false);
  const [isCreateTeamFailModalOn, setIsCreateTeamFailModalOn] = useState(false);
  const [createdMyTeamId, setCreatedMyTeamId] = useState(0);
  const [teamsData, setTeamsData] = useState<HomeTeam[]>([]);

  const onCloseWalkThroughHandler = () => {
    localStorage.setItem("isWalkThroughClicked", "true");
    setIsWalkThroughClicked(true);
  };

  const onCreateTeamHandler = async () => {
    const response: IsValidToCreateTeam = await getIsValidToCreateTeamApi();
    if (!response.result) {
      setCreatedMyTeamId(response.teamId);
      setIsCreateTeamFailModalOn(!isCreateTeamFailModalOn);
      return;
    }
    return navigate("/request");
  };

  const onCloseModalHandler = () => {
    setIsCreateTeamFailModalOn(!isCreateTeamFailModalOn);
    navigate(`/team/${createdMyTeamId}`);
  };

  useEffect(() => {
    (async function () {
      const response = await getHomeTeamsApi(search);
      setTeamsData(response);
      setIsFetchValid(true);
    })();
  }, [search]);

  useEffect(() => {
    const isValid = localStorage.getItem("isWalkThroughClicked");
    if (isValid === null) {
      localStorage.setItem("isWalkThroughClicked", "false");
      return setIsWalkThroughClicked(false);
    }
    setIsWalkThroughClicked(true);
  }, []);

  return (
    <>
      {!isWalkThroughClicked && <WalkThrough onClick={onCloseWalkThroughHandler} />}
      {isCreateTeamFailModalOn && (
        <FloatingModal
          title="아직 모집중인 완두콩이 있습니다!"
          content="현재 모집중인 완두콩이 마감 되어야 새로운 완두콩을 만들 수 있습니다. 모집중인 완두콩으로 이동하시겠습니까?"
          modalIcon="exclamation"
          buttonLabel="내 완두콩으로 이동하기"
          onClickButton={onCloseModalHandler}
          onClose={() => setIsCreateTeamFailModalOn(!isCreateTeamFailModalOn)}
          showClose={true}
        />
      )}
      <HomeHeader />
      <Container>
        <Carousel>
          <button onClick={onCreateTeamHandler}>완두콩 만들기</button>
        </Carousel>
        <FindTeamFilter />
        {!isFetchValid && <p>완두콩 불러오는 중...</p>}
        {isFetchValid && isEmpty(teamsData) && <p>아직 만들어진 완두콩이 없습니다.</p>}
        {isFetchValid &&
          !isEmpty(teamsData) &&
          teamsData.map((data, index) => <TeamItem key={index} teamId={data.teamId} teamData={data} isDday={true} />)}
      </Container>
    </>
  );
}

const Container = styled.main`
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0 0 80px 0;
  width: 100%;
  overflow-x: hidden;

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
