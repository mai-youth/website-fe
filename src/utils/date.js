export function getYearMonthFromDate(dateStr) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'long' });
  return `${month} ${year}`;
}
