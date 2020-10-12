export default function trimSequilzeDates(obj) {
  return trim(obj);
}

//Destructures the object and takes away updatedAt and createAt
// the `...` spread notation collects all remaining properties
function trim({ updatedAt, createdAt, id, ...o }) {
  console.log("OO");
  console.dir(o);
  return o;
}
