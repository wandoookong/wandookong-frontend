import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { colors } from "../../../../styles/colors";
import { careerRangeText, roleMainText } from "../../../../services/convertValueToName";
import { UserMyInfo } from "../../../../@types/dto/userMyInfo";

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
        <p>
          {roleMainText(roleMain)}, {careerRangeText(careerRange)},&nbsp;
          {tagList.map((tag, index) => {
            if (index + 1 !== tagList.length) {
              return tag + ", ";
            }
            return tag;
          })}
        </p>
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
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      overflow: hidden;

      strong {
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
        color: ${colors.grey900};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: break-all;
      }

      span {
        margin-top: 5px;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: ${colors.grey300};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: break-all;
      }
    }

    button {
      flex: 0 0 auto;
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
    flex-wrap: nowrap;
    width: 100%;
    padding: 12px 16px;
    background: ${colors.white};
    border-radius: 36px;
    box-sizing: border-box;

    span {
      min-width: 42px;
      font-size: 12px;
      font-weight: 700;
      line-height: 143%;
      letter-spacing: -0.005em;
      color: ${colors.grey900};
    }

    p {
      margin-left: 10px;
      font-size: 12px;
      font-weight: 400;
      line-height: 143%;
      letter-spacing: -0.005em;
      color: ${colors.grey900};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: break-all;
    }
  }
`;
