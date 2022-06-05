import styled from "@emotion/styled";

export function Header() {
  const Wrap = styled.div`
    display: block;
    width: 100%;
    height: auto;
    padding: 0 0 12px 0;
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
      <Header>
        어떤 완두콩을 <br /> 만들고 싶으신가요?
      </Header>
    </Wrap>
  );
}
