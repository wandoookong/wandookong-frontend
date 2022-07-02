import React from "react";
import { Header } from "../../../components/Form/header";
import { CircleRadioButton } from "../../../components/Form/radioButton";
import { career, position } from "../../requestForm/requestFormSteps/roleData";
import { DoubleButton } from "../../../components/Form/button";

export default function PositionPage({ onNext, onPrev }) {
  return (
    <>
      <Header title="어떤 포지션의 콩인가요?" />
      <p>현재 포지션을 선택해주세요</p>
      {position.map((position) => (
        <CircleRadioButton key={position.id} label={position.label} value={position.value} checked={false} />
      ))}
      <p>년차를 선택해주세요</p>
      {career.map((position) => (
        <CircleRadioButton key={position.id} label={position.label} value={position.value} checked={false} />
      ))}
      <DoubleButton onNextStep={onNext} onPrevStep={onPrev} nextLabel="다음" prevLabel="이전" />
    </>
  );
}
