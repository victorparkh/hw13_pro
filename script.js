a = [1, 22, 3, "hello", 4, 5, "sdd", false];
b = [1, 223, 3, true, 4, undefined, 6, true, "sdce"];

function compare(arrA, arrB) {
  summA = 0;
  summB = 0;
  arrA.forEach((element) => {
    if (typeof element === "number") {
      summA += element;
    }
  });
  arrB.forEach((element) => {
    if (typeof element === "number") {
      summB += element;
    }
  });

  if (summA > summB) {
    return arrA;
  } else return arrB;
}

console.log(compare(a, b));
