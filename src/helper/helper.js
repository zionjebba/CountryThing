

export const formatCapital = (capitals) => {
  if (!capitals) {
    return "";
  }
  if (capitals.length > 0) {
    return capitals.join(" , ");
  }
};
