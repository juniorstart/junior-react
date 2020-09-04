const formatDate = (date: string): string => {
  const newDate = new Date(date);

  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  const monthDisplay = month < 10 ? `0${month}` : month;
  const dayDisplay = day < 10 ? `0${day}` : day;

  return `${dayDisplay}.${monthDisplay}.${year}`;
};

export default formatDate;
