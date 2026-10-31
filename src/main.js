import getImagesByQuery from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
};

const submitSearchValue = event => {
  event.preventDefault();

  const { currentTarget: formEl } = event;
  const searchedValue = formEl.elements['search-text'].value.trim();


  if (!searchedValue) {
    iziToast.warning({
      message: 'The search field should be filled in!',
    });

    formEl.reset();
    return;
  }

  formEl.reset();
  clearGallery();
  showLoader();

  getImagesByQuery(searchedValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(() => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
      });
    })
    .finally(() => {
      hideLoader();
    });
};

refs.form.addEventListener('submit', submitSearchValue);
