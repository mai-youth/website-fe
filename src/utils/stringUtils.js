export function stripTags(string) {
  const div = document.createElement('div');
  div.innerHTML = string;
  return div.textContent || div.innerText || '';
}

export function capitalizeFirst(string) {
  if (string === null || string.length === 0) return string;
  return string[0].toUpperCase() + string.substring(1);
}
