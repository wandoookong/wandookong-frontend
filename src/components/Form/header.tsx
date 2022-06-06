import styled from "@emotion/styled";

export function Header({ title }) {
  const Wrap = styled.div`
    display: block;
    width: 100%;
    height: auto;
    padding: 0 0 24px 0;
    background: #ffffff;
  `;

  const Header = styled.h1`
    margin: 0;
    font-size: 30px;
    line-height: 1.5;
    white-space: pre-line;
  `;

  return (
    <Wrap>
      <Header>{title}</Header>
    </Wrap>
  );
}

export function HeaderSubText({ title, subText }) {
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

  return (
    <Wrap>
      <Header>{title}</Header>
      <SubText>{subText}</SubText>
    </Wrap>
  );
}
