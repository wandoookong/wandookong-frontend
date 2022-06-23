import React, { ChangeEvent, useEffect, useState } from "react";
import { isEmpty } from "../../../@types/utility/typeGuard";
import { DoubleButton } from "../../../components/Form/button";
import { Header } from "../../../components/Form/header";
import ErrorMessage from "../../../components/Form/errorMessage";
import { TextInput } from "../../../components/Form/textInput";
import { titleValidation } from "./validation";
import { useRequestFormReducer } from "../hooks/useRequestFormReducer";

interface Props {
  onPrevious(): void;
  onNext(): void;
}

export default function TitleStep({ onPrevious, onNext }: Props) {
  const { state, onChangeTitle } = useRequestFormReducer();
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => onChangeTitle(e.currentTarget.value);

  const onNextStep = () => {
    const titleErrorMessage = titleValidation(state.title);
    setErrorMessage(titleErrorMessage);
    if (!isEmpty(state.title)) {
      onNext();
    }
  };

  useEffect(() => {
    if (!isEmpty(state.title)) {
      setErrorMessage("");
    }
  }, [state.title]);

  return (
    <>
      <Header title={`완두콩 제목을 \n 알려주세요!`} />
      <TextInput placeholder="예) 완두콩 프로젝트 팀원 모집" value={state.title} onChange={onChange} />
      {!isEmpty(errorMessage) && <ErrorMessage text={errorMessage} />}
      <DoubleButton prevLabel="이전" nextLabel="다음" onPrevStep={onPrevious} onNextStep={onNextStep} />
    </>
  );
}
