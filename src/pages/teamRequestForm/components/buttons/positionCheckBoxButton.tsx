import styled from "@emotion/styled";
import { css } from "@emotion/react";
import CheckIcon from "@mui/icons-material/Check";
import { colors } from "../../../../components/styles/colors";

interface Props {
  label: string;
  value: string;
  isChecked: boolean;
  isDisabled: boolean;
  onChange(value?: any): void;
}

export function PositionCheckBoxButton({ label, value, isChecked, isDisabled, onChange }: Props) {
  return (
    <Label checked={isChecked} disabled={isDisabled}>
      <Image checked={isChecked} disabled={isDisabled}>
        {isChecked && <CheckIcon color="secondary" />}
        {isDisabled && "나"}
      </Image>
      <input
        type="checkbox"
        name="position"
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        onChange={onChange}
      />
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
        color: ${colors.grey900};
      `;
    }
    return css`
      font-weight: 700;
    `;
  }}
  ${(props) => {
    if (props.disabled) {
      return css`
        color: ${colors.grey200};
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
  color: ${colors.white};

  ${(props) => {
    if (props.disabled) {
      return css`
        background: ${colors.grey900};
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
      background: ${colors.brand900};
      opacity: 80%;
    `;
  }}
`;
