'use strict'

let gElCanvas
let gCtx
let gStartPos
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

let firstText;
let secondText;
let meme = getMeme()

function initMemeEditor() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
        // resizeCanvas()
    addMouseListeners()
    document.querySelector('body').style.backgroundColor = '#21252b'
    document.querySelector('.meme-editor').style.display = 'block'
    renderMeme()
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

// try
function resizeCanvas() {
    let targetW = (window.innerWidth < 980) ? window.innerWidth * 0.6 : window.innerWidth * 0.4
    let width = Math.max(270, targetW)
    gCanvas.width = width
    gCanvas.height = gCanvas.width;
    // gCanvas.height = elContainer.offsetHeight
}

function onUp() {
    isLineDrag(false)
    document.body.style.cursor = 'default'
}

function onDown(ev) {
    const pos = getEvPos(ev)
    if (!isLineClicked(pos)) return
    isLineDrag(true)
    gStartPos = pos
    document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
    const currLine = meme.lines[meme.selectedLineIdx]
    if (!currLine.isDrag) return
    const pos = getEvPos(ev)
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y
    moveLine(dx, dy)
    gStartPos = pos
    renderMeme()

}

function renderMeme() {
    let memeImage = getSelectedMemeImg()
    let img = new Image();

    img.src = memeImage;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        meme.lines.forEach(line => {
            renderText(line.txt, line.width, line.height, line.color, line.strokeColor, line.size)
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

    // prevents virtual keyboard opening on mobile as it hurts UX 
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) textboxEl.focus()


    document.querySelector('.text-color').value = line.color

}

function onNewText(text) {
    if (!meme.lines.length) onAddLine()
    setLineTxt(text)
    renderMeme()
}

function renderText(txt, x, y, color, strokeColor, size) {
    gCtx.textAlign = meme.textAlignment;
    gCtx.lineWidth = 2;
    gCtx.fillStyle = color
    gCtx.font = `${size}px ${meme.font}`;
    gCtx.fillText(txt, x, y);
    gCtx.strokeStyle = strokeColor;
    gCtx.strokeText(txt, x, y);
}

function onColorChange(color) {
    changeTextColor(color)
    renderMeme()
}

function onStrokeChange(color) {
    changeStrokeColor(color)
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

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft,
            y: ev.pageY - ev.target.offsetTop
        }
    }
    return pos
}