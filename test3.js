/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  {
    session_name: "first test",
    classes: [{ class_name: undefined, students: [{ student_name: "budi" }] }],
  },
  {
    session_name: null,
    classes: [
      { class_name: "second class", students: [{ student_name: "adi" }] },
    ],
  },
];

function result(data) {
  let newData = [...data];
  for (let item of newData) {
    Object.keys(item).forEach((key) => {
      if (Array.isArray(item[key])) item[key] = result(item[key]);
      if (item[key] === undefined || item[key] === null) item[key] = undefined;
    });
  }
  return JSON.parse(JSON.stringify(newData));
}

console.log(result(data));
