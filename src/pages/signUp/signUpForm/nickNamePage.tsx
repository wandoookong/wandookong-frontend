import React, { ChangeEvent, useState } from "react";
import { SingleButton } from "../../../components/form/button/singleButton";
import { Header } from "../../../components/form/header/header";
import { TextInput } from "../../../components/form/textInput/textInput";
import { titleValidation } from "../../requestForm/validation/validation";
import { isEmpty } from "../../../@types/utility/typeGuard";

interface Props {
  onNext(): void;
}

export default function NickNamePage({ onNext }: Props) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const onChange = (e) => {
    setValue(e.currentTarget.value);
  };

  const onClick = () => {
    const errorMessage = titleValidation(value);
    setError(errorMessage);
    if (isEmpty(error)) {
      onNext();
    }
  };

  return (
    <>
      <Header title="닉네임을 입력해주세요" />
      <TextInput value={value} placeholder="닉네임을 입력하세요" maxLength="8" onChange={onChange} />
      <SingleButton onClick={onClick} label="다음" />
    </>
  );
}
