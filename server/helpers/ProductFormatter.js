exports.FormatCreateProduct = (data, required = []) => {
  const errors = [];
  required.forEach((field) => {
    if (!Object.keys(data).includes(field) || data[field] === undefined)
      errors.push(field);
  });

  if (errors.length > 0)
    throw {
      name: "Invalid request data",
      path: errors.map((field) => field),
    };
  return data;
};

exports.generateUID = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};
