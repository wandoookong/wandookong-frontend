import { useContext } from "react";
import { MyTeamPartyPageContext } from "../MyTeamPartyPage";
import TeamPartyBox from "./TeamPartyBox";

export default function MyTeamPartyList() {
  const { isLoading, teamPartyList } = useContext(MyTeamPartyPageContext);

  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        teamPartyList.list.map((item) => <TeamPartyBox key={item.teamId} {...item} />)
      )}
    </>
  );
}
