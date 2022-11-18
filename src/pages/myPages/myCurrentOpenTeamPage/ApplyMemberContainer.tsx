import React from "react";
import { ApplyMemberReturnType } from "../../../api/types/teamMemberType";
import ApplyMember from "./components/ApplyMember/ApplyMember";

type ApplyMemberContainerContextType = {
  applyMember: ApplyMemberReturnType;
};

const initialState: ApplyMemberContainerContextType = {
  applyMember: {} as ApplyMemberReturnType,
};

export const ApplyMemberContainerContext = React.createContext(initialState);

export default function ApplyMemberContainer(applyMember: ApplyMemberReturnType) {
  return (
    <ApplyMemberContainerContext.Provider value={{ applyMember }}>
      <ApplyMember />
    </ApplyMemberContainerContext.Provider>
  );
}
