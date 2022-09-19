// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
// console.log(galleryMarkup);
galleryContainer.innerHTML = galleryMarkup;

function createGalleryMarkup(galleryArray) {
  return galleryArray
    .map(
      item => `<div class="gallery__item">
      <a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}"  title="${item.description}"/>
    </a>
</div>`
    )
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionPosition: 'bottom',
  captionDelay: 250,
});
