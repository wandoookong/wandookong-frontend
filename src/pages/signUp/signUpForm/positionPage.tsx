import React, { useEffect, useState } from "react";
import { DoubleButton } from "../../../components/form/button/doubleButton";
import { Header } from "../../../components/form/header/header";
import { CircleRadioButton } from "../../../components/form/radioButton/circleRadioButton";
import { career, position } from "../../requestForm/requestFormSteps/roleData";
import ErrorMessage from "../../../components/form/errorMessage";
import { isEmpty } from "../../../@types/utility/typeGuard";

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

  return (
    <>
      <Header title="어떤 포지션의 콩인가요?" />
      {!isEmpty(errorMessage) && <ErrorMessage text={errorMessage} />}
      <p>현재 포지션을 선택해주세요</p>
      {position.map((position) => (
        <CircleRadioButton
          key={position.id}
          label={position.label}
          value={position.value}
          checked={roleMain === position.value}
          onChange={onChangeRoleHandler}
        />
      ))}
      <p>연차를 선택해주세요</p>
      {career.map((career) => (
        <CircleRadioButton
          key={career.id}
          label={career.label}
          value={career.value}
          checked={careerRange === career.value}
          onChange={onChangeCareerHandler}
        />
      ))}
      <DoubleButton onNextStep={onNextHandler} onPrevStep={onPrev} nextLabel="다음" prevLabel="이전" />
    </>
  );
}
