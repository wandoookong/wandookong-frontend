import styled from "@emotion/styled";
import { css } from "@emotion/react";
import CheckIcon from "@mui/icons-material/Check";

export function CircleRadioButton({ label, value, checked, ...rest }) {
  return (
    <Label onClick={rest.onClick} checked={checked}>
      <Image checked={checked}>{checked && <CheckIcon color="secondary" />}</Image>
      <Input type="radio" name="myRole" value={value} checked={checked} {...rest} />
      {label}
    </Label>
  );
}

export function Wrapper({ children }) {
  return <Container>{children}</Container>;
}

const Input = styled.input`
  display: none;
`;

const Label = styled.label<{ checked: boolean }>`
  display: inline-block;
  margin: 0 15px 20px 0;
  padding: 0;
  width: 56px;
  text-align: center;
  font-size: 14px;
  white-space: pre-line;

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
`;

const Image = styled.div<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 51px;
  height: 51px;
  margin-bottom: 8px;
  padding: 0;
  border: 0;
  border-radius: 50px;

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

const Container = styled.div`
  display: flex;
  width: 100%;
`;
