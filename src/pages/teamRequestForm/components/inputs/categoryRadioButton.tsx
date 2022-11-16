import { css } from "@emotion/react";
import styled from "@emotion/styled";
import CheckIcon from "@mui/icons-material/Check";
import { colors } from "../../../../styles/colors";

interface Props {
  value: string;
  label: string;
  description: string;
  isChecked: boolean;
  onChange(value?: any): void;
}

export function CategoryRadioButton({ value, label, description, isChecked, onChange }: Props) {
  return (
    <Container isChecked={isChecked}>
      <label>
        <input type="radio" name="category" checked={isChecked} value={value} onChange={onChange} />
        {label}
        <div>
          <p>{description}</p>
          {isChecked && <CheckIcon sx={{ fontSize: 24, m: 0 }} />}
        </div>
      </label>
    </Container>
  );
}

const Container = styled.div<{ isChecked: boolean }>`
  width: auto;
  height: auto;
  margin-bottom: 16px;
  padding: 12px 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;

  ${(props) => {
    if (!props.isChecked) {
      return css`
        box-shadow: 0 0 0 2px ${colors.brand400} inset;
        box-sizing: border-box;
      `;
    }
    return css`
      background: ${colors.brand300};
      box-shadow: none;
    `;
  }}

  label {
    display: block;
    font-weight: 700;
    color: ${colors.grey900};
    cursor: pointer;

    input {
      display: none;
    }

    div {
      display: flex;
      justify-content: space-between;
      margin-top: 8px;
    }

    p {
      display: inline-block;
      max-width: 80%;
      margin: 0;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      color: ${colors.grey900};
    }
  }
`;
