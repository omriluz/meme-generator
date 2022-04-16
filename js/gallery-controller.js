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
    document.querySelector('body').style.backgroundColor = '#383b42'

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
    const galleryViewEl = document.querySelector('.image-gallery')
    galleryViewEl.style.display = 'none'

    setImg(id)
    initMemeEditor()
}

function onFilterByKeyword(el) {
    const fontSize = el.style.fontSize
    let fontNum = +fontSize.match(/\d+\.?\d*/g)[0]
    if (fontNum < 3.8) {
        fontNum += 0.2
        el.style.fontSize = fontNum + 'vw'
    }
    filterByKeyword(el.innerHTML.toLowerCase())
    renderGallery()
}