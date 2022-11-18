/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import { useState, useEffect } from "react";

const style = css`
  p + p {
    margin-top: 12px;
  }
`;
const styleTitle = css`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #8b8b8b;
  margin-bottom: 12px;
`;
const styleError = css`
  ${styleTitle}
  color: red;
`;
const styleButtonWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const styleButton = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: none;
  width: 90px;
  height: 51px;
  border: 1.5px solid #afd89e;
  border-radius: 49px;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #242c35;
`;
const styleChecked = css`
  ${styleButton}
  background: #afd89e;
  border: 1.5px solid #639562;
  font-weight: 700;
`;

const tags = {
  꼼꼼함: false,
  성실함: false,
  친절함: false,
  "시간 관리": false,
  "논리적 사고": false,
  "문제 정의": false,
  끈기: false,
  추진력: false,
  리더십: false,
};

export default function Tag({ tagList, setTagNameList }: { tagList: string[]; setTagNameList: any }) {
  const [tagListNew, setTagListNew] = useState(tagList.filter((tag) => tags[tag] !== undefined));
  const [tagChecked, setTagChecked] = useState({});
  const [errorOver4, setErrorOver4] = useState(false);

  useEffect(() => {
    const tagCheckedNew = { ...tags };

    tagListNew.forEach((tagName) => {
      if (tagCheckedNew[tagName] !== undefined) {
        tagCheckedNew[tagName] = true;
      }
    });

    setTagChecked(tagCheckedNew);
  }, [tagListNew]);

  useEffect(() => {
    let timeOutId;

    if (errorOver4) {
      timeOutId = setTimeout(() => setErrorOver4(false), 2000);
    }

    return () => timeOutId && clearTimeout(timeOutId);
  }, [errorOver4]);

  const onClick = (tagName) => {
    const tagSet = new Set(tagListNew);

    if (tagSet.has(tagName)) tagSet.delete(tagName);
    else tagSet.add(tagName);

    if (tagSet.size > 4) return setErrorOver4(true);

    const tagListFrom = Array.from(tagSet);
    setTagListNew(tagListFrom);
    setTagNameList(tagListFrom);
  };

  return (
    <section css={style}>
      <div css={errorOver4 ? styleError : styleTitle}>자기소개 태그는 최대 4개 까지 선택할 수 있어요</div>
      <p css={styleButtonWrapper}>
        {Object.entries(tagChecked)
          .slice(0, 3)
          .map(([tagName, checked]) => (
            <Button key={tagName} tagName={tagName} checked={checked} onClick={onClick} />
          ))}
      </p>
      <p css={styleButtonWrapper}>
        {Object.entries(tagChecked)
          .slice(3, 6)
          .map(([tagName, checked]) => (
            <Button key={tagName} tagName={tagName} checked={checked} onClick={onClick} />
          ))}
      </p>
      <p css={styleButtonWrapper}>
        {Object.entries(tagChecked)
          .slice(6, 9)
          .map(([tagName, checked]) => (
            <Button key={tagName} tagName={tagName} checked={checked} onClick={onClick} />
          ))}
      </p>
    </section>
  );
}

function Button({ tagName, checked, onClick }) {
  return (
    <button css={checked ? styleChecked : styleButton} onClick={() => onClick(tagName)}>
      {tagName}
    </button>
  );
}
