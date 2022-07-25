import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin: 0;
  padding: 0 20px;
`;

export default function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
