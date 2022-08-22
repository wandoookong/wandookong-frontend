import { TeamPartyReturnType } from "../../../api/types/myTeamType";

export default function TeamPartyBox(props: TeamPartyReturnType) {
  return (
    <>
      <div>{props.title}</div>
    </>
  );
}
