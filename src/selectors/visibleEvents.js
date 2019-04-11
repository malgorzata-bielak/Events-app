import moment from "moment";

const visibleEvents = (events, { title, city, category, sortBy }) =>
  events
    .filter(event => {
      const isAvailable = moment().isSameOrBefore(event.endDate, "day");
      const titleMatch = event.title.toLowerCase().includes(title.toLowerCase());
      const cityMatch = city ? event.city.toLowerCase() === city.toLowerCase() : event;
      const categoryMatch = category
        ? event.category.toLowerCase() === category.toLowerCase()
        : event;

      return isAvailable && titleMatch && cityMatch && categoryMatch;
    })
    .sort((a, b) => {
      if (sortBy === "newest") {
        return a.createdAt > b.createdAt ? -1 : 1;
      }
      if (sortBy === "closest") {
        return a.startDate < b.startDate ? -1 : 1;
      }
    });

export default visibleEvents;
