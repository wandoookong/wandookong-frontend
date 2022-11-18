import React from "react";
import { AllowMemberReturnType } from "../../../api/types/teamMemberType";
import AllowMember from "./components/AllowMember/AllowMember";

type AllowMemberContainerContextType = {
  allowMember: AllowMemberReturnType;
};

const initialState: AllowMemberContainerContextType = {
  allowMember: {} as AllowMemberReturnType,
};

export const AllowMemberContainerContext = React.createContext(initialState);

export default function AllowMemberContainer(allowMember: AllowMemberReturnType) {
  return (
    <AllowMemberContainerContext.Provider value={{ allowMember }}>
      <AllowMember />
    </AllowMemberContainerContext.Provider>
  );
}
