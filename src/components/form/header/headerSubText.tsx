import styled from "@emotion/styled";

const Wrap = styled.div`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 22px;
`;

const Header = styled.h1`
  margin: 0 0 39px 0;
  font-family: Pretendard;
  font-size: 30px;
  line-height: 1.5;
  white-space: pre-line;
  color: #242c35;
`;

const SubText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  color: #8b8b8b;
`;

export function HeaderSubText({ title, subText }) {
  return (
    <Wrap>
      <Header>{title}</Header>
      <SubText>{subText}</SubText>
    </Wrap>
  );
}
