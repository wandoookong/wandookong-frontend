import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { SingleButton } from "../../../../components/buttons/singleButton";
import { FormHeader } from "../../../../components/form/header/formHeader";
import { SingleTextInput } from "../../../teamRequestForm/components/inputs/singleTextInput";
import { isEmpty } from "../../../../@types/utility/typeGuard";
import styled from "@emotion/styled";
import { colors } from "../../../../styles/colors";
import { validateNickName } from "../../utilities/signUpValidations";
import checkNicknameApi from "../../../../api/signUp/checkNicknameApi";
import { CheckNickname } from "../../../../@types/dto/checkNickname";

interface Props {
  nickname: string;
  onChange(value: string): void;
  onNext(): void;
}

export default function SetNickNameStep({ nickname, onChange, onNext }: Props) {
  const [errorMessage, setErrorMessage] = useState("");

  const isValidNickName = useMemo(() => {
    return !isEmpty(nickname) && isEmpty(errorMessage);
  }, [errorMessage, nickname]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const validateErrorMessage = validateNickName(e.currentTarget.value);
    setErrorMessage(validateErrorMessage);
    onChange(e.currentTarget.value);
  };

  const onNextHandler = () => {
    if (isValidNickName) {
      onNext();
    } else {
      (async function () {
        if (!isEmpty(nickname)) {
          const response: CheckNickname = await checkNicknameApi({ nickname });
          if (!response.isAvailable) {
            return setErrorMessage("이미 사용중인 닉네임입니다.");
          }
        }
        const validateErrorMessage = validateNickName(nickname);
        setErrorMessage(validateErrorMessage);
      })();
    }
  };

  useEffect(() => {
    (async function () {
      if (!isEmpty(nickname)) {
        const response: CheckNickname = await checkNicknameApi({ nickname });
        if (!response.isAvailable) {
          return setErrorMessage("이미 사용중인 닉네임입니다.");
        }
      }
    })();
  }, [nickname]);

  return (
    <>
      <FormHeader title="닉네임을 입력해주세요" />
      <Container>
        <SingleTextInput
          value={nickname}
          placeholder="닉네임을 입력해주세요."
          maxLength={10}
          onChange={onChangeHandler}
        />
        {!isEmpty(errorMessage) && <p className="error-message">{errorMessage}</p>}
        {isValidNickName && <p className="valid-message">사용 가능한 닉네임입니다.</p>}
      </Container>
      <SingleButton onClick={onNextHandler} label="다음" isActive={true} />
    </>
  );
}

const Container = styled.div`
  margin-top: 73px;
  padding: 0 20px;

  p {
    margin-top: 6px;
    font-size: 12px;
    font-weight: 500;
  }

  p.error-message {
    color: ${colors.red};
  }

  p.valid-message {
    color: ${colors.green};
  }
`;
