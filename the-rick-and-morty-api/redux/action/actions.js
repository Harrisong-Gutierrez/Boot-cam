export const addFavorite = (entityType, item) => ({
  type: 'ADD_FAVORITE',
  entityType,
  payload: item,
});

export const removeFavorite = (entityType, item) => ({
  type: 'REMOVE_FAVORITE',
  entityType,
  payload: item,
});
