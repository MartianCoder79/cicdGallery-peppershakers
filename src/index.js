import './styles/main.scss';
import { createApi } from 'unsplash-js';
import shaker from './shaker.png';

const api = createApi({
  accessKey: process.env.API_KEY,
});

const template = content => `
    <header class="header">
      <nav class="nav">
        <img class="logo" src="${content.logoImg}" />
          ${content.logo}
        <img class="logo" src="${content.logoImg}" />
      </nav>
    </header>
    <main class="main">
      <section class="search">
        <input type="text" placeholder="Search.." class="input" id="search__item">
        <button type="submit" class="btn" id="go">GO</button>
      </section>
      <section id="result__container" class="section__results">

      </section>
    </main>
  `;

const render = (htmlString, el) => {
  el.innerHTML = htmlString;
};

const state = {
  title: 'CI/CD Gallery',
  logo: 'PepperShaking Image Gallery',
  logoImg: shaker,
  gallery: [],
  searchQuery: '',
};

const seatchForPics = () => {
  api.search
    .getPhotos({
      query: state.searchQuery,
      page: 1,
      perPage: 10,
      orientation: 'landscape',
    })
    .then(result => {
      result.response.results.forEach(element => {
        state.gallery.push(element.urls.small);
      });
    })
    .catch(() => {
      console.log('something went wrong!');
    });
};

window.addEventListener('statechange', () => {
  render(template(state), document.querySelector('#root'));
});

window.dispatchEvent(new Event('statechange'));

const search = document.querySelector('#search__item');
const go = document.querySelector('#go');

// ? using a localStorage for saving recent searches.
// const searchHistoryArray = ['tuna', 'computer', 'man'];
// searchHistoryArray.push(search.value);
// window.localStorage.setItem('searchHistory', JSON.stringify(searchHistoryArray));

const resultContainer = document.querySelector('#result__container');

go.addEventListener('click', () => {
  // TODO make api call
  state.searchQuery = search.value;
  console.log(state);

  state.gallery.forEach(link => {
    resultContainer.innerHTML += `<img src="${link}" />`;
  });
});
