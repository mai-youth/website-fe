export function copyToClipboard(elementId) {
  const input = document.getElementById(elementId);
  input.focus();
  input.select();
  document.execCommand('copy');
}
