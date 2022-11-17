import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { careerRangeText, roleMainText } from "../utilities/convertValueToName";
import { UserMyInfo } from "../../../api/types/userType";

export default function MyInfo({ nickname, email, tagList, careerRange, roleMain }: UserMyInfo) {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="user-info-wrapper">
        <div>
          <strong>{nickname}</strong>
          <span>{email}</span>
        </div>
        <button onClick={() => navigate("/my-profile")}>수정</button>
      </div>
      <div className="tag-wrapper">
        <span>소개태그</span>
        <ul>
          <li>{roleMainText(roleMain)}</li>
          <li>{careerRangeText(careerRange)}</li>
          {tagList.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: 0 20px;

  div.user-info-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 16px 0;

    div {
      display: flex;
      flex-direction: column;

      strong {
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
        color: ${colors.grey900};
      }

      span {
        margin-top: 5px;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: ${colors.grey300};
      }
    }

    button {
      padding: 4px 8px;
      background: ${colors.brand300};
      border-radius: 31px;
      font-size: 12px;
      font-weight: 500;
      line-height: 14px;
      color: ${colors.grey900};
      border: none;
      cursor: pointer;
    }
  }

  div.tag-wrapper {
    display: flex;
    width: 100%;
    padding: 12px 16px;
    background: ${colors.white};
    border-radius: 36px;
    box-sizing: border-box;

    span {
      font-size: 12px;
      font-weight: 700;
      line-height: 143%;
      letter-spacing: -0.005em;
      color: ${colors.grey900};
    }

    ul {
      display: -webkit-box;
      margin-left: 10px;
      padding: 0;
      font-size: 12px;
      font-weight: 400;
      line-height: 143%;
      letter-spacing: -0.005em;
      color: ${colors.grey900};

      li {
        white-space: pre;
        &::after {
          content: ", ";
        }
      }

      li:last-child {
        &::after {
          content: "";
        }
      }
    }
  }
`;
