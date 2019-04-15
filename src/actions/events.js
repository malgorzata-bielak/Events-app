import database from "../firebase/firebase";

export const setEvents = events => ({
  type: "SET_EVENTS",
  events,
});

export const startSetEvents = () => (dispatch, getState) => {
  const { uid } = getState().auth;

  return database
    .ref(`users/${uid}/events`)
    .once("value")
    .then(snapshot => {
      const events = [];

      snapshot.forEach(childSnapshot => {
        events.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });
      dispatch(setEvents(events));
    });
};

export const addEvent = event => ({
  type: "ADD_EVENT",
  event,
});

export const startAddEvent = eventData => (dispatch, getState) => {
  const { uid } = getState().auth;

  return database
    .ref(`users/${uid}/events`)
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

export const startEditEvent = (id, updates) => (dispatch, getState) => {
  const { uid } = getState().auth;

  return database
    .ref(`users/${uid}/events/${id}`)
    .update(updates)
    .then(() => {
      dispatch(editEvent(id, updates));
    });
};

export const removeEvent = (id = {}) => ({
  type: "REMOVE_EVENT",
  id,
});

export const startRemoveEvent = id => (dispatch, getState) => {
  const { uid } = getState().auth;

  return database
    .ref(`users/${uid}/events/${id}`)
    .remove()
    .then(() => {
      dispatch(removeEvent(id));
    });
};
