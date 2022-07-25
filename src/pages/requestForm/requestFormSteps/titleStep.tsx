import React, { ChangeEvent, useEffect, useState } from "react";
import { isEmpty } from "../../../@types/utility/typeGuard";
import { Header } from "../../../components/form/header/header";
import ErrorMessage from "../../../components/form/errorMessage";
import { TextInput } from "../../../components/form/textInput/textInput";
import { titleValidation } from "./validation";
import { useRequestFormReducer } from "../hooks/useRequestFormReducer";
import { DoubleButton } from "../../../components/form/button/doubleButton";

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
      <Header title={`완두콩 제목을 알려주세요!`} />
      {!isEmpty(errorMessage) && <ErrorMessage text={errorMessage} />}
      <TextInput placeholder="함께 재미난 프로젝트 하실 분들 찾습니다! :)" value={state.title} onChange={onChange} />
      <DoubleButton prevLabel="이전" nextLabel="다음" onPrevStep={onPrevious} onNextStep={onNextStep} />
    </>
  );
}
