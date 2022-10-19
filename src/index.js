const state = {
  title: 'CI/CD Gallery',
  logo: 'logo-img',
  search: 'Search',
}

const template = state => {
  return `
    <header>${state.logo}</header>
    <input>${state.search}</input>
    <img src="https://picsum.photos/id/237/200/300">
  `;
}

const render = (htmlString, el) => {
  el.innerHTML = htmlString;
}

window.addEventListener('statechange', () => {
  render(template(state), document.querySelector('#root'));
  render(`<title>PepperShaking Image Gallery</title>`, document.querySelector('head'))
});

window.dispatchEvent(new Event('statechange'));
