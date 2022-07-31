import styled from "@emotion/styled";
import { css } from "@emotion/react";
import CheckIcon from "@mui/icons-material/Check";

const Input = styled.input`
  display: none;
`;

export function CircleRadioButton({ label, value, checked, ...rest }) {
  const Label = styled.label`
    display: inline-block;
    margin: 0 15px 20px 0;
    padding: 0;
    width: 53px;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    white-space: pre-line;

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
  `;

  const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 51px;
    height: 51px;
    margin-bottom: 8px;
    padding: 0;
    border: 0;
    border-radius: 50px;

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

  return (
    <Label onClick={rest.onClick}>
      <Image>{checked && <CheckIcon color="secondary" />}</Image>
      <Input type="radio" name="myRole" value={value} checked={checked} {...rest} />
      {label}
    </Label>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
`;
export function Wrapper({ children }) {
  return <Container>{children}</Container>;
}
