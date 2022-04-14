'use strict'


function onInit() {
    renderGallery()
}

function renderGallery() {
    console.log('fdjasifjds');
    // take photos from folder and present them in the client
    let galleryEl = document.querySelector('.gallery-container')
    let photos = getPhotos()
    let strsHTML = ''

    photos.map(photo => {
        strsHTML += `<img onclick="imgClicked(this.src)" class="gallery-img" src="${photo.img}">`
    })

    galleryEl.innerHTML = strsHTML
}

function imgClicked(img) {
    let galleryViewEl = document.querySelector('.image-gallery')
    galleryViewEl.style.display = 'none'

    // todo: check if you need to save the image first
    // or if you can pass data between controllers
    // right now for the sake of continuing pass through controllers
    saveImage(img)
        // renderMeme(img)
}