'use strict'


let gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: []
};


function getSelectedMemeImg() {
    let photo = gPhotos.find(photo => photo.id === gMeme.selectedImgId)
    return photo.img
}


function saveMeme(memeId) {
    let photo = gPhotos.find(photo => photo.id === +memeId)
    gMeme.selectedImgId = +memeId
        // saving right now curr image to local storage not sure if i need to yet
    _saveChosenMemeToStorage(photo.img)
}


function _saveChosenMemeToStorage(val) {
    saveToStorage("chosenMeme", val)
}