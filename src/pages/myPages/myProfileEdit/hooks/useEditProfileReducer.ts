import { CAREER_RANGE, ROLE_MAIN } from "../../../../@types/model/fieldType";
import { useReducer } from "react";

interface State {
  nickname: string;
  roleMain: ROLE_MAIN;
  careerRange: CAREER_RANGE;
  tagList: string[];
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
      let result;
      if (state.tagList.includes(action.value)) {
        result = { ...state, tagList: [...state.tagList.filter((value) => value !== action.value)] };
      } else {
        result = { ...state, tagList: [...state.tagList, action.value] };
      }
      return { ...result, tagList: result.tagList.sort((a, b) => (a < b ? -1 : 1)) };
    default:
      return state;
  }
}

export function useEditProfileReducer() {
  const [state, dispatch] = useReducer(reducer, {
    nickname: "",
    roleMain: "dev",
    careerRange: "0_4",
    tagList: [],
  });

  const onChangeNickname = (value: string) => dispatch({ type: "ON_CHANGE_STATE_ACTION", key: "nickname", value });
  const onChangeMyPosition = (value: ROLE_MAIN) => dispatch({ type: "ON_CHANGE_STATE_ACTION", key: "roleMain", value });
  const onChangeCareerRange = (value: CAREER_RANGE) =>
    dispatch({ type: "ON_CHANGE_STATE_ACTION", key: "careerRange", value });
  const onChangeTagNameList = (value: string) => dispatch({ type: "ON_CHANGE_TAG_ACTION", value });

  return { state, onChangeNickname, onChangeMyPosition, onChangeCareerRange, onChangeTagNameList } as const;
}
