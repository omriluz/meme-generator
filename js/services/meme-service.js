'use strict'


let gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
            txt: 'insert txt here',
            size: 21,
            align: 'left',
            color: 'red'
        },
        {
            txt: 'insert kaki here',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
};


function getMeme() {
    return gMeme
}

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

function switchLine() {
    gMeme.selectedLineIdx + 1 >= gMeme.lines.length ?
        gMeme.selectedLineIdx = 0 : gMeme.selectedLineIdx++
}

function setLineTxt(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text
}