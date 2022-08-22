import { TeamReturnType } from "../../../api/types/teamType";

// TODO: 나중에 메인에 있는거 쓸 수 있을지도??
export default function TeamBox(props: TeamReturnType) {
  return (
    <>
      <div>{props.title}</div>
    </>
  );
}
