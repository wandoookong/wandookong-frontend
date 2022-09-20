import React, { ChangeEvent, useEffect, useState } from "react";
import { SingleButton } from "../../../components/form/button/singleButton";
import { Header } from "../../../components/form/header/header";
import { TextInput } from "../../../components/form/textInput/textInput";
import { isEmpty, required } from "../../../@types/utility/typeGuard";
import ErrorMessage from "../../../components/form/errorMessage";

interface Props {
  nickname: string;
  onChange(value: string): void;
  onNext(): void;
}

export default function NickNamePage({ nickname, onChange, onNext }: Props) {
  const [error, setError] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value);

  //TODO validation 모으기
  const validate = {
    validation: required,
    errorMessage: "닉네임을 입력해주세요.",
  };

  const nicknameValidation = (value: string) => {
    let result: string = "";
    const isValid: boolean = validate.validation(value);
    if (!isValid) {
      result = validate.errorMessage;
      return result;
    }
    return result;
  };

  const onClick = () => {
    const errorMessage = nicknameValidation(nickname);
    setError(errorMessage);
    if (isEmpty(errorMessage)) {
      onNext();
    }
  };

  useEffect(() => {
    if (!isEmpty(nickname)) {
      setError("");
    }
  }, [nickname]);

  return (
    <>
      <Header title="닉네임을 입력해주세요" />
      {!isEmpty(error) && <ErrorMessage text={error} />}
      <TextInput value={nickname} placeholder="닉네임을 입력하세요" maxLength="10" onChange={onChangeHandler} />
      <SingleButton onClick={onClick} label="다음" />
    </>
  );
}
