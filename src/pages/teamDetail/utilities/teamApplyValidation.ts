export default function teamApplyValidation(target) {
  const errorMessage = { position: "", memo: "" };
  if (!target.roleDetail) {
    errorMessage.position = "포지션 콩을 선택해주세요.";
  }
  if (!target.memo) {
    errorMessage.memo = "메세지를 작성해주세요.";
  }
  return errorMessage;
}
