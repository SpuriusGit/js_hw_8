import gallery from "./gallery-items.js";

const refs = {
    ul : document.querySelector('.js-gallery'),
    lightbox : document.querySelector('.js-lightbox'),
    lightboxImage : document.querySelector('.lightbox__image'),
    lightboxCloseButton : document.querySelector('button[data-action="close-lightbox"]'),
    lightboxOverlay : document.querySelector('.lightbox_overlay'),
}
// render gallery
function renderGallery(){
    gallery.forEach((img)=>{
        let li = document.createElement('li');
        let image = document.createElement('img');
        let a = document.createElement('a');
        li.classList.add('gallery__item');
        image.classList.add('gallery__image');
        a.classList.add('gallery__link');
        a.setAttribute('href',`${img.preview}`);
        image.setAttribute('src',`${img.preview}`);
        image.setAttribute('data-source',`${img.original}`);
        image.setAttribute('alt',`${img.description}`);
        a.append(image);
        li.append(a);
        refs.ul.append(li);
    });
}
renderGallery();
// open image
refs.ul.addEventListener('click',(e)=>{
    e.preventDefault();
    refs.lightbox.classList.add('is-open');
    refs.lightboxImage.setAttribute('src',`${e.target.dataset.source}`);
});
// close image
refs.lightboxCloseButton.addEventListener('click', ()=>{
    refs.lightbox.classList.remove('is-open');
    refs.lightboxImage.setAttribute('src',` `);
});

