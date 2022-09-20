import { useReducer } from "react";

interface State {
  userSocialId: number;
  nickname: string;
  roleMain: string;
  careerRange: string;
  tagNameList: [];
}

interface OnChangeStateAction {
  type: "ON_CHANGE_STATE_ACTION";
  key: keyof State;
  value: State[keyof State];
}

function reducer(state: State, action: OnChangeStateAction) {
  switch (action.type) {
    case "ON_CHANGE_STATE_ACTION":
      return {
        ...state,
        [action.key]: action.value,
      };
  }
}

export function useSignUpReducer() {
  const [state, dispatch] = useReducer(reducer, {
    userSocialId: 0,
    nickname: "",
    roleMain: "",
    careerRange: "",
    tagNameList: [],
  });

  const onChangeUserSocialId = (value: number) =>
    dispatch({ type: "ON_CHANGE_STATE_ACTION", key: "userSocialId", value });
  const onChangeNickname = (value: string) => dispatch({ type: "ON_CHANGE_STATE_ACTION", key: "nickname", value });
  const onChangeRoleMain = (value: string) => dispatch({ type: "ON_CHANGE_STATE_ACTION", key: "roleMain", value });
  const onChangeCareerRange = (value: string) =>
    dispatch({ type: "ON_CHANGE_STATE_ACTION", key: "careerRange", value });

  return {
    state,
    onChangeUserSocialId,
    onChangeNickname,
    onChangeRoleMain,
    onChangeCareerRange,
  } as const;
}
