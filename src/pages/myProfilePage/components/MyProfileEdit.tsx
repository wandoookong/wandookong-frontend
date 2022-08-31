import { useContext, useState } from "react";
import { CAREER_RANGE, ROLE_MAIN } from "../../../api/types/fieldType";
import { MyProfilePageContext } from "../MyProfilePage";

// TODO: 수정하고 저장하는거 처리
export default function MyProfileEdit() {
  const { isLoading, meInfo } = useContext(MyProfilePageContext);

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <>
      <div>
        <input type="text" value={meInfo.nickname} />
      </div>
    </>
  );
}
