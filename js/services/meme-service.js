'use strict'

const gPhotos = [
    { id: makeId(), img: 'images/gallery/1.jpg', keywords: ['funny', 'cute'] },
    { id: makeId(), img: 'images/gallery/2.jpg', keywords: ['funny', 'cute'] },
    { id: makeId(), img: 'images/gallery/3.jpg', keywords: ['funny', 'cute'] },
    { id: makeId(), img: 'images/gallery/4.jpg', keywords: ['funny', 'cute'] },
    { id: makeId(), img: 'images/gallery/5.jpg', keywords: ['funny', 'cute'] },
    { id: makeId(), img: 'images/gallery/6.jpg', keywords: ['funny', 'cute'] },
    { id: makeId(), img: 'images/gallery/7.jpg', keywords: ['funny', 'cute'] },
    { id: makeId(), img: 'images/gallery/8.jpg', keywords: ['funny', 'cute'] },
    { id: makeId(), img: 'images/gallery/9.jpg', keywords: ['funny', 'cute'] },
    { id: makeId(), img: 'images/gallery/10.jpg', keywords: ['funny', 'cute'] },
    { id: makeId(), img: 'images/gallery/11.jpg', keywords: ['funny', 'cute'] },
    { id: makeId(), img: 'images/gallery/12.jpg', keywords: ['funny', 'cute'] },
    { id: makeId(), img: 'images/gallery/13.jpg', keywords: ['funny', 'cute'] },
    { id: makeId(), img: 'images/gallery/14.jpg', keywords: ['funny', 'cute'] },
    { id: makeId(), img: 'images/gallery/15.jpg', keywords: ['funny', 'cute'] },
    { id: makeId(), img: 'images/gallery/16.jpg', keywords: ['funny', 'cute'] },
    { id: makeId(), img: 'images/gallery/17.jpg', keywords: ['funny', 'cute'] },
    { id: makeId(), img: 'images/gallery/18.jpg', keywords: ['funny', 'cute'] }
]



var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I sometimes eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
    }]
}

function saveImage(img) {
    gMeme = img
}

function getMeme() {
    return gMeme
}