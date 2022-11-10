import styled from "@emotion/styled";

export default function Layout({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  margin: 0;
  padding: 0 20px;
`;
