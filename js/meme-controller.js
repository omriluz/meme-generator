'use strict'

let gElCanvas = document.querySelector('canvas')
let gCtx = gElCanvas.getContext('2d')

let firstText;
let secondText;

function initMemeEditor() {
    document.querySelector('body').style.backgroundColor = '#21252b'
    document.querySelector('.meme-editor').style.display = 'block'
    renderMeme()
}


function renderMeme() {
    let memeImage = getSelectedMemeImg()
    let meme = getMeme()
    firstText = meme.lines[0].txt
    secondText = meme.lines[1].txt
        // let exampleText = 'insert text here'

    let img = new Image();
    img.addEventListener("load", function() {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);

        renderText(firstText, gElCanvas.width / 2,
            gElCanvas.height / 8, meme.lines[0].color,
            meme.lines[0].size)

        renderText(secondText, gElCanvas.width / 2,
            gElCanvas.height / 1.05, meme.lines[1].color,
            meme.lines[1].size)
    })
    img.src = memeImage;

}


function onSwitchLine() {
    let meme = getMeme()
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
    gCtx.textAlign = 'center';
    gCtx.lineWidth = 2;
    gCtx.fillStyle = color
    gCtx.font = `${size}px Impact`;
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