const intialState = {
  user: null,
  photo_view: false,
  attachment_view: false,
  setting_view: false,
  theme_view: false,
};

function AppReducer(state = intialState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_ATTACHMENT_VIEW":
      return {
        ...state,
        attachment_view: action.attachment_view,
      };

    case "SET_THEME_VIEW":
      return {
        ...state,
        theme_view: action.theme_view,
      };

    case "SET_SETTING_VIEW":
      return {
        ...state,
        setting_view: action.setting_view,
      };

    case "SET_PHOTO_VIEW":
      return {
        ...state,
        photo_view: action.photo_view,
      };
    default:
      return state;
  }
}

export default AppReducer;
