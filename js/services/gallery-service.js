'use strict'

let gFilter;
const gPhotos = [
    { id: 1, img: 'images/gallery/1.jpg', keywords: ['funny', 'man', 'comic'] },
    { id: 2, img: 'images/gallery/2.jpg', keywords: ['animal', 'cute'] },
    { id: 3, img: 'images/gallery/3.jpg', keywords: ['animal', 'cute', 'smile'] },
    { id: 4, img: 'images/gallery/4.jpg', keywords: ['animal', 'funny'] },
    { id: 5, img: 'images/gallery/5.jpg', keywords: ['funny', 'cute'] },
    { id: 6, img: 'images/gallery/6.jpg', keywords: ['funny', 'man'] },
    { id: 7, img: 'images/gallery/7.jpg', keywords: ['funny', 'cute'] },
    { id: 8, img: 'images/gallery/8.jpg', keywords: ['man', 'comic'] },
    { id: 9, img: 'images/gallery/9.jpg', keywords: ['funny', 'smile'] },
    { id: 10, img: 'images/gallery/10.jpg', keywords: ['man', 'comic', 'smile'] },
    { id: 11, img: 'images/gallery/11.jpg', keywords: ['man'] },
    { id: 12, img: 'images/gallery/12.jpg', keywords: ['man'] },
    { id: 13, img: 'images/gallery/13.jpg', keywords: ['man', 'smile'] },
    { id: 14, img: 'images/gallery/14.jpg', keywords: ['man'] },
    { id: 15, img: 'images/gallery/15.jpg', keywords: ['man'] },
    { id: 16, img: 'images/gallery/16.jpg', keywords: ['man'] },
    { id: 17, img: 'images/gallery/17.jpg', keywords: ['man'] },
    { id: 18, img: 'images/gallery/18.jpg', keywords: ['funny', 'cute'] }
]


let gImgChosen;

function getPhotos() {
    if (gFilter) {
        let filteredPhotos = []
        gPhotos.map(photo => {
            if (photo.keywords.includes(gFilter)) filteredPhotos.push(photo)
        })
        return filteredPhotos
    }
    return gPhotos
}

function filterByKeyword(val) {
    gFilter = val
}


function setImg(memeId) {
    let photo = gPhotos.find(photo => photo.id === +memeId)
    gMeme.selectedImgId = photo.id
}