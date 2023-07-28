import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const listPictures = galleryItems.map(({preview, original, description}) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`}).join("");

gallery.insertAdjacentHTML('beforeend', listPictures);
// console.log(listPictures);


var lightbox = new SimpleLightbox('.gallery a', { 
  captions: true,
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData:	'alt',
 });