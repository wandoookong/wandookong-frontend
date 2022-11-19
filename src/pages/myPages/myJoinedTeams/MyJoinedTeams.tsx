import React, { useEffect, useState } from "react";
import { isEmpty } from "../../../@types/utility/typeGuard";
import styled from "@emotion/styled";
import BackIcon from "../../../assets/icons/back.png";
import { colors } from "../../../styles/colors";
import { useNavigate } from "react-router-dom";
import MyTeamApi from "../../../api/myTeamApi";
import { MyTeamPartyReturnType } from "../../../api/types/myTeamType";
import JoinedItem from "./components/joinedItem";

export default function MyJoinedTeams() {
  const navigate = useNavigate();
  const [acceptedTeamData, setAcceptedTeamData] = useState<MyTeamPartyReturnType>({
    list: [
      {
        teamId: 1,
        teamCategory: "portfolio",
        title: "",
        createdAt: "",
        roleDetail: "product",
        memberStatus: "apply",
        memo: "",
      },
    ],
  });

  useEffect(() => {
    (async function () {
      const response = await MyTeamApi.getMyTeamParty();
      setAcceptedTeamData(response);
    })();
  }, []);

  return (
    <Container>
      <nav>
        <button onClick={() => navigate(-1)} />
        <h1>참여한 완두콩 보기</h1>
      </nav>
      {isEmpty(acceptedTeamData.list) && <p className="loading-wrapper">생성된 완두콩이 없습니다.</p>}
      {acceptedTeamData &&
        acceptedTeamData.list.map((team, index) => (
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
    </Container>
  );
}

const Container = styled.div`
  nav {
    display: flex;
    align-items: center;
    margin-bottom: 13px;
    padding: 44px 16px 0;

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
`;
