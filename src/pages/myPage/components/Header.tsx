/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import CloseIcon from "@mui/icons-material/Close";

const style = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 16px;
  margin-top: 44px;
`;

export default function Header() {
  return (
    <section css={style}>
      <CloseIcon sx={{ fontSize: 28, ml: 1 }} onClick={() => window.history.back()} />
    </section>
  );
}
