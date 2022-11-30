import { tagKeywords } from "../../../teamRequestForm/utilities/roleData";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../../../../styles/colors";

interface Props {
  tags: string[];
  onChange(value: string): void;
}

export default function MyProfileEditTagSelector({ tags, onChange }: Props) {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (tags.length < 4) {
      return setIsError(false);
    }
  }, [tags]);

  return (
    <Container isOver={isError}>
      <p>자기소개 태그는 최대 4개까지 선택할 수 있어요</p>
      <ul>
        {tagKeywords.map((tag, index) => (
          <TagItem key={index} isChecked={tags.includes(tag.value)}>
            <label>
              <input
                type="checkbox"
                name="tags"
                value={tag.value}
                checked={tags.includes(tag.value)}
                onChange={() => {
                  if (tags.length < 4) {
                    return onChange(tag.value);
                  }
                  setIsError(true);
                  if (tags.includes(tag.value)) {
                    return onChange(tag.value);
                  }
                }}
              />
              {tag.label}
            </label>
          </TagItem>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div<{ isOver: boolean }>`
  p {
    margin-bottom: 12px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => (props.isOver ? colors.red : colors.grey300)};
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
  }
`;

const TagItem = styled.li<{ isChecked: boolean }>`
  display: contents;

  label {
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
  }
`;
