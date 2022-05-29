const zun = document.getElementsByClassName('zun');
const headerText = 'Di\u00A0Rumah\u00A0Saja';

for (let i = 0; i < headerText.length; i++) {
  const span = document.createElement('span');
  span.innerHTML = headerText[i];

  setTimeout(() => {
    zun[0].append(span);
  }, 500 * i);
}
