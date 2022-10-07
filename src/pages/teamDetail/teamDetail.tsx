import { useNavigate } from "react-router-dom";

export function TeamDetail() {
  const navigate = useNavigate();
  return (
    <>
      <div onClick={() => navigate(-1)}>뒤로가기</div>
      <p>여기다</p>
    </>
  );
}
