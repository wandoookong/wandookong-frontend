import styled from "@emotion/styled";
import { css } from "@emotion/react";
import CheckIcon from "@mui/icons-material/Check";
import { colors } from "../../../../components/styles/colors";

interface Props {
  label: string;
  value: any;
  checked: boolean;
  gradient?: string;

  onClick(value?: any): void;
}

export function PositionRadioButton({ label, value, checked, ...rest }) {
  return (
    <Container checked={checked}>
      <label onClick={rest.onClick}>
        <div className="position-image">{checked && <CheckIcon color="secondary" />}</div>
        <input type="radio" name="myRole" value={value} {...rest} />
        {label}
      </label>
    </Container>
  );
}

const Container = styled.div<{ checked: boolean }>`
  label {
    display: inline-block;
    margin: 0 0 20px 0;
    padding: 0;
    width: 56px;
    text-align: center;
    font-size: 14px;
    white-space: pre-line;

    ${(props) => {
      if (!props.checked) {
        return css`
          color: ${colors.grey900};
        `;
      }
      return css`
        font-weight: 700;
      `;
    }}
  }

  div.position-image {
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
        background: ${colors.brand900};
        opacity: 80%;
      `;
    }}
  }

  input {
    display: none;
  }
`;
