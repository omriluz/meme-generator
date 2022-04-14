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
        strsHTML += `<img onclick="imgClicked(this.src)" class="gallery-img" src="${photo.img}">`
    })

    galleryEl.innerHTML = strsHTML
}

function imgClicked(img) {
    let galleryEl = document.querySelector('.gallery-container')
    galleryEl.style.display = 'none'
    return img
}