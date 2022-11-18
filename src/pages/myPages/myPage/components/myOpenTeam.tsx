import { DdayPill } from "../../../../components/pill/DdayPill";
import { teamCategoryText } from "../../utilities/convertValueToName";
import styled from "@emotion/styled";
import { colors } from "../../../../styles/colors";
import { useNavigate } from "react-router-dom";
import { TEAM_CATEGORY } from "../../../../api/types/fieldType";

interface Props {
  teamCategory: TEAM_CATEGORY;
  title: string;
  closeDueYmd: string;
  applyCount: number;
  allowCount: number;
  capacityCount: number;
}

export default function MyOpenTeam({ teamCategory, closeDueYmd, title, applyCount, allowCount, capacityCount }: Props) {
  const navigate = useNavigate();
  return (
    <Container>
      <h1>나의 활동</h1>
      <div className="my-team-wrapper">
        <div className="sub-content">
          <span className="team-category">{teamCategoryText(teamCategory)}</span>
          <DdayPill closeDueYmd={closeDueYmd} />
        </div>
        <h2 onClick={() => navigate("/my-current-open")}>{title}</h2>
        <div className="team-applicants-wrapper">
          <div onClick={() => navigate("/my-current-open?tab=apply")}>
            <b>{applyCount}</b>
            <span>신청자</span>
          </div>
          <div onClick={() => navigate("/my-current-open?tab=allow")}>
            <b>
              {allowCount}/{capacityCount}
            </b>
            <span>참여자</span>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  margin: 32px 0 31px 0;
  padding: 0 20px;

  h1 {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    color: ${colors.grey900};
  }

  div.my-team-wrapper {
    margin-top: 16px;
    padding: 16px;
    background: ${colors.white};
    border-radius: 12px;

    div.sub-content {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      span.team-category {
        font-size: 12px;
        font-weight: 400;
        line-height: 143%;
        letter-spacing: -0.005em;
        color: ${colors.grey600};
      }
    }

    h2 {
      margin-top: 4px;
      font-size: 16px;
      font-weight: 700;
      line-height: 19px;
      color: ${colors.grey900};
      cursor: pointer;
    }
  }

  div.team-applicants-wrapper {
    display: flex;
    justify-content: space-between;

    div {
      flex: 1 0 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 16px 0 14px 0;
      border-right: 1px solid ${colors.grey150};
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      color: ${colors.grey900};
      cursor: pointer;

      &:last-child {
        border-right: none;
      }

      b {
        margin-bottom: 10px;
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
`;
