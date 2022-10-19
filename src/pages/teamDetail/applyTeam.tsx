import { useNavigate } from "react-router-dom";

export default function ApplyTeam() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)}> 뒤로</button>
      <h1>이페이지</h1>
    </>
  );
}
