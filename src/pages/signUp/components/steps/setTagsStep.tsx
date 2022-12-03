import React, { useEffect, useState } from "react";
import { DoubleButton } from "../../../../components/buttons/doubleButton";
import { FormHeader } from "../../../../components/form/header/formHeader";
import { tagKeywords } from "../../../teamRequestForm/utilities/roleData";
import InputValidationErrorMessage from "../inputValidationErrorMessage";
import { isEmpty } from "../../../../@types/utility/typeGuard";
import styled from "@emotion/styled";
import { colors } from "../../../../styles/colors";

interface Props {
  nickname: string;
  tags: string[];
  onChange(value: string): void;
  onNext(): void;
  onPrev(): void;
}

export default function SetTagsStep({ nickname, tags, onChange, onNext, onPrev }: Props) {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (tags.length < 4) {
      return setErrorMessage("");
    }
  }, [tags]);

  return (
    <>
      <FormHeader title={`${nickname}님에 대해  \n 조금만 더 \n 알려주시겠어요?`} />
      <Container isError={errorMessage}>
        <p className="description">(선택) 자기소개 태그는 최대 4개까지 선택할 수 있어요</p>
        {!isEmpty(errorMessage) && <InputValidationErrorMessage text={errorMessage} />}
        <div className="tags-wrapper">
          {tagKeywords.map((tag, index) => (
            <Label key={index} isChecked={tags.includes(tag.value)}>
              <input
                type="checkbox"
                name="tags"
                value={tag.value}
                checked={tags.includes(tag.value)}
                onChange={() => {
                  if (tags.length < 4) {
                    return onChange(tag.value);
                  }
                  setErrorMessage("태그는 최대 4개까지 선택할 수 있습니다.");
                  if (tags.includes(tag.value)) {
                    return onChange(tag.value);
                  }
                }}
              />
              {tag.label}
            </Label>
          ))}
        </div>
      </Container>
      <DoubleButton prevButtonLabel="이전" nextButtonLabel="회원가입 완료" onNextStep={onNext} onPrevStep={onPrev} />
    </>
  );
}

const Container = styled.div<{ isError: string }>`
  margin-top: 73px;
  padding: 0 20px;

  p.description {
    margin-bottom: ${(props) => (props.isError ? "7px" : "0")};
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.grey300};
  }

  div.tags-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    margin-top: 12px;
  }
`;

const Label = styled.label<{ isChecked: boolean }>`
  width: 90px;
  height: 51px;
  padding: 16px 8px;
  border: 1.5px solid ${(props) => (props.isChecked ? colors.brand600 : colors.brand300)};
  border-radius: 100px;
  box-sizing: border-box;
  background: ${(props) => (props.isChecked ? colors.brand300 : "transparent")};
  text-align: center;
  font-weight: ${(props) => (props.isChecked ? "700" : "500")};
  font-size: 16px;
  letter-spacing: -0.5px;
  color: ${colors.grey900};
  cursor: pointer;

  input {
    display: none;
  }
`;
