import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

const listItems = galleryItems.map(({preview, original, description}) => { 
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', listItems)

gallery.addEventListener('click', onOpenModal)
window.addEventListener('keydown', onEscKeyPress);

function onOpenModal(event) {
  event.preventDefault();
  // console.dir(event.target.nodeName)
  
  const currentItem = event.target
  if(currentItem.nodeName !== 'IMG'){
    return;
  } else {
    let instance = basicLightbox.create(`
       <img width="1400" height="900" src="${currentItem.dataset.source}">
     `);
    instance.show()
    console.log(instance)
    // return instance;
  };
};

// console.log(instance)

// function onEscKeyPress(event) {
//   if(event.code === 'Escape') {
//     instance.hide()
//   }
// }




