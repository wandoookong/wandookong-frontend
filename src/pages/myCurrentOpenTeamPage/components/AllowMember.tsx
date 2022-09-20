import { useContext, useState } from "react";
import { AllowMemberContainerContext } from "../AllowMemberContainer";

export default function AllowMember() {
  const { allowMember } = useContext(AllowMemberContainerContext);

  return <div>{allowMember.nickname}</div>;
}
