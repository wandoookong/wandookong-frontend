import React, { ChangeEvent, useEffect, useState } from "react";
import { SingleButton } from "../../../../components/buttons/singleButton";
import { FormHeader } from "../../../../components/form/header/formHeader";
import { SingleTextInput } from "../../../teamRequestForm/components/inputs/singleTextInput";
import { isEmpty } from "../../../../@types/utility/typeGuard";
import signUpApi from "../../../../api/signUpApi";
import styled from "@emotion/styled";
import { colors } from "../../../../styles/colors";
import { ErrorMessageState, validateNickName } from "../../utilities/signUpValidations";

interface Props {
  nickname: string;
  onChange(value: string): void;
  onNext(): void;
}

export default function SetNickNameStep({ nickname, onChange, onNext }: Props) {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value);
  const onNextHandler = () => {
    const errorMessage = validateNickName(nickname);
    setErrorMessage(errorMessage);
    if (isEmpty(errorMessage)) {
      return onNext();
    }
  };

  useEffect(() => {
    (async function () {
      if (!isEmpty(nickname)) {
        const response = await signUpApi.checkNickname({ nickname });
        if (!response.isAvailable) {
          return setErrorMessage(ErrorMessageState.occupied);
        }
        setErrorMessage(ErrorMessageState.valid);
      }
    })();
  }, [nickname]);

  useEffect(() => {
    if (!isEmpty(nickname)) {
      setErrorMessage("");
    }
  }, [nickname]);

  return (
    <>
      <FormHeader title="닉네임을 입력해주세요" />
      <Container isErrorMessageOn={errorMessage === (ErrorMessageState.empty || ErrorMessageState.occupied)}>
        <SingleTextInput
          value={nickname}
          placeholder={ErrorMessageState.empty}
          maxLength={10}
          onChange={onChangeHandler}
        />
        {!isEmpty(errorMessage) && <p className="error-message">{errorMessage}</p>}
      </Container>
      <SingleButton onClick={onNextHandler} label="다음" isActive={true} />
    </>
  );
}

const Container = styled.div<{ isErrorMessageOn: boolean }>`
  margin-top: 73px;
  padding: 0 20px;

  p.error-message {
    margin-top: 2px;
    font-size: 12px;
    font-weight: 500;
    color: ${(props) => (props.isErrorMessageOn ? colors.red : colors.green)};
  }
`;
