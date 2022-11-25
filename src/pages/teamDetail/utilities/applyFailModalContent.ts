export function applyFailModalContent(target) {
  switch (target) {
    case "pending":
      return {
        title: "이미 참여 신청한 완두콩이에요!",
        content: `리더가 아직 참여 수락을 하지 않았어요. \n 조금만 더 기다려주세요.`,
      };
    case "boarding":
      return {
        title: "현재 참여중인 완두콩이에요!",
        content: `해당 완두콩의 상세 화면은 \n [마이페이지 > 참여한 완두콩 보기]에서 확인 가능해요.`,
      };
    case "block":
      return {
        title: "완두콩 참여하기가 어려워요!",
        content: `해당 완두콩에 참여할 수 있는 횟수가 초과되었어요. \n 홈에서 참여 가능한 완두콩들이 기다리고 있어요.`,
      };
    case "team_lead":
      return {
        title: "참여자 기다리는 중이에요!",
        content: `해당 완두콩의 상세 화면은 \n [마이페이지 > 내가 만든 완두콩 보기]에서 확인 가능해요.`,
      };
    default:
      return {
        title: "",
        content: "",
      };
  }
}
