import { useContext, useState } from "react";
import { ApplyMemberContainerContext } from "../ApplyMemberContainer";
import { ROLE_DETAIL, ROLE_MAIN } from "../../../api/types/fieldType";

export default function ApplyMember() {
  const {
    applyMember: { roleDetail, nickname, roleMain, tagList, memo },
  } = useContext(ApplyMemberContainerContext);

  return (
    <>
      <div>{roleDetailText(roleDetail)}</div>
      <div>{nickname}</div>
      <div>{roleMainText(roleMain)}</div>
      <div>
        {tagList.map((tagName) => (
          <TagPill tagName={tagName} />
        ))}
      </div>
      <MemoBox memo={memo} />
    </>
  );
}

function TagPill({ tagName }) {
  return <div>{tagName}</div>;
}

function MemoBox({ memo }) {
  return <div>{memo}</div>;
}

function roleDetailText(roleDetail: ROLE_DETAIL) {
  switch (roleDetail) {
    case "product":
      return "기획 콩";
    case "ux_ui":
      return "디자인 콩";
    case "app":
      return "앱 콩";
    case "web_front":
      return "프론트 콩";
    case "back_end":
      return "백엔드 콩";
  }
}

function roleMainText(roleMain: ROLE_MAIN) {
  switch (roleMain) {
    case "pm":
      return "서비스 기획자";
    case "design":
      return "UX/UI 디자이너";
    case "dev":
      return "개발자";
  }
}
