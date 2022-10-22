/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import { useContext } from "react";
import { MyTeamPartyPageContext } from "../MyTeamPartyPage";
import BottomButton from "./Party/BottomButton";
import Party from "./Party/Party";
import { TeamPartyReturnType } from "../../../api/types/myTeamType";

const style = css`
  border-bottom: 1px solid #f0ebd8;
  margin: 0 20px;
  margin-top: 16px;
`;

const styleMargin = css`
  margin-bottom: 20px;
`;

export default function MyTeamPartyList() {
  const { isLoading, teamPartyList } = useContext(MyTeamPartyPageContext);

  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        teamPartyList.list.map((item: TeamPartyReturnType) => (
          <section key={item.teamId} css={style}>
            <Party {...item} />
            {item.memberStatus === "apply" ? <BottomButton /> : <div css={styleMargin}></div>}
          </section>
        ))
      )}
    </>
  );
}
