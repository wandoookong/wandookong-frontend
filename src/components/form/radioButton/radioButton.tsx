import { css } from "@emotion/react";
import styled from "@emotion/styled";
import CheckIcon from "@mui/icons-material/Check";

export function RadioButton({ label, description, checked, ...rest }) {
  const Wrap = styled.div`
    width: auto;
    height: auto;
    margin-bottom: 8px;
    padding: 12px 12px;
    border-radius: 4px;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;

    ${() => {
      if (!checked) {
        return css`
          //border: 2px solid #95be8d;
          box-shadow: 0px 0px 0px 2px #95be8d inset;
          box-sizing: border-box;
        `;
      }
      return css`
        background: #afd89e;
        box-shadow: none;
      `;
    }}
  `;

  const Label = styled.label`
    display: block;
    font-weight: 600;
    color: #242c35;
    input {
      display: none;
    }
    div {
      display: flex;
      margin-top: 8px;
    }
  `;

  const SubText = styled.p`
    margin: 0 39px 0 0;
    font-size: 12px;
    font-weight: 400;
    color: #242c35;
    display: inline-block;
  `;

  return (
    <Wrap>
      <Label>
        <input type="radio" name="category" checked={checked} {...rest} />
        {label}
        <div>
          <SubText>{description}</SubText>
          {checked && <CheckIcon sx={{ fontSize: 24, m: 0 }} />}
        </div>
      </Label>
    </Wrap>
  );
}
