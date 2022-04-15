'use strict'

let gElCanvas
let gCtx

let firstText;
let secondText;
let meme = getMeme()

function initMemeEditor() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
        // resizeCanvas()
    document.querySelector('body').style.backgroundColor = '#21252b'
    document.querySelector('.meme-editor').style.display = 'block'
    renderMeme()
}


function renderMeme() {
    let memeImage = getSelectedMemeImg()
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
    let line = meme.lines[meme.selectedLineIdx]
    if (!line) return
    let textboxEl = document.querySelector('.user-text-box')

    // if primary text use placeholder and not the present text
    line.txt === 'insert text here' ?
        textboxEl.value = '' : textboxEl.value = line.txt
    textboxEl.focus()

    document.querySelector('.text-color').value = line.color

}

function onNewText(text) {
    if (!meme.lines.length) onAddLine()
    setLineTxt(text)
    renderMeme()
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
    deleteText()
    renderMeme()
    deleteLine()
    onSwitchLine()
}

function onAddLine() {
    if (meme.lines.length === 1) onSwitchLine()
    addLine()
    renderMeme()
}

function onDrag(val) {
    dragText(val)
    renderMeme()
}

function onDownload(el) {
    const data = gElCanvas.toDataURL()
    el.href = data
    el.download = 'meme.jpg'
}

function onShare() {
    uploadImg()
}

function openColorPalette() {
    document.querySelector('.text-color').click()
}