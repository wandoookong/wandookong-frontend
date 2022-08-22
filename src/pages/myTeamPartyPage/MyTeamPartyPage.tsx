import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import MyTeamApi from "../../api/myTeamApi";
import MyTeamPartyList from "./components/MyTeamPartyList";
import { MyTeamPartyReturnType } from "../../api/types/myTeamType";

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
    <Layout>
      <MyTeamPartyPageContext.Provider value={{ isLoading, teamPartyList }}>
        <MyTeamPartyList />
      </MyTeamPartyPageContext.Provider>
    </Layout>
  );
}
