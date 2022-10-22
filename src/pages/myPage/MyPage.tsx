import React, { useEffect, useState } from "react";
import MyInfo from "./components/MyInfo";
import CurrentOpenTeam from "./components/CurrentOpenTeam";
import MyPageEtc from "./components/MyPageEtc";
import UserApi from "../../api/userApi";
import { UserMeReturnType } from "../../api/types/userType";
import MyTeamApi from "../../api/myTeamApi";
import { CurrentOpenTeamReturnType } from "../../api/types/teamType";
import Header from "./components/Header";
import Line from "./components/Line";
import MyLink from "./components/MyLink";

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
    <MyPageContext.Provider value={{ isLoading, meInfo, currentOpenTeam }}>
      <Header />
      <MyInfo />
      <CurrentOpenTeam />
      <MyLink link={"/my-team-history"} title={"내가 만든 완두콩 모두 보기"} />
      <MyLink link={"/my-team-party"} title={"참여한 완두콩 보기"} />
      <Line />
      <MyPageEtc />
    </MyPageContext.Provider>
  );
}
