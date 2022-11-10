import styled from "@emotion/styled";
import { css } from "@emotion/react";
import CheckIcon from "@mui/icons-material/Check";

export function CircleCheckbox({ label, value, checked, disabled, ...rest }) {
  return (
    <Label checked={checked} disabled={disabled}>
      <Image checked={checked} disabled={disabled}>
        {checked && <CheckIcon color="secondary" />}
        {disabled && "나"}
      </Image>
      <input type="checkbox" name="roles" value={value} checked={checked} disabled={disabled} {...rest} />
      {label}
    </Label>
  );
}

const Label = styled.label<{ checked: boolean; disabled: boolean }>`
  display: inline-block;
  margin: 0 15px 20px 0;
  padding: 0;
  width: 53px;
  text-align: center;
  white-space: pre-line;
  font-size: 14px;

  ${(props) => {
    if (!props.checked) {
      return css`
        color: #242c35;
      `;
    }
    return css`
      font-weight: 700;
    `;
  }}
  ${(props) => {
    if (props.disabled) {
      return css`
        color: #a7a7a7;
      `;
    }
  }}
  
  input {
    display: none;
  }
`;

const Image = styled.div<{ checked: boolean; disabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 51px;
  height: 51px;
  margin: 0 0 8px 0;
  border: 0;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;

  ${(props) => {
    if (props.disabled) {
      return css`
        background: #242c35;
        opacity: 40%;
      `;
    }
  }}
  ${(props) => {
    if (!props.checked) {
      return css`
        background: linear-gradient(137.26deg, #ffca02 0%, #648d00 104.28%);
      `;
    }
    return css`
      background: #47b561;
      opacity: 80%;
    `;
  }}
`;
