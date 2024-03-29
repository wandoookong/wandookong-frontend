import styled from "@emotion/styled";
import { colors } from "../../../../styles/colors";
import { convertValueToImageUrl } from "../../../../services/convertValueToImageUrl";
import { ROLE_DETAIL } from "../../../../@types/model/fieldType";
import CheckIcon from "../../../../assets/icons/select-white.svg";

interface Props {
  label: string;
  value: any;
  isChecked: boolean;
  onChange(value?: any): void;
}

export function PositionRadioButton({ label, value, isChecked, onChange }: Props) {
  return (
    <Container isChecked={isChecked} position={value}>
      <label>
        <div className="position-image">
          {isChecked && (
            <div className="background">
              <div className="check-icon" />
            </div>
          )}
        </div>
        <input type="radio" name="myRole" value={value} onChange={onChange} />
        <span>{label}</span>
      </label>
    </Container>
  );
}

const Container = styled.li<{ isChecked: boolean; position: ROLE_DETAIL }>`
  label {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    line-height: 17px;
    cursor: pointer;

    span {
      text-align: center;
      font-size: 14px;
      white-space: pre-line;
      color: ${colors.grey900};
      font-weight: ${(props) => (props.isChecked ? "700" : "400")};
    }
  }

  div.position-image {
    width: 51px;
    height: 51px;
    margin-bottom: 8px;
    padding: 0;
    border: 0;
    border-radius: 50px;
    background: url(${(props) => convertValueToImageUrl(props.position)}) center / 100% no-repeat;

    div.background {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      border-radius: 100px;
      background-color: rgba(71, 181, 97, 0.8);

      div.check-icon {
        width: 24px;
        height: 24px;
        border: none;
        background: transparent url(${CheckIcon}) center / 100% no-repeat;
      }
    }
  }

  input {
    display: none;
  }
`;
