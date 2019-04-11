export const searchByTitle = title => ({
  type: "SEARCH_BY_TITLE",
  title,
});

export const searchByCity = city => ({
  type: "SEARCH_BY_CITY",
  city,
});

export const searchByCategory = category => ({
  type: "SEARCH_BY_CATEGORY",
  category,
});

export const sortByNewest = newest => ({
  type: "SORT_BY_NEWEST",
  newest,
});

export const sortByClosest = closest => ({
  type: "SORT_BY_CLOSEST",
  closest,
});
