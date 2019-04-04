export const addEvent = ({
  title = "",
  description = "",
  organisator = "",
  city = "",
  category = "",
  image = false,
  createdAt = 0,
  startDate = 0,
  endDate = 0,
  id = "",
} = {}) => ({
  type: "ADD_EVENT",
  event: {
    title,
    description,
    organisator,
    city,
    category,
    image,
    createdAt,
    startDate,
    endDate,
    id,
  },
});

export const editEvent = (id, updates) => ({
  type: "EDIT_EVENT",
  id,
  updates,
});

export const removeEvent = ({ id } = {}) => ({
  type: "REMOVE_EVENT",
  id,
});
