import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import MyTeamApi from "../../api/myTeamApi";
import { MyTeamHistoryReturnType } from "../../api/types/myTeamType";
import MyTeamHistoryList from "./components/MyTeamHistoryList";
import Header from "./components/Header";

type MyTeamHistoryPageContextType = {
  isLoading: boolean;
  teamHistoryList: MyTeamHistoryReturnType;
};

const initialState: MyTeamHistoryPageContextType = {
  isLoading: false,
  teamHistoryList: {} as MyTeamHistoryReturnType,
};

export const MyTeamHistoryPageContext = React.createContext(initialState);

export default function MyTeamHistoryPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [teamHistoryList, setTeamHistoryList] = useState({} as MyTeamHistoryReturnType);

  useEffect(() => {
    MyTeamApi.getMyTeamHistory().then((res) => {
      setTeamHistoryList(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <Layout>
      <Header />
      <MyTeamHistoryPageContext.Provider value={{ isLoading, teamHistoryList }}>
        <MyTeamHistoryList />
      </MyTeamHistoryPageContext.Provider>
    </Layout>
  );
}
