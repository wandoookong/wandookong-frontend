import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import MyProfileEdit from "./components/MyProfileEdit";
import UserApi from "../../api/userApi";
import { UserMeReturnType } from "../../api/types/userType";

type MyProfilePageContextType = {
  isLoading: boolean;
  meInfo: UserMeReturnType;
};

const initialState: MyProfilePageContextType = {
  isLoading: false,
  meInfo: {} as UserMeReturnType,
};

export const MyProfilePageContext = React.createContext(initialState);

export default function MyProfilePage() {
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
      <MyProfilePageContext.Provider value={{ isLoading, meInfo }}>
        <MyProfileEdit />
      </MyProfilePageContext.Provider>
    </Layout>
  );
}
