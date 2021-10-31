import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const listGalleryItem = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" 
    href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
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
 
  }
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
    overlay: true,
    spinner: true,
    animationSpeed: 500
});

console.log(galleryItems);



