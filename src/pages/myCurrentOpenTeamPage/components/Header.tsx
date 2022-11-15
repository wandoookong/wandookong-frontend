/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";

const style = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  margin-top: 44px;

  svg {
    margin: 0;
  }
`;

export default function Header({ onClickDelete }) {
  return (
    <section css={style}>
      <ArrowBackIcon sx={{ fontSize: 24, ml: 1 }} onClick={() => window.history.back()} />
      <DeleteIcon sx={{ fontSize: 24, ml: 1 }} onClick={onClickDelete} />
    </section>
  );
}
