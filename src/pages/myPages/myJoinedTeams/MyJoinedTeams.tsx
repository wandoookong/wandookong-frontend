import React, { useEffect, useState } from "react";
import { isEmpty } from "../../../@types/utility/typeGuard";
import styled from "@emotion/styled";
import BackIcon from "../../../assets/icons/back.png";
import { colors } from "../../../styles/colors";
import { useNavigate } from "react-router-dom";
import JoinedItem from "./components/joinedItem";
import { getMyJoinedTeamsApi } from "../../../api/myPages/getMyJoinedTeamsApi";
import { MyJoinedTeamType } from "../../../@types/dto/myJoinedTeamType";

export default function MyJoinedTeams() {
  const navigate = useNavigate();
  const [acceptedTeamData, setAcceptedTeamData] = useState<MyJoinedTeamType[]>([]);

  useEffect(() => {
    (async function () {
      const response = await getMyJoinedTeamsApi();
      setAcceptedTeamData(response);
    })();
  }, []);

  return (
    <Container>
      <nav>
        <button onClick={() => navigate(-1)} />
        <h1>참여한 완두콩 보기</h1>
      </nav>
      {isEmpty(acceptedTeamData) && <p className="loading-wrapper">생성된 완두콩이 없습니다.</p>}
      <div>
        {acceptedTeamData &&
          acceptedTeamData.map((team, index) => (
            <JoinedItem
              key={index}
              teamId={team.teamId}
              createdAt={team.createdAt}
              memo={team.memo}
              memberStatus={team.memberStatus}
              roleDetail={team.roleDetail}
              teamCategory={team.teamCategory}
              title={team.title}
            />
          ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 72px;

  nav {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 13px;
    padding: 44px 16px 0;
    background: ${colors.background};
    z-index: 4;

    button {
      width: 24px;
      height: 24px;
      padding: 0;
      border: none;
      background: transparent url(${BackIcon}) center / 100% no-repeat;
      cursor: pointer;
    }

    h1 {
      margin-left: 8px;
      font-size: 16px;
      font-weight: 700;
      line-height: 19px;
      color: ${colors.grey900};
    }
  }

  p.loading-wrapper {
    margin-top: 200px;
    font-size: 14px;
    color: ${colors.grey300};
    text-align: center;
  }

  div {
    section:last-child {
      border-bottom: none;
    }
  }
`;
