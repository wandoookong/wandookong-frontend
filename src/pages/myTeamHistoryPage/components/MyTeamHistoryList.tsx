import { useContext } from "react";
import TeamItem from "../../home/components/teamItem";
import { MyTeamHistoryPageContext } from "../MyTeamHistoryPage";

export default function MyTeamHistoryList() {
  const { isLoading, teamHistoryList } = useContext(MyTeamHistoryPageContext);

  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        teamHistoryList.list.map((item) => <TeamItem key={item.teamId} teamId={item.teamId} content={item} />)
      )}
    </>
  );
}
