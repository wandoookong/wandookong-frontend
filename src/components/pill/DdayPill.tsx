import { differenceInDays } from "date-fns";
import { colors } from "../../styles/colors";
import styled from "@emotion/styled";

export function DdayPill({ closeDueYmd }) {
  const diff = differenceInDays(new Date(closeDueYmd), new Date());
  return <Container>D-{diff}</Container>;
}

const Container = styled.span`
  flex: 0 auto;
  align-self: start;
  padding: 3px 8px;
  background: ${colors.subBrand900};
  border-radius: 18px;
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: ${colors.white};
`;
