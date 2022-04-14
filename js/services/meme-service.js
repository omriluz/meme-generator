'use strict'


let gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
            txt: 'insert txt here',
            size: 50,
            align: 'left',
            color: '#ffffff'
        },
        {
            txt: 'insert kaki here',
            size: 50,
            align: 'left',
            color: '#ffffff'
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


function setImg(memeId) {
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

function changeTextColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function handleFontSize(val) {
    gMeme.lines[gMeme.selectedLineIdx].size += val
    console.log(gMeme.lines[gMeme.selectedLineIdx].size);
}