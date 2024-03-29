import styled from "@emotion/styled";
import { colors } from "../../../../styles/colors";
import { convertValueToImageUrl } from "../../../../services/convertValueToImageUrl";
import CheckIcon from "../../../../assets/icons/select-white.svg";

interface Props {
  label: string;
  value: string;
  isChecked: boolean;
  isDisabled: boolean;
  onChange(value?: any): void;
}

export function PositionCheckBoxButton({ label, value, isChecked, isDisabled, onChange }: Props) {
  return (
    <Label isChecked={isChecked} isDisabled={isDisabled} position={value}>
      <label>
        <div className="profile-image">
          <div className="checked-background">
            {isChecked && <div className="check-icon" />}
            {isDisabled && "나"}
          </div>
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
      </label>
    </Label>
  );
}

const Label = styled.li<{ isChecked: boolean; isDisabled: boolean; position: string }>`
  label {
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

    div.profile-image {
      width: 51px;
      height: 51px;
      margin: 0 0 8px 0;
      border: 0;
      border-radius: 50px;
      font-size: 16px;
      font-weight: 700;
      color: ${colors.white};
      background: url(${(props) => convertValueToImageUrl(props.position)}) center / 100% no-repeat;

      div.checked-background {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        border-radius: 100px;
        background-color: ${(props) => {
          if (props.isChecked) {
            return "rgba(71, 181, 97, 0.8)";
          }
          if (props.isDisabled) {
            return "rgba(0, 0, 0, 0.4)";
          }
        }};

        div.check-icon {
          width: 24px;
          height: 24px;
          border: none;
          background: url(${CheckIcon}) center / 100% no-repeat;
        }
      }
    }
  }
`;
