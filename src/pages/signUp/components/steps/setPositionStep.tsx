import React, { useEffect, useState } from "react";
import { DoubleButton } from "../../../../components/buttons/doubleButton";
import { FormHeader } from "../../../../components/form/header/formHeader";
import { career, position } from "../../../teamRequestForm/utilities/roleData";
import InputValidationErrorMessage from "../inputValidationErrorMessage";
import { isEmpty } from "../../../../@types/utility/typeGuard";
import styled from "@emotion/styled";
import { colors } from "../../../../styles/colors";

interface Props {
  roleMain: MyRole;
  careerRange: CareerRange;
  onChangeRoleMain(value: MyRole): void;
  onChangeCareerRange(value: CareerRange): void;
  onNext(): void;
  onPrev(): void;
}

export default function SetPositionStep({
  roleMain,
  careerRange,
  onChangeRoleMain,
  onChangeCareerRange,
  onNext,
  onPrev,
}: Props) {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const onChangeRoleHandler = (e) => onChangeRoleMain(e.currentTarget.value);
  const onChangeCareerHandler = (e) => onChangeCareerRange(e.currentTarget.value);

  const onNextHandler = () => {
    if (isEmpty(roleMain) || isEmpty(careerRange)) {
      setErrorMessage("포지션과 연차를 모두 선택해주세요");
      return;
    }
    onNext();
  };

  useEffect(() => {
    if (errorMessage) {
      setErrorMessage("");
    }
  }, [roleMain, careerRange]);

  return (
    <>
      <FormHeader title="어떤 포지션의 콩인가요?" />
      <Container>
        <section>
          <p>현재 포지션을 선택해주세요</p>
          <div className="input-wrapper">
            {position.map((position, index) => (
              <Label key={index} isChecked={position.value === roleMain}>
                <input
                  type="radio"
                  name="position"
                  value={position.value}
                  onChange={onChangeRoleHandler}
                  checked={position.value === roleMain}
                />
                {position.label}
              </Label>
            ))}
          </div>
        </section>
        <section>
          <p>연차를 선택해주세요</p>
          <div className="input-wrapper">
            {career.map((career, index) => (
              <Label key={index} isChecked={career.value === careerRange}>
                <input
                  type="radio"
                  name="careerRange"
                  value={career.value}
                  onChange={onChangeCareerHandler}
                  checked={career.value === careerRange}
                />
                {career.label}
              </Label>
            ))}
          </div>
        </section>
        {!isEmpty(errorMessage) && <InputValidationErrorMessage text={errorMessage} />}
      </Container>
      <DoubleButton onNextStep={onNextHandler} onPrevStep={onPrev} nextLabel="다음" prevLabel="이전" />
    </>
  );
}

const Container = styled.div`
  margin-top: 73px;
  padding: 0 20px;

  section {
    margin-bottom: 36px;

    p {
      margin-bottom: 12px;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: ${colors.grey300};
    }

    div.input-wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
`;

const Label = styled.label<{ isChecked: boolean }>`
  padding: 16px 24px;
  border: 1.5px solid ${(props) => (props.isChecked ? colors.brand600 : colors.brand300)};
  border-radius: 100px;
  background: ${(props) => (props.isChecked ? colors.brand300 : "transparent")};
  font-weight: ${(props) => (props.isChecked ? "700" : "500")};
  font-size: 16px;
  line-height: 19px;
  color: ${colors.grey900};

  input {
    display: none;
  }
`;
