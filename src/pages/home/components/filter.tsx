import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { roleData } from "../../requestForm/requestFormSteps/roleData";

const FilterWrapper = styled.div`
  position: relative;
  margin: 32px 20px 0 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f0ebd8;
  h3 {
    margin: 0;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 700;
  }
`;

const ContentWrapper = styled.div`
  margin-top: 13px;
`;

const FilterContent = styled.div`
  height: 100%;
  overflow: auto;
  white-space: nowrap;
  margin: 0 0 8px 0;
  ::-webkit-scrollbar {
    display: none;
  }
  p {
    display: inline-block;
    font-family: Pretendard;
    font-size: 12px;
    margin: 0 20px 0 0;
  }
`;

const Button = styled.button`
  font-size: 12px;
  font-family: Pretendard;
  width: auto;
  height: 29px;
  border-radius: 32px;
  padding: 6px 8px;
  border: 1px solid #ffdd86;
  background: #fff;
  margin-right: 8px;
`;

export default function Filter({ checked, ...rest }) {
  const Label = styled.label`
    ${() => {
      if (!checked) {
        return css`
          width: auto;
          height: 29px;
          margin-right: 8px;
          padding: 6px 8px;
          background: #fff;
          border: 1px solid #ffdd86;
          border-radius: 32px;
          font-family: Pretendard;
          font-size: 12px;
        `;
      }
      return css`
        width: auto;
        height: 29px;
        margin-right: 8px;
        padding: 6px 8px;
        background: #ffeac5;
        border: 1px solid #ffdd86;
        border-radius: 32px;
        font-family: Pretendard;
        font-size: 12px;
      `;
    }}
    input {
      display: none;
    }
  `;

  return (
    <FilterWrapper>
      <h3>완두콩 찾기</h3>
      <ContentWrapper>
        <FilterContent>
          <p>직군콩 |</p>
          <Label>
            <input type="radio" checked={checked} {...rest} />
            전체
          </Label>
          {roleData.map((role) => (
            <Label key={role.id}>
              <input type="radio" name={role.value} checked={checked} {...rest} />
              {role.label}
            </Label>
          ))}
        </FilterContent>
        <FilterContent>
          <p>카테고리 |</p>
          <Label>
            <input type="radio" checked={checked} {...rest} />
            전체
          </Label>
          <Button>포트폴리오</Button>
          <Button>사이드 프로젝트</Button>
        </FilterContent>
      </ContentWrapper>
    </FilterWrapper>
  );
}
