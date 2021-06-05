export const convertToLocaleString = (num_string) => {
  if (num_string === undefined || num_string === null) return `-`;

  return num_string.toLocaleString();
};
