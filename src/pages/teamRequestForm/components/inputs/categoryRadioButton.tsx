import styled from "@emotion/styled";
import { colors } from "../../../../styles/colors";
import CheckIcon from "../../../../assets/icons/select-grey900.svg";

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
        <div className="description-wrapper">
          <p>{description}</p>
          {isChecked && <div className="check-icon" />}
        </div>
      </label>
    </Container>
  );
}

const Container = styled.li<{ isChecked: boolean }>`
  label {
    display: block;
    width: 100%;
    margin-bottom: 16px;
    padding: 12px 12px;
    border-radius: 8px;
    background: ${(props) => (props.isChecked ? colors.brand300 : "transparent")};
    font-size: 16px;
    font-weight: 700;
    color: ${colors.grey900};
    box-sizing: border-box;
    box-shadow: ${(props) => (props.isChecked ? "none" : `0 0 0 2px ${colors.brand400} inset`)};
    cursor: pointer;

    input {
      display: none;
    }

    div.description-wrapper {
      display: flex;
      justify-content: space-between;
      margin-top: 8px;

      p {
        display: inline-block;
        max-width: 80%;
        margin: 0;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        color: ${colors.grey900};
      }

      div.check-icon {
        width: 24px;
        height: 24px;
        border: none;
        background: transparent url(${CheckIcon}) center / 100% no-repeat;
      }
    }
  }
`;
