import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryConteiner = document.querySelector(".gallery");

const galleryCreating = (galleryItems) => {
    return galleryItems.map(({ original, preview, description }) =>
    `<div class="gallery__item"> 
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}"
            data-source="${original}" alt="${description}"/>
        </a>
    </div>`)
    .join("");
};

galleryConteiner.insertAdjacentHTML('beforeend', galleryCreating(galleryItems));

let modalWindow;

const onGalleryItemClick = (event) => {
    event.preventDefault();

    if (event.target.nodeName !== `IMG`) {
        return;
    }

    modalWindow = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`, {
        onShow: (modalWindow) => {window.addEventListener('keydown', onEscKeyPress)},
        onClose: (modalWindow) => {window.removeEventListener('keydown', onEscKeyPress)}
    })

    modalWindow.show()
};

galleryConteiner.addEventListener('click', onGalleryItemClick);

function onMadalClose() {
    modalWindow.close();
}

function onEscKeyPress(event) {
    if (event.code === "Escape") {
        onMadalClose();
    }
}