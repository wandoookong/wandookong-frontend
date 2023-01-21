import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import CreatedTeamItem from "../../home/components/createdTeamItem";
import { isEmpty } from "../../../@types/utility/typeGuard";
import { getMyCreatedTeamsHistoryApi } from "../../../api/myPages/getMyCreatedTeamsHistoryApi";
import { MyCreatedTeamsHistory } from "../../../@types/dto/myCreatedTeamsHistory";
import MyPageHeader from "../components/myPageHeader";

export default function MyTeamHistoryPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
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
      const response = await getMyCreatedTeamsHistoryApi();
      setTeamHistoryList(response);
      setIsLoading(!isLoading);
    })();
  }, []);

  return (
    <Container>
      <MyPageHeader title="내가 만든 완두콩 모두보기" onClick={() => navigate(-1)} />
      {isLoading && <p>불러오는 중 입니다...</p>}
      {!isLoading && isEmpty(teamHistoryList) && <p>생성한 완두콩이 없습니다.</p>}
      {!isLoading &&
        teamHistoryList !== undefined &&
        teamHistoryList.map((item, index) => (
          <CreatedTeamItem key={index} teamId={item.teamId} createdTeamItemData={item} isDday={false} />
        ))}
    </Container>
  );
}

const Container = styled.div`
  padding-top: 72px;

  p {
    margin-top: 200px;
    font-size: 14px;
    color: ${colors.grey300};
    text-align: center;
  }
`;
