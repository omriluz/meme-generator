'use strict'


function onInit() {
    renderGallery()
}

function renderGallery() {
    // take photos from folder and present them in the client
    let galleryEl = document.querySelector('.gallery-container')
    let photos = getPhotos()
    let strsHTML = ''

    photos.map(photo => {
        strsHTML += `<img id=${photo.id} onclick="imgClicked(this.id)" class="gallery-img" src="${photo.img}">`
    })

    galleryEl.innerHTML = strsHTML
}

function imgClicked(id) {
    let galleryViewEl = document.querySelector('.image-gallery')
    galleryViewEl.style.display = 'none'

    saveMeme(id)
    initMemeEditor()


}