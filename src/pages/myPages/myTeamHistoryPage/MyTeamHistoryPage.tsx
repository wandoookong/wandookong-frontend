import React, { useEffect, useState } from "react";
import MyTeamApi from "../../../api/myTeamApi";
import { MyTeamHistoryReturnType } from "../../../api/types/myTeamType";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import BackIcon from "../../../assets/icons/back.png";
import { colors } from "../../../styles/colors";
import TeamItem from "../../home/components/teamItem";
import { isEmpty } from "../../../@types/utility/typeGuard";

export default function MyTeamHistoryPage() {
  const navigate = useNavigate();
  const [teamHistoryList, setTeamHistoryList] = useState<MyTeamHistoryReturnType>({
    list: [
      {
        teamId: 1,
        teamCategory: "portfolio",
        title: "",
        closeDueYmd: "",
        createdAt: new Date(),
        teamCapacityList: [
          {
            teamCapacityId: 0,
            roleDetail: "product",
            roleDetailName: "",
            roleMaxCount: 1,
            roleMemberCount: 1,
          },
        ],
      },
    ],
  });

  useEffect(() => {
    (async function () {
      const response = await MyTeamApi.getMyTeamHistory();
      setTeamHistoryList(response);
    })();
  }, []);

  return (
    <Container>
      <nav>
        <button onClick={() => navigate(-1)} />
        <h1>내가 만든 완두콩 모두보기</h1>
      </nav>
      {isEmpty(teamHistoryList.list) && <p>이전 기록이 없습니다.</p>}
      {teamHistoryList.list !== undefined &&
        teamHistoryList.list.map((item, index) => <TeamItem key={index} teamId={item.teamId} content={item} />)}
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
`;
