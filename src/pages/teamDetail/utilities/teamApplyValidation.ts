export default function teamApplyValidation(target) {
  const errorMessage = { position: "", memo: "" };
  if (!target.roleDetail) {
    errorMessage.position = "포지션 콩을 선택해주세요.";
  }
  if (!target.memo || target.memo.length < 10) {
    errorMessage.memo = "메세지를 10자 이상 작성해주세요.";
  }
  return errorMessage;
}
