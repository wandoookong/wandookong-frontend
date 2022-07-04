import React, { useState } from "react";
import { SingleButton } from "../../../components/form/button/singleButton";
import { Header } from "../../../components/form/header/header";
import { TextInput } from "../../../components/form/textInput/textInput";

export default function NickNamePage({ onNext }) {
  const [value, setValue] = useState("");
  const onClick = () => {
    onNext();
  };

  return (
    <>
      <Header title="닉네임을 입력해주세요" />
      <TextInput value={value} placeholder="닉네임을 입력하세요" />
      <SingleButton onClick={onClick} label="다음" />
    </>
  );
}
