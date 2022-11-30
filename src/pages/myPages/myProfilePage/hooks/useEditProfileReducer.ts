import { CAREER_RANGE, ROLE_MAIN } from "../../../../@types/model/fieldType";
import { useReducer } from "react";

interface State {
  nickname: string;
  myPosition: ROLE_MAIN;
  careerRange: CAREER_RANGE;
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
      return { ...state, [action.key]: action.value };
    case "ON_CHANGE_TAG_ACTION":
      return state.tagNameList.includes(action.value)
        ? { ...state, tagNameList: [...state.tagNameList.filter((value) => value !== action.value)] }
        : { ...state, tagNameList: [...state.tagNameList, action.value] };
    default:
      return state;
  }
}

export function useEditProfileReducer() {
  const [state, dispatch] = useReducer(reducer, {
    nickname: "",
    myPosition: "dev",
    careerRange: "0_4",
    tagNameList: [],
  });

  const onChangeNickname = (value: string) => dispatch({ type: "ON_CHANGE_STATE_ACTION", key: "nickname", value });
  const onChangeMyPosition = (value: ROLE_MAIN) =>
    dispatch({ type: "ON_CHANGE_STATE_ACTION", key: "myPosition", value });
  const onChangeCareerRange = (value: CAREER_RANGE) =>
    dispatch({ type: "ON_CHANGE_STATE_ACTION", key: "careerRange", value });
  const onChangeTagNameList = (value: string) => dispatch({ type: "ON_CHANGE_TAG_ACTION", value });

  return { state, onChangeNickname, onChangeMyPosition, onChangeCareerRange, onChangeTagNameList } as const;
}
