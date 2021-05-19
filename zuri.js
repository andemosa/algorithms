const convertFahrToCelsius = (arg) => {
  const argType = typeof arg;

  if (argType === "number" || argType === "string") {
    return (parseFloat(arg) - 32) * (5 / 9).toFixed(4);
  } else if (argType === "object") {
    const isAnArray = Array.isArray(arg);

    if (isAnArray) {
      return `${JSON.stringify(arg)} is not a valid number but a/an array`;
    }

    return `${JSON.stringify(arg)} is not a valid number but a/an object`;
  }

  return `${JSON.stringify(arg)} is not a valid number but a/an ${argType}`;
};

const checkYuGiOh = (value) => {
  if (isNaN(value)) return `invalid parameter: ${JSON.stringify(value)}`;

  if (typeof value !== "number" && typeof value !== "string")
    return `invalid parameter: ${JSON.stringify(value)}`;

  const parsedValue = parseInt(value);
  let init = [];
  let array = [];
  for (let i = 1; i <= parsedValue; i++) {
    init.push(i);
  }

  for (let i of init) {
    if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
      i = "yu-gi-oh";
      array.push(i);
    } else if (i % 2 == 0 && i % 5 == 0) {
      i = "yu-oh";
      array.push(i);
    } else if (i % 3 == 0 && i % 5 == 0) {
      i = "gi-oh";
      array.push(i);
    } else if (i % 2 == 0) {
      i = "yu";
      array.push(i);
    } else if (i % 3 == 0) {
      i = "gi";
      array.push(i);
    } else if (i % 5 == 0) {
      i = "oh";
      array.push(i);
    } else {
      i = i;
      array.push(i);
    }
  }
  
  return array;
};