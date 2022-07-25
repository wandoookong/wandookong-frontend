import styled from "@emotion/styled";
import { css } from "@emotion/react";
import CheckIcon from "@mui/icons-material/Check";

export function CircleCheckbox({ label, value, checked, disabled, ...rest }) {
  const Label = styled.label`
    display: inline-block;
    margin: 0 20px 20px 0;
    padding: 0;
    width: 60px;
    text-align: center;
    white-space: pre-line;
    font-size: 14px;

    ${() => {
      if (!checked) {
        return css`
          color: #242c35;
        `;
      }
      return css`
        font-weight: 700;
      `;
    }}
    ${() => {
      if (disabled) {
        return css`
          color: #a7a7a7;
        `;
      }
    }}
  `;

  const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 52px;
    margin: 0 0 12px 0;
    border: 0;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;

    ${() => {
      if (disabled) {
        return css`
          background: #242c35;
          opacity: 40%;
        `;
      }
    }}
    ${() => {
      if (!checked) {
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

  const Input = styled.input`
    display: none;
  `;

  return (
    <Label>
      <Image>
        {checked && <CheckIcon color="secondary" />}
        {disabled && "나"}
      </Image>
      <Input type="checkbox" name="roles" value={value} checked={checked} disabled={disabled} {...rest} />
      {label}
    </Label>
  );
}
