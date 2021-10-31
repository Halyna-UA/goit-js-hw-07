import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const listGalleryItem = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
  })
  .join('');

galleryContainer.insertAdjacentHTML('afterbegin', listGalleryItem);

galleryContainer.addEventListener("click", selectImg);

function selectImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  
  let selectedImg = event.target.getAttribute("data-source");

// import * as basicLightbox from 'basiclightbox'

const instance = basicLightbox.create(`
    <img src="${selectedImg}" width="800" height="600">
`)

instance.show();
}
 console.log(galleryItems);
