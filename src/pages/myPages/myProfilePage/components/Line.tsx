/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";

const styleLine = css`
  margin: 24px 0 20px 0;
  border-top: 1px solid #f0ebd8;
`;

export default function Line() {
  return <div css={styleLine} />;
}
