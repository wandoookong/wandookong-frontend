import React, { useEffect, useState } from "react";
import { HomeHeader } from "./components/homeHeader";
import FindTeamFilter from "./components/findTeamFilter";
import CreatedTeamItem from "./components/createdTeamItem";
import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";
import { isEmpty } from "../../@types/utility/typeGuard";
import { colors } from "../../styles/colors";
import CarouselImg from "./assets/mainBanner.png";
import { CreatedTeam } from "../../@types/dto/getHomeTeam";
import { getIsValidToCreateTeamApi } from "../../api/home/getIsValidToCreateTeamApi";
import DialogueModal from "../../components/modal/DialogueModal";
import { IsValidToCreateTeam } from "../../@types/dto/isValidToCreateTeam";
import WalkThrough from "./walkThrough";
import { getCreateTeamsApi } from "../../api/home/getCreateTeamsApi";

export default function Home() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [isWalkThroughClicked, setIsWalkThroughClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreateTeamFailModalOn, setIsCreateTeamFailModalOn] = useState(false);
  const [createdMyTeamId, setCreatedMyTeamId] = useState(0);
  const [createdTeamData, setCreatedTeamData] = useState<CreatedTeam[]>([]);

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
    navigate("/request");
  };

  const onCloseModalHandler = () => {
    setIsCreateTeamFailModalOn(!isCreateTeamFailModalOn);
    navigate(`/team/${createdMyTeamId}`);
  };

  useEffect(() => {
    (async function () {
      await setIsLoading(true);
      const response = await getCreateTeamsApi(search);
      setCreatedTeamData(response);
      setIsLoading(false);
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
        <DialogueModal
          title="아직 모집중인 완두콩이 있습니다!"
          content="현재 모집중인 완두콩이 마감 되어야 새로운 완두콩을 만들 수 있습니다. 모집중인 완두콩으로 이동하시겠습니까?"
          modalIcon="exclamation"
          singleButtonLabel="내 완두콩으로 이동하기"
          onClickSingleButton={onCloseModalHandler}
          onClose={() => setIsCreateTeamFailModalOn(!isCreateTeamFailModalOn)}
          showCloseButton={true}
        />
      )}
      {isWalkThroughClicked && (
        <>
          <HomeHeader onCreateTeamHandler={onCreateTeamHandler} />
          <Container>
            <Carousel>
              <button onClick={onCreateTeamHandler}>완두콩 만들기</button>
            </Carousel>
            <FindTeamFilter />
            {isLoading && <p>완두콩 불러오는 중...</p>}
            {!isLoading && isEmpty(createdTeamData) && <p>아직 만들어진 완두콩이 없습니다.</p>}
            {!isLoading &&
              !isEmpty(createdTeamData) &&
              createdTeamData.map((data, index) => (
                <CreatedTeamItem key={index} teamId={data.teamId} createdTeamItemData={data} isDday={true} />
              ))}
          </Container>
          <Footer>
            <h1>완두콩</h1>
            <ul>
              <li>
                <button onClick={() => navigate("/terms")}>서비스 이용약관</button>
              </li>
              <li>
                <button onClick={() => navigate("/privacy")}>개인정보처리방침</button>
              </li>
            </ul>
          </Footer>
        </>
      )}
    </>
  );
}

const Container = styled.main`
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

const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px 16px 40px;
  border-top: 1px solid ${colors.subBrand50};

  h1 {
    display: inline-block;
    font-weight: 700;
    font-size: 15px;
  }

  ul {
    display: flex;
    gap: 18px;

    li {
      button {
        padding: 0;
        border: none;
        background: none;
        color: ${colors.grey900};
        font-size: 12px;
        cursor: pointer;
      }
    }
  }
`;
