import styled from "@emotion/styled";

const Wrap = styled.div`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 24px;
  background: #ffffff;
`;

const Header = styled.h1`
  margin: 0 0 8px 0;
  font-size: 30px;
  line-height: 1.5;
  white-space: pre-line;
`;

const SubText = styled.p`
  margin: 0;
  font-size: 16px;
  color: #555;
`;

export function HeaderSubText({ title, subText }) {
  return (
    <Wrap>
      <Header>{title}</Header>
      <SubText>{subText}</SubText>
    </Wrap>
  );
}
