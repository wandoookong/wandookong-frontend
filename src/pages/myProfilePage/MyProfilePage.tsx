import React, { useEffect, useState } from "react";
import ContentLayout from "../../components/layout/contentLayout";
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
    <ContentLayout>
      <MyProfilePageContext.Provider value={{ isLoading, meInfo }}>
        <MyProfileEdit />
      </MyProfilePageContext.Provider>
    </ContentLayout>
  );
}
