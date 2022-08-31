import { useContext, useState } from "react";
import { MyCurrentOpenTeamPageContext } from "../MyCurrentOpenTeamPage";

export default function ApplyMemberList() {
  const { isLoading, meInfo } = useContext(MyCurrentOpenTeamPageContext);

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
