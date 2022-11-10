import { css } from "@emotion/react";
import styled from "@emotion/styled";
import CheckIcon from "@mui/icons-material/Check";

export function RadioButton({ label, description, checked, ...rest }) {
  return (
    <Container checked={checked}>
      <label>
        <input type="radio" name="category" checked={checked} {...rest} />
        {label}
        <div>
          <p>{description}</p>
          {checked && <CheckIcon sx={{ fontSize: 24, m: 0 }} />}
        </div>
      </label>
    </Container>
  );
}

const Container = styled.div<{ checked: boolean }>`
  width: auto;
  height: auto;
  margin-bottom: 8px;
  padding: 12px 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;

  ${(props) => {
    if (!props.checked) {
      return css`
        box-shadow: 0 0 0 2px #95be8d inset;
        box-sizing: border-box;
      `;
    }
    return css`
      background: #afd89e;
      box-shadow: none;
    `;
  }}

  label {
    display: block;
    font-weight: 700;
    color: #242c35;

    input {
      display: none;
    }

    div {
      display: flex;
      margin-top: 8px;
    }

    p {
      display: inline-block;
      max-width: 229px;
      margin: 0 39px 0 0;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      color: #242c35;
    }
  }
`;
