'use strict'


let gMeme = {
    selectedImgId: '',
    selectedLineIdx: 0,
    lines: []
};


function getImageById(memeId) {
    let photo = gPhotos.find(photo => photo.id === memeId)
    return photo.img
}

function saveMeme(memeId) {
    let photo = gPhotos.find(photo => photo.id === memeId)
    gMeme.selectedImgId =
        _saveChosenMemeToStorage(photo.img)
}

function getMeme() {
    return gMeme
}


function _saveChosenMemeToStorage(val) {
    saveToStorage("chosenMeme", val)
}