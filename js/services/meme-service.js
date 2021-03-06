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
            strokeColor: '#000000',
            width: 170,
            height: 70,
            isDrag: false
        },
        {
            txt: 'insert text here',
            size: 50,
            align: 'left',
            color: '#ffffff',
            strokeColor: '#000000',
            width: 170,
            height: 370,
            isDrag: false
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

function getSelectedLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
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

function changeStrokeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = color
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
    if (!gMeme.lines.length) return
    gMeme.lines[gMeme.selectedLineIdx].txt = ''
}

function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
}

function isLineDrag(drag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = drag
}

function moveLine(dx, dy) {
    gMeme.lines[gMeme.selectedLineIdx].width += dx
    gMeme.lines[gMeme.selectedLineIdx].height += dy
}

function addLine() {
    let height = 220
    if (!gMeme.lines.length) height = 70
    if (gMeme.lines.length === 1) height = 370


    gMeme.lines.push({
        txt: 'insert text here',
        size: 50,
        align: 'left',
        color: '#ffffff',
        width: 170,
        height,
        isDrag: false
    })
}

function isLineClicked(clickedPos) {
    const line = getSelectedLine()
    const { height, width } = { height: line.height, width: line.width }
    const distance = Math.sqrt((width - clickedPos.x) ** 2 + (height - clickedPos.y) ** 2)

    return distance <= line.size
}

function checkLineClicked(clickedPos) {
    const lines = gMeme.lines
    lines.map((line, index) => {
        const { height, width } = { height: line.height, width: line.width }
        const distance = Math.sqrt((width - clickedPos.x) ** 2 + (height - clickedPos.y) ** 2)

        if (distance <= line.size) {
            if (index != gMeme.selectedLineIdx)
                gMeme.selectedLineIdx = index
        }
    })
}