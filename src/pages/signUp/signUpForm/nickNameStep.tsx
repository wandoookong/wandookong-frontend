import React, { ChangeEvent, useEffect, useState } from "react";
import { SingleButton } from "../../../components/buttons/singleButton";
import { FormHeader } from "../../../components/form/header/formHeader";
import { SingleTextInput } from "../../teamRequestForm/components/inputs/singleTextInput";
import { isEmpty } from "../../../@types/utility/typeGuard";
import InputValidationErrorMessage from "../../../components/form/inputValidationErrorMessage";
import signUpApi from "../../../api/signUpApi";
import { validateNickName } from "../utilities/validation";

interface Props {
  nickname: string;
  onChange(value: string): void;
  onNext(): void;
}

export default function NickNameStep({ nickname, onChange, onNext }: Props) {
  const [error, setError] = useState<string>("");
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value);
  const onNextHandler = async () => {
    const errorMessage = validateNickName(nickname);
    setError(errorMessage);
    if (!isEmpty(nickname)) {
      const response = await signUpApi.checkNickname({ nickname });
      if (!response.isAvailable) {
        return setError("이미 사용중인 아이디입니다");
      }
      return onNext();
    }
  };

  useEffect(() => {
    if (!isEmpty(nickname)) {
      setError("");
    }
  }, [nickname]);

  return (
    <>
      <FormHeader title="닉네임을 입력해주세요" />
      {!isEmpty(error) && <InputValidationErrorMessage text={error} />}
      <SingleTextInput value={nickname} placeholder="닉네임을 입력하세요" maxLength={10} onChange={onChangeHandler} />
      <SingleButton onClick={onNextHandler} label="다음" isActive={true} />
    </>
  );
}
