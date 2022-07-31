import styled from "@emotion/styled";
import { Navigation } from "../../../components/form/navigation";

const Wrapper = styled.div`
  margin: 20px 0;
`;

export default function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
