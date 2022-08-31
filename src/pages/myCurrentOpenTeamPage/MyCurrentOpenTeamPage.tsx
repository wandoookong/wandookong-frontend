import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import UserApi from "../../api/userApi";
import { UserMeReturnType } from "../../api/types/userType";
import ApplyMemberList from "./components/ApplyMemberList";
import AllowMemberList from "./components/AllowMemberList";

type MyCurrentOpenTeamPageContextType = {
  isLoading: boolean;
  meInfo: UserMeReturnType;
};

const initialState: MyCurrentOpenTeamPageContextType = {
  isLoading: false,
  meInfo: {} as UserMeReturnType,
};

export const MyCurrentOpenTeamPageContext = React.createContext(initialState);

export default function MyCurrentOpenTeamPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meInfo, setMeInfo] = useState({} as UserMeReturnType);

  useEffect(() => {
    UserApi.getUserMe().then((res) => {
      setMeInfo(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <Layout>
      <MyCurrentOpenTeamPageContext.Provider value={{ isLoading, meInfo }}>
        <ApplyMemberList />
        <AllowMemberList />
      </MyCurrentOpenTeamPageContext.Provider>
    </Layout>
  );
}
