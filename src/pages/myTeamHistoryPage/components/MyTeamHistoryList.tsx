import { useContext } from "react";
import RequestItem from "../../home/components/requestItem";
import { MyTeamHistoryPageContext } from "../MyTeamHistoryPage";
import TeamBox from "./TeamBox";

export default function MyTeamHistoryList() {
  const { isLoading, teamHistoryList } = useContext(MyTeamHistoryPageContext);

  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        teamHistoryList.list.map((item) => <RequestItem key={item.teamId} teamId={item.teamId} content={item} />)
      )}
    </>
  );
}
