import React, { useEffect, useState } from "react";
import ContentLayout from "../../components/layout/contentLayout";
import MyTeamApi from "../../api/myTeamApi";
import MyTeamPartyList from "./components/MyTeamPartyList";
import { MyTeamPartyReturnType } from "../../api/types/myTeamType";
import Header from "./components/Header";

type MyTeamPartyPageContextType = {
  isLoading: boolean;
  teamPartyList: MyTeamPartyReturnType;
};

const initialState: MyTeamPartyPageContextType = {
  isLoading: false,
  teamPartyList: {} as MyTeamPartyReturnType,
};

export const MyTeamPartyPageContext = React.createContext(initialState);

export default function MyTeamPartyPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [teamPartyList, setTeamPartyList] = useState({} as MyTeamPartyReturnType);

  useEffect(() => {
    MyTeamApi.getMyTeamParty().then((res) => {
      setTeamPartyList(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <ContentLayout>
      <Header />
      <MyTeamPartyPageContext.Provider value={{ isLoading, teamPartyList }}>
        <MyTeamPartyList />
      </MyTeamPartyPageContext.Provider>
    </ContentLayout>
  );
}
