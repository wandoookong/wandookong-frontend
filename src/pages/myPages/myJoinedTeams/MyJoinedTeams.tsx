import React, { useEffect, useState } from "react";
import { isEmpty } from "../../../@types/utility/typeGuard";
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { useNavigate } from "react-router-dom";
import JoinedItem from "./components/joinedItem";
import { getMyJoinedTeamsApi } from "../../../api/myPages/getMyJoinedTeamsApi";
import { MyJoinedTeamType } from "../../../@types/dto/myJoinedTeamType";
import MyPageHeader from "../components/myPageHeader";

export default function MyJoinedTeams() {
  const navigate = useNavigate();
  const [isFetchValid, setIsFetchValid] = useState(false);
  const [acceptedTeamData, setAcceptedTeamData] = useState<MyJoinedTeamType[]>([]);

  useEffect(() => {
    (async function () {
      const response = await getMyJoinedTeamsApi();
      setAcceptedTeamData(response);
      setIsFetchValid(!isFetchValid);
    })();
  }, []);

  return (
    <Container>
      <MyPageHeader title="참여한 완두콩 보기" onClick={() => navigate(-1)} />
      {!isFetchValid && <p className="loading-wrapper">불러오는 중 입니다...</p>}
      {isFetchValid && isEmpty(acceptedTeamData) && <p className="loading-wrapper">생성된 완두콩이 없습니다.</p>}
      <div>
        {isFetchValid &&
          acceptedTeamData &&
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
              contact={team.contact}
            />
          ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 72px;

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
