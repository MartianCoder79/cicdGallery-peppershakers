import './styles/main.scss';

const state = {
  title: 'CI/CD Gallery',
  logo: 'PepperShaking Image Gallery',
  logoImg: '../public/shaker.png',
};

const template = content => `
    <header class="header">
      <nav class="nav">
        <img class="logo" src="aabd65e9e8cc266db58c.png" />
          ${content.logo}
        <img class="logo" src="aabd65e9e8cc266db58c.png" />
      </nav>
    </header>
    <main class="main">
      <section class="search">
        <input type="text" placeholder="Search.." class="input" id="search__item">
        <button type="submit" class="btn" id="go">GO</button>
      </section>
    </main>
  `;

const render = (htmlString, el) => {
  el.innerHTML = htmlString;
};

window.addEventListener('statechange', () => {
  render(template(state), document.querySelector('#root'));
});

window.dispatchEvent(new Event('statechange'));

const search = document.querySelector('#search__item');
const go = document.querySelector('#go');

const searchHistoryArray = ['tuna', 'computer', 'man'];

window.localStorage.setItem('searchHistory', JSON.stringify(searchHistoryArray));

go.addEventListener('click', () => {
  searchHistoryArray.push(search.value);
  console.log(searchHistoryArray);
});

