'use strict'


let gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    textAlignment: 'center',
    font: 'Impact',
    lines: [{
            txt: 'insert text here',
            size: 50,
            align: 'left',
            color: '#ffffff',
            width: 170,
            height: 70
        },
        {
            txt: 'insert text here',
            size: 50,
            align: 'left',
            color: '#ffffff',
            width: 170,
            height: 370
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
}

function changeFont(val) {
    gMeme.font = val
}

function changeAlignment(val) {
    gMeme.textAlignment = val
}

function deleteText() {
    console.log(gMeme.lines[gMeme.selectedLineIdx].txt);
    gMeme.lines[gMeme.selectedLineIdx].txt = ''
    console.log(gMeme.lines[gMeme.selectedLineIdx].txt);
}

function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
}

function addLine() {
    gMeme.lines.push({
        txt: 'insert text here',
        size: 50,
        align: 'left',
        color: '#ffffff',
        width: 170,
        height: 220
    })
}

function dragText(val) {
    gMeme.lines[gMeme.selectedLineIdx].height += val
}