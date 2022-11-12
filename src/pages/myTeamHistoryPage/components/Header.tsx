/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const style = css`
  display: flex;
  align-items: center;
  margin: 0;
  margin-top: 44px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #242c35;

  svg {
    margin: 0;
  }
  span {
    margin-left: 8px;
  }
`;

export default function Header() {
  return (
    <section css={style}>
      <ArrowBackIcon sx={{ fontSize: 24, ml: 1 }} onClick={() => window.history.back()} />
      <span>내가 만든 완두콩 모두보기</span>
    </section>
  );
}
