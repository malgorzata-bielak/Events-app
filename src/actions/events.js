import database from "../firebase/firebase";

export const addEvent = event => ({
  type: "ADD_EVENT",
  event,
});

export const startAddEvent = eventData => (dispatch, _getState) => {
  database
    .ref("events")
    .push(eventData)
    .then(ref => {
      dispatch(addEvent({ id: ref.key, ...eventData }));
    });
};

export const editEvent = (id, updates) => ({
  type: "EDIT_EVENT",
  id,
  updates,
});

export const removeEvent = (id = {}) => ({
  type: "REMOVE_EVENT",
  id,
});
