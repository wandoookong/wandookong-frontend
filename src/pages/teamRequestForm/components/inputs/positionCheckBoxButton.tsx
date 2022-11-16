import styled from "@emotion/styled";
import CheckIcon from "@mui/icons-material/Check";
import { colors } from "../../../../styles/colors";

interface Props {
  label: string;
  value: string;
  isChecked: boolean;
  isDisabled: boolean;
  onChange(value?: any): void;
}

export function PositionCheckBoxButton({ label, value, isChecked, isDisabled, onChange }: Props) {
  return (
    <Label isChecked={isChecked} isDisabled={isDisabled}>
      <div>
        {isChecked && <CheckIcon color="success" />}
        {isDisabled && "나"}
      </div>
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

const Label = styled.label<{ isChecked: boolean; isDisabled: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  text-align: center;
  white-space: pre-line;
  font-size: 14px;
  line-height: 17px;
  font-weight: ${(props) => (props.isChecked ? "700" : "400")};
  color: ${(props) => (props.isDisabled ? colors.grey200 : colors.grey900)};
  cursor: pointer;

  input {
    display: none;
  }

  div {
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
    background: ${(props) => {
      if (props.isDisabled) {
        return colors.grey900;
      }
      if (props.isChecked) {
        return colors.brand900;
      }
      return colors.grey900;
    }};
    opacity: ${(props) => {
      if (props.isDisabled) {
        return "40%";
      }
      if (props.isChecked) {
        return "80%";
      }
      return "100%";
    }};
  }
`;
