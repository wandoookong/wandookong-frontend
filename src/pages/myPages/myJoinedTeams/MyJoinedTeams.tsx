import React, { useEffect, useState } from "react";
import { isEmpty } from "../../../@types/utility/typeGuard";
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { useNavigate } from "react-router-dom";
import MyJoinedTeamItem from "./components/myJoinedTeamItem";
import { getMyJoinedTeamsApi } from "../../../api/myPages/getMyJoinedTeamsApi";
import { MyJoinedTeamType } from "../../../@types/dto/myJoinedTeamType";
import MyPageHeader from "../components/myPageHeader";

export default function MyJoinedTeams() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [acceptedTeamData, setAcceptedTeamData] = useState<MyJoinedTeamType[]>([]);

  useEffect(() => {
    (async function () {
      const response = await getMyJoinedTeamsApi();
      setAcceptedTeamData(response);
      setIsLoading(!isLoading);
    })();
  }, []);

  return (
    <Container>
      <MyPageHeader title="참여한 완두콩 보기" onClick={() => navigate(-1)} />
      {isLoading && <p className="loading-wrapper">불러오는 중 입니다...</p>}
      {!isLoading && isEmpty(acceptedTeamData) && <p className="loading-wrapper">참여한 완두콩이 없습니다.</p>}
      <div>
        {!isLoading &&
          acceptedTeamData &&
          acceptedTeamData.map((team, index) => (
            <MyJoinedTeamItem
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
