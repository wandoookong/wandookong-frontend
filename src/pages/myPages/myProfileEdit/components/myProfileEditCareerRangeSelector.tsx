import { colors } from "../../../../styles/colors";
import styled from "@emotion/styled";
import { CAREER_RANGE } from "../../../../@types/model/fieldType";
import { career } from "../../../teamRequestForm/utilities/roleData";

interface Props {
  myCareerRange: CAREER_RANGE;
  onChange(value?: any): void;
}

export default function MyProfileEditCareerRangeSelector({ myCareerRange, onChange }: Props) {
  return (
    <Container>
      <p>연차를 선택해주세요</p>
      <ul>
        {career.map((career, index) => (
          <PositionButton key={index} isChecked={myCareerRange === career.value}>
            <label>
              <input
                type="radio"
                value={career.value}
                name="career"
                checked={myCareerRange === career.value}
                onChange={onChange}
              />
              {career.label}
            </label>
          </PositionButton>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  p {
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: ${colors.grey300};
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;
  }
`;

const PositionButton = styled.li<{ isChecked: boolean }>`
  display: contents;

  label {
    min-width: 90px;
    padding: 16px 17px;
    box-sizing: border-box;
    background: ${(props) => (props.isChecked ? colors.brand300 : "none")};
    border: 1.5px solid ${(props) => (props.isChecked ? colors.brand600 : colors.brand300)};
    border-radius: 50px;
    font-size: 16px;
    font-weight: ${(props) => (props.isChecked ? "700" : "500")};
    line-height: 19px;
    text-align: center;
    color: ${colors.grey900};
    cursor: pointer;

    input {
      display: none;
    }
  }
`;
