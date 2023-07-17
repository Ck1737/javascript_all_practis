const month = ["Jan", "Feb", "march", "April", "May"];

const indexOfMonth = month.indexOf("Jan");
if (indexOfMonth != -1) {
  const updateMonth = month.splice(indexOfMonth, 1, "jan");
  console.log(month);
} else {
  console.log("data not found");
}
