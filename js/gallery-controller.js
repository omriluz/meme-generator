'use strict'


function onInit() {
    renderGallery()
}

function renderGallery(el) {
    // if pressed via button and not onInit go back to gallery
    if (el) {
        document.querySelector('.image-gallery').style.display = 'block';
        document.querySelector('.meme-editor').style.display = 'none'
    }

    // take photos from folder and present them in the client
    let galleryEl = document.querySelector('.gallery-container')
    let photos = getPhotos()
    let strsHTML = ''

    photos.map(photo => {
        strsHTML += `<img id=${photo.id} onclick="onImgSelect(this.id)" class="gallery-img" src="${photo.img}">`
    })

    galleryEl.innerHTML = strsHTML
}

function onImgSelect(id) {
    let galleryViewEl = document.querySelector('.image-gallery')
    galleryViewEl.style.display = 'none'

    saveMeme(id)
    initMemeEditor()


}