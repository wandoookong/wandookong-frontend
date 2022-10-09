import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/layout";
import MyInfo from "./MyInfo";
import MyTeam from "./MyTeam";
import MyPageEtc from "./MyPageEtc";
import UserApi from "../../../api/userApi";
import { UserMeReturnType } from "../../../api/types/userType";
import MyTeamApi from "../../../api/myTeamApi";
import { CurrentOpenTeamReturnType } from "../../../api/types/teamType";

type MyPageContextType = {
  isLoading: boolean;
  meInfo: UserMeReturnType;
  currentOpenTeam: CurrentOpenTeamReturnType;
};

const initialState: MyPageContextType = {
  isLoading: false,
  meInfo: {} as UserMeReturnType,
  currentOpenTeam: {} as CurrentOpenTeamReturnType,
};

export const MyPageContext = React.createContext(initialState);

export default function MyPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meInfo, setMeInfo] = useState({} as UserMeReturnType);
  const [currentOpenTeam, setCurrentOpenTeam] = useState({} as CurrentOpenTeamReturnType);

  useEffect(() => {
    Promise.all([UserApi.getUserMe(), MyTeamApi.getCurrentOpenTeam()]).then(([meInfoRes, currentOpenTeamRes]) => {
      setMeInfo(meInfoRes);
      setCurrentOpenTeam(currentOpenTeamRes);
      setIsLoading(false);
    });
  }, []);

  return (
    <Layout>
      <MyPageContext.Provider value={{ isLoading, meInfo, currentOpenTeam }}>
        <MyInfo />
        <MyTeam />
        <MyPageEtc />
      </MyPageContext.Provider>
    </Layout>
  );
}
