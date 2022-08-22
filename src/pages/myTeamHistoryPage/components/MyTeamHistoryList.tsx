import { useContext } from "react";
import { MyTeamHistoryPageContext } from "../MyTeamHistoryPage";
import TeamBox from "./TeamBox";

export default function MyTeamHistoryList() {
  const { isLoading, teamHistoryList } = useContext(MyTeamHistoryPageContext);

  return (
    <>
      {isLoading ? <div>loading...</div> : teamHistoryList.list.map((item) => <TeamBox key={item.teamId} {...item} />)}
    </>
  );
}
