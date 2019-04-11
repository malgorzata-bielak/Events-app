export const addEvent = (event = {}) => ({
  type: "ADD_EVENT",
  event,
});

export const editEvent = (id, updates) => ({
  type: "EDIT_EVENT",
  id,
  updates,
});

export const removeEvent = (id = {}) => ({
  type: "REMOVE_EVENT",
  id,
});
