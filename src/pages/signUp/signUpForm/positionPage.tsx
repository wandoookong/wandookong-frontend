import React, { useEffect, useState } from "react";
import { DoubleButton } from "../../../components/buttons/doubleButton";
import { FormHeader } from "../../../components/form/header/formHeader";
import { PositionRadioButton } from "../../teamRequestForm/components/buttons/positionRadioButton";
import { career, position } from "../../teamRequestForm/utilities/roleData";
import InputValidationErrorMessage from "../../../components/form/inputValidationErrorMessage";
import { isEmpty } from "../../../@types/utility/typeGuard";
import styled from "@emotion/styled";

interface Props {
  roleMain: MyRole;
  careerRange: CareerRange;
  onChangeRoleMain(value: MyRole): void;
  onChangeCareerRange(value: CareerRange): void;
  onNext(): void;
  onPrev(): void;
}

export default function PositionPage({
  roleMain,
  careerRange,
  onChangeRoleMain,
  onChangeCareerRange,
  onNext,
  onPrev,
}: Props) {
  const [errorMessage, setErrorMessage] = useState("");
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

  //FIXME 라디오버튼 디자인 수정

  return (
    <>
      <FormHeader title="어떤 포지션의 콩인가요?" />
      {!isEmpty(errorMessage) && <InputValidationErrorMessage text={errorMessage} />}
      <p>현재 포지션을 선택해주세요</p>
      <InputWrapper>
        {position.map((position, index) => (
          <PositionRadioButton
            key={index}
            label={position.label}
            value={position.value}
            checked={roleMain === position.value}
            onChange={onChangeRoleHandler}
          />
        ))}
      </InputWrapper>
      <p>연차를 선택해주세요</p>
      <InputWrapper>
        {career.map((career, index) => (
          <PositionRadioButton
            key={index}
            label={career.label}
            value={career.value}
            checked={careerRange === career.value}
            onChange={onChangeCareerHandler}
          />
        ))}
      </InputWrapper>
      <DoubleButton onNextStep={onNextHandler} onPrevStep={onPrev} nextLabel="다음" prevLabel="이전" />
    </>
  );
}

const InputWrapper = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;
