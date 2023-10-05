const initialState = {
  favorites: {
    characters: [],
    episodes: [],
    locations: [],
  },
   favoriteIconColor:{
    card1: 'gray',
    card2: 'yellow',
   }
};

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_FAVORITE_ICON_COLOR':
      return {
        ...state,
        favoriteIconColor: {
          ...state.favoriteIconColor,
          [action.payload.cardName]: action.payload.color,
        },
      };
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: {
          ...state.favorites,
          [action.entityType]: [
            ...state.favorites[action.entityType],
            action.payload,
          ],
        },
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: {
          ...state.favorites,
          [action.entityType]: state.favorites[action.entityType].filter(
            (fav) => fav.id !== action.payload.id,
          ),
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
