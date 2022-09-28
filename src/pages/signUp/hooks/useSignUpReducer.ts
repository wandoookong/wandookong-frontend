import { useReducer } from "react";

interface State {
  userSocialId: number;
  nickname: string;
  roleMain: MyRole;
  careerRange: CareerRange;
  tagNameList: string[];
}

interface OnChangeStateAction {
  type: "ON_CHANGE_STATE_ACTION";
  key: keyof State;
  value: State[keyof State];
}

interface OnChangeTagAction {
  type: "ON_CHANGE_TAG_ACTION";
  value: string;
}

type Actions = OnChangeStateAction | OnChangeTagAction;

function reducer(state: State, action: Actions) {
  switch (action.type) {
    case "ON_CHANGE_STATE_ACTION":
      return {
        ...state,
        [action.key]: action.value,
      };
    case "ON_CHANGE_TAG_ACTION":
      return state.tagNameList.includes(action.value)
        ? { ...state, tagNameList: [...state.tagNameList.filter((value) => value !== action.value)] }
        : { ...state, tagNameList: [...state.tagNameList, action.value] };
    default:
      return state;
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
  const onChangeRoleMain = (value: MyRole) => dispatch({ type: "ON_CHANGE_STATE_ACTION", key: "roleMain", value });
  const onChangeCareerRange = (value: CareerRange) =>
    dispatch({ type: "ON_CHANGE_STATE_ACTION", key: "careerRange", value });
  const onChangeTagNameList = (value: string) => dispatch({ type: "ON_CHANGE_TAG_ACTION", value });

  return {
    state,
    onChangeUserSocialId,
    onChangeNickname,
    onChangeRoleMain,
    onChangeCareerRange,
    onChangeTagNameList,
  } as const;
}
