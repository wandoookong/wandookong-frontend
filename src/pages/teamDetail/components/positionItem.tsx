import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

interface Props {
  positionName: string;
  isPositionValid: boolean;
  isLeader: boolean;
  careerRangeName: string;
  tags?: string[];
}

export default function PositionItem({ positionName, isPositionValid, isLeader, careerRangeName, tags }: Props) {
  return (
    <Container isPositionEmpty={isPositionValid}>
      <div className="profile-image" />
      <div className="position-content-wrapper">
        <div className="position-header-wrapper">
          <div className="position-title">
            <h3>{isPositionValid ? positionName : positionName + " 콩 모집 중이에요"}</h3>
            {isLeader && <span className="leader-tag">리더</span>}
          </div>
          {isPositionValid && <span className="career-range">{careerRangeName}</span>}
        </div>
        <ul>{isPositionValid && tags?.map((tag, index) => <li key={index}>{tag}</li>)}</ul>
      </div>
    </Container>
  );
}

const Container = styled.section<{ isPositionEmpty: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 0 9px 0;
  padding: 11px 14px 10px 14px;
  background: ${(props) => (props.isPositionEmpty ? colors.white : colors.brand300)};
  border-radius: 8px;
  box-sizing: border-box;

  div.profile-image {
    min-width: 50px;
    height: 50px;
    margin: 0;
    border-radius: 100px;
    background: ${colors.grey900};
  }

  div.position-content-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 6px;

    div.position-header-wrapper {
      display: flex;
      justify-content: space-between;

      div.position-title {
        display: flex;

        h3 {
          display: inline;
          font-size: 14px;
          font-weight: 700;
          line-height: 17px;
          letter-spacing: 0;
          color: ${colors.grey900};
        }

        span.leader-tag {
          margin-left: 8px;
          padding: 0 8px;
          font-size: 10px;
          font-weight: 400;
          line-height: 16px;
          border-radius: 12px;
          color: ${colors.grey900};
          background: ${colors.subBrand700};
        }
      }

      span.career-range {
        font-size: 12px;
        line-height: 14px;
        text-align: right;
        color: ${colors.grey600};
      }
    }

    ul {
      display: flex;
      gap: 5px;
      margin-top: ${(props) => (props.isPositionEmpty ? "7px" : "0")};

      li {
        padding: 6px 8px;
        border-radius: 50px;
        border: 1px solid ${colors.grey100};
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: ${colors.grey900};
      }
    }
  }
`;
