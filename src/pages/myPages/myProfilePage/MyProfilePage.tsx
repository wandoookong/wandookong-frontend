import { useEffect, useState } from "react";
import MyProfileEdit from "./components/MyProfileEdit";
import UserApi from "../../../api/userApi";
import { UserMyInfo } from "../../../api/types/userType";
import Header from "./components/Header";
import ContentLayout from "../../../components/layout/contentLayout";

export default function MyProfilePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meInfo, setMeInfo] = useState({} as UserMyInfo);

  useEffect(() => {
    UserApi.getUserMe().then((res) => {
      setMeInfo(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <ContentLayout>
      <Header />
      {isLoading ? null : <MyProfileEdit meInfo={meInfo} setMeInfo={setMeInfo} />}
    </ContentLayout>
  );
}