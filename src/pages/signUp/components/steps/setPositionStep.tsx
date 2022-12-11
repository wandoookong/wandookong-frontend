import React, { useEffect, useState } from "react";
import { DoubleButton } from "../../../../components/buttons/doubleButton";
import { FormHeader } from "../../../../components/form/header/formHeader";
import { career, position } from "../../../teamRequestForm/utilities/roleData";
import InputValidationErrorMessage from "../inputValidationErrorMessage";
import { isEmpty } from "../../../../@types/utility/typeGuard";
import styled from "@emotion/styled";
import { colors } from "../../../../styles/colors";
import { CAREER_RANGE, ROLE_MAIN } from "../../../../@types/model/fieldType";
import { validatePosition } from "../../utilities/signUpValidations";

interface Props {
  roleMain: ROLE_MAIN | "";
  careerRange: CAREER_RANGE | "";
  onChangeRoleMain(value: ROLE_MAIN): void;
  onChangeCareerRange(value: CAREER_RANGE): void;
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
  const [errorMessage, setErrorMessage] = useState({ position: "", career: "" });
  const onChangeRoleHandler = (e) => onChangeRoleMain(e.currentTarget.value);
  const onChangeCareerHandler = (e) => onChangeCareerRange(e.currentTarget.value);

  const onNextHandler = () => {
    const errorMessages = validatePosition(roleMain, careerRange);
    setErrorMessage({ ...errorMessages });
    if (isEmpty(errorMessages.position) && isEmpty(errorMessages.career)) {
      return onNext();
    }
  };

  useEffect(() => {
    let position = errorMessage.position;
    let career = errorMessage.career;
    if (roleMain) {
      position = "";
    }
    if (careerRange) {
      career = "";
    }
    return setErrorMessage({ position, career });
  }, [roleMain, careerRange]);

  return (
    <>
      <FormHeader title="어떤 포지션의 콩인가요?" />
      <Container>
        <section>
          <p className="title">현재 포지션을 선택해주세요</p>
          {!isEmpty(errorMessage.position) && <InputValidationErrorMessage text={errorMessage.position} />}
          <ul>
            {position.map((position, index) => (
              <Button key={index} isChecked={position.value === roleMain}>
                <label>
                  <input
                    type="radio"
                    name="position"
                    value={position.value}
                    checked={position.value === roleMain}
                    onChange={onChangeRoleHandler}
                  />
                  {position.label}
                </label>
              </Button>
            ))}
          </ul>
        </section>
        <section>
          <p className="title">연차를 선택해주세요</p>
          {!isEmpty(errorMessage.career) && <InputValidationErrorMessage text={errorMessage.career} />}
          <ul>
            {career.map((career, index) => (
              <Button key={index} isChecked={career.value === careerRange}>
                <label>
                  <input
                    type="radio"
                    name="careerRange"
                    value={career.value}
                    checked={career.value === careerRange}
                    onChange={onChangeCareerHandler}
                  />
                  {career.label}
                </label>
              </Button>
            ))}
          </ul>
        </section>
      </Container>
      <DoubleButton onNextStep={onNextHandler} onPrevStep={onPrev} nextButtonLabel="다음" prevButtonLabel="이전" />
    </>
  );
}

const Container = styled.div`
  margin-top: 73px;
  padding: 0 20px;

  section {
    margin-bottom: 36px;

    p.title {
      margin-bottom: 7px;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: ${colors.grey300};
    }

    ul {
      display: flex;
      justify-content: space-between;
      margin-top: 12px;
    }
  }
`;

const Button = styled.li<{ isChecked: boolean }>`
  display: contents;

  label {
    min-width: 90px;
    padding: 16px 13px;
    box-sizing: border-box;
    border: 1.5px solid ${(props) => (props.isChecked ? colors.brand600 : colors.brand300)};
    border-radius: 100px;
    background: ${(props) => (props.isChecked ? colors.brand300 : "transparent")};
    text-align: center;
    font-size: 16px;
    font-weight: ${(props) => (props.isChecked ? "700" : "500")};
    line-height: 19px;
    color: ${colors.grey900};
    cursor: pointer;

    input {
      display: none;
    }
  }
`;
