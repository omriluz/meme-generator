'use strict'

let gElCanvas = document.querySelector('canvas')
let gCtx = gElCanvas.getContext('2d')

let firstText;
let secondText;
let meme = getMeme()

function initMemeEditor() {
    // resizeCanvas()
    document.querySelector('body').style.backgroundColor = '#21252b'
    document.querySelector('.meme-editor').style.display = 'block'
    renderMeme()
}


function renderMeme() {
    let memeImage = getSelectedMemeImg()
    firstText = meme.lines[0].txt
    secondText = meme.lines[1].txt
    renderText(firstText, gElCanvas.width / 2,
        gElCanvas.height / 8, meme.lines[0].color,
        meme.lines[0].size)

    renderText(secondText, gElCanvas.width / 2,
        gElCanvas.height / 1.05, meme.lines[1].color,
        meme.lines[1].size)

    let img = new Image();
    img.src = memeImage;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        meme.lines.forEach(line => {
            renderText(line.txt, line.width, line.height, line.color, line.size)
        })
    }
}


function onSwitchLine() {
    switchLine()
    document.querySelector('.user-text-box').value = meme.lines[meme.selectedLineIdx].txt
    document.querySelector('.text-color').value = meme.lines[meme.selectedLineIdx].color
}

function onNewText(text) {
    setLineTxt(text)
    renderMeme()
}

function onAddLine() {

}


function renderText(txt, x, y, color, size) {
    gCtx.textAlign = meme.textAlignment;
    gCtx.lineWidth = 2;
    gCtx.fillStyle = color
    gCtx.font = `${size}px ${meme.font}`;
    gCtx.fillText(txt, x, y);
    gCtx.strokeStyle = 'black';
    gCtx.strokeText(txt, x, y);
}

function onColorChange(color) {
    changeTextColor(color)
    renderMeme()
}

function onHandleFontSize(val) {
    handleFontSize(val)
    renderMeme()
}

function onFontType(val) {
    changeFont(val)
    renderMeme()
}

function onAlignText(val) {
    changeAlignment(val)
    renderMeme()
}

function onDeleteLine() {
    deleteLine()
    renderMeme
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onDrag(val) {
    dragText(val)
    renderMeme()
}

// function resizeCanvas() {
//     let elContainer = document.querySelector('.canvas-container')
//     gElCanvas.width = elContainer.offsetWidth - 100
// }