import React, { useState } from "react";
import { Header } from "../../../components/Form/header";
import { TextInput } from "../../../components/Form/textInput";
import { SingleButton } from "../../../components/Form/button";

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
