export function stripTags(string) {
  const div = document.createElement('div');
  div.innerHTML = string;
  return div.textContent || div.innerText || '';
}
