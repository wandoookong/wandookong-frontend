import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import BackIcon from "../../../assets/icons/back.png";
import { colors } from "../../../styles/colors";
import TeamItem from "../../home/components/teamItem";
import { isEmpty } from "../../../@types/utility/typeGuard";
import { getMyCreatedTeamsHistory } from "../../../api/myPages/getMyCreatedTeamsHistory";
import { MyCreatedTeamsHistory } from "../../../@types/dto/myCreatedTeamsHistory";

export default function MyTeamHistoryPage() {
  const navigate = useNavigate();
  const [teamHistoryList, setTeamHistoryList] = useState<MyCreatedTeamsHistory[]>([
    {
      teamId: 1,
      teamCategory: "portfolio",
      title: "",
      closeDueYmd: "",
      createdAt: "",
      teamCapacityList: [
        {
          teamCapacityId: 0,
          roleDetail: "product",
          roleDetailName: "",
          roleMemberCount: 1,
          roleMaxCount: 1,
        },
      ],
    },
  ]);

  useEffect(() => {
    (async function () {
      const response = await getMyCreatedTeamsHistory();
      setTeamHistoryList(response);
    })();
  }, []);

  return (
    <Container>
      <nav>
        <button onClick={() => navigate(-1)} />
        <h1>내가 만든 완두콩 모두보기</h1>
      </nav>
      {isEmpty(teamHistoryList) && <p>생성된 완두콩이 없습니다.</p>}
      {teamHistoryList !== undefined &&
        teamHistoryList.map((item, index) => (
          <TeamItem key={index} teamId={item.teamId} teamData={item} isDday={false} />
        ))}
    </Container>
  );
}

const Container = styled.div`
  nav {
    display: flex;
    align-items: center;
    padding: 44px 16px 4px;

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

  p {
    margin-top: 200px;
    font-size: 14px;
    color: ${colors.grey300};
    text-align: center;
  }
`;
