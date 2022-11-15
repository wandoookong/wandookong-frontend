import React, { useEffect, useState } from "react";
import { DoubleButton } from "../../../components/buttons/doubleButton";
import { PositionCheckBoxButton } from "../../teamRequestForm/components/buttons/positionCheckBoxButton";
import { FormHeader } from "../../../components/form/header/formHeader";
import { tagKeywords } from "../../teamRequestForm/utilities/roleData";
import InputValidationErrorMessage from "../../../components/form/inputValidationErrorMessage";
import { isEmpty } from "../../../@types/utility/typeGuard";

interface Props {
  nickname: string;
  tags: string[];
  onChange(value: string): void;
  onNext(): void;
  onPrev(): void;
}

export default function TagPage({ nickname, tags, onChange, onNext, onPrev }: Props) {
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (tags.length < 4) {
      return setErrorMessage("");
    }
  }, [tags]);

  return (
    <>
      <FormHeader title={`${nickname}님에 대해 조금만 더 알려주시겠어요?`} />
      {!isEmpty(errorMessage) && <InputValidationErrorMessage text={errorMessage} />}
      <p>자기소개 태그는 최대 4개까지 선택할 수 있어요</p>
      {tagKeywords.map((tag, index) => (
        <PositionCheckBoxButton
          key={index}
          label={tag.label}
          value={tag.value}
          onChange={() => {
            if (tags.length < 4) {
              return onChange(tag.value);
            }
            setErrorMessage("태그는 최대 4개까지 선택할 수 있습니다.");
            if (tags.includes(tag.value)) {
              return onChange(tag.value);
            }
          }}
          isChecked={tags.includes(tag.value)}
          isDisabled={false}
        />
      ))}
      <DoubleButton prevLabel="이전" nextLabel="회원가입 완료!" onNextStep={onNext} onPrevStep={onPrev} />
    </>
  );
}
