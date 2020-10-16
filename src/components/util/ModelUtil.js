export function trimSequilzeDates(obj) {
  return trimDates(obj);
}

export function trimSequilzeDatesAndID(obj) {
  return trimAll(obj);
}

//Destructures the object and takes away updatedAt and createAt
// the `...` spread notation collects all remaining properties
function trimAll({ updatedAt, createdAt, id, ...o }) {
  return o;
}

//Destructures the object and takes away updatedAt and createAt
// the `...` spread notation collects all remaining properties
function trimDates({ updatedAt, createdAt, ...o }) {
  return o;
}
