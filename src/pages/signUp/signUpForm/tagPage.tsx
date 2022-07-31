import React from "react";
import { DoubleButton } from "../../../components/form/button/doubleButton";
import { CircleCheckbox } from "../../../components/form/CircleCheckboxButton";
import { Header } from "../../../components/form/header/header";
import { tagKeywords } from "../../requestForm/requestFormSteps/roleData";

export default function TagPage({ onNext, onPrev }) {
  return (
    <>
      <Header title="아이린님에 대해 조금만 더 알려주시겠어요?" />
      <p>자기소개 태그는 최대 4개까지 선택할 수 있어요</p>
      {tagKeywords.map((tag) => (
        <CircleCheckbox key={tag.id} label={tag.label} checked={false} value={tag.value} disabled={false} />
      ))}
      <DoubleButton prevLabel="이전" nextLabel="회원가입 완료!" onNextStep={onNext} onPrevStep={onPrev} />
    </>
  );
}
