import { useReducer } from "react";

interface State {
  teamCategory: TeamCategory;
  title: string;
  myRole: Role;
  members: AcceptableMembers;
  description: string;
  contact: string;
}

interface OnChangeStateAction {
  type: "ON_CHANGE_STATE_ACTION";
  key: keyof State;
  value: State[keyof State];
}

interface OnChangeMemberAction {
  type: "ON_CHANGE_MEMBER_ACTION";
  value: keyof AcceptableMembers;
}

type Actions = OnChangeStateAction | OnChangeMemberAction;

function reducer(state: State, action: Actions) {
  switch (action.type) {
    case "ON_CHANGE_STATE_ACTION":
      return {
        ...state,
        members: {
          ...state.members,
        },
        [action.key]: action.value,
      };
    case "ON_CHANGE_MEMBER_ACTION":
      return {
        ...state,
        members: {
          ...state.members,
          [action.value]: state.members[action.value] > 0 ? 0 : 1,
        },
      };
    default:
      return state;
  }
}

export function useRequestFormReducer() {
  const [state, dispatch] = useReducer(reducer, {
    teamCategory: "",
    title: "",
    myRole: "",
    members: {
      product: 0,
      ux_ui: 0,
      app: 0,
      web_front: 0,
      back_end: 0,
    },
    description: "",
    contact: "",
  });

  const onChangeTeamCategory = (value: TeamCategory) =>
    dispatch({ type: "ON_CHANGE_STATE_ACTION", key: "teamCategory", value });
  const onChangeTitle = (value: string) => dispatch({ type: "ON_CHANGE_STATE_ACTION", key: "title", value });
  const onChangeRole = (value: Role) => dispatch({ type: "ON_CHANGE_STATE_ACTION", key: "myRole", value });
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
