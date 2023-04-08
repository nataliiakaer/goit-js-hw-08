// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');
const imageMarkup = createImageItemMurkup(galleryItems);

galleryListEl.insertAdjacentHTML('beforeend', imageMarkup);
galleryListEl.addEventListener('click', onImageClick);

function createImageItemMurkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      // console.log(preview);
      return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`;
    })
    .join('');
}

function onImageClick(evt) {
  evt.preventDefault();
  const isSelectedImageEl = evt.target.classList.contains('gallery__image');

  if (!isSelectedImageEl) {
    return;
  }
}
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});
