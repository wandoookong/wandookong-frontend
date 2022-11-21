import { useEffect, useState } from "react";
import MyProfileEdit from "./components/MyProfileEdit";
import Header from "./components/Header";
import ContentLayout from "../../../components/layout/contentLayout";
import { getUserMyInfoApi } from "../../../api/myPages/myPage/getUserMyInfoApi";
import { UserMyInfo } from "../../../@types/dto/userMyInfo";

export default function MyProfilePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meInfo, setMeInfo] = useState({} as UserMyInfo);

  useEffect(() => {
    (async function () {
      const response = await getUserMyInfoApi();
      setMeInfo(response);
      setIsLoading(false);
    })();
  }, []);

  return (
    <ContentLayout>
      <Header />
      {isLoading ? null : <MyProfileEdit meInfo={meInfo} setMeInfo={setMeInfo} />}
    </ContentLayout>
  );
}
