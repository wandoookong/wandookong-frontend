import { useReducer } from "react";
import { AcceptableMembers, SetTeamValue } from "../@types/dto/setTeam";
import { ROLE_DETAIL, TEAM_CATEGORY } from "../@types/model/fieldType";

interface OnChangeStateAction {
  type: "ON_CHANGE_STATE_ACTION";
  key: keyof SetTeamValue;
  value: SetTeamValue[keyof SetTeamValue];
}

interface OnChangeMemberAction {
  type: "ON_CHANGE_MEMBER_ACTION";
  value: keyof AcceptableMembers;
}

type Actions = OnChangeStateAction | OnChangeMemberAction;

function reducer(state: SetTeamValue, action: Actions) {
  switch (action.type) {
    case "ON_CHANGE_STATE_ACTION":
      return {
        ...state,
        member: {
          ...state.member,
        },
        [action.key]: action.value,
      };
    case "ON_CHANGE_MEMBER_ACTION":
      return {
        ...state,
        member: {
          ...state.member,
          [action.value]: state.member[action.value] > 0 ? 0 : 1,
        },
      };
    default:
      return state;
  }
}

export function useTeamRequestFormReducer() {
  const [state, dispatch] = useReducer(reducer, {
    teamCategory: "",
    title: "",
    myRole: "",
    member: {
      product: 0,
      ux_ui: 0,
      app: 0,
      web_front: 0,
      back_end: 0,
    },
    description: "",
    contact: "",
  });

  const onChangeTeamCategory = (value: TEAM_CATEGORY) =>
    dispatch({ type: "ON_CHANGE_STATE_ACTION", key: "teamCategory", value });
  const onChangeTitle = (value: string) => dispatch({ type: "ON_CHANGE_STATE_ACTION", key: "title", value });
  const onChangeRole = (value: ROLE_DETAIL) => dispatch({ type: "ON_CHANGE_STATE_ACTION", key: "myRole", value });
  const onChangeMembers = (value: keyof AcceptableMembers) => dispatch({ type: "ON_CHANGE_MEMBER_ACTION", value });
  const onChangeDescription = (value: string) =>
    dispatch({ type: "ON_CHANGE_STATE_ACTION", key: "description", value });
  const onChangeContact = (value: string) => dispatch({ type: "ON_CHANGE_STATE_ACTION", key: "contact", value });

  return {
    state,
    onChangeTeamCategory,
    onChangeTitle,
    onChangeRole,
    onChangeMembers,
    onChangeDescription,
    onChangeContact,
  } as const;
}
