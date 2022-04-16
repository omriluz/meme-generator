'use strict'

let gElCanvas
let gCtx
let gStartPos
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']


function initMemeEditor() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
        // resizeCanvas()
    addMouseListeners()
    addTouchListeners()
    document.querySelector('body').style.backgroundColor = '#21252b'
    document.querySelector('.meme-editor').style.display = 'block'
    renderMeme()
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}

function onUp() {
    isLineDrag(false)
    document.body.style.cursor = 'default'
}

function onDown(ev) {
    const pos = getEvPos(ev)
    checkLineClicked(pos)
    if (!isLineClicked(pos)) return
    isLineDrag(true)
    gStartPos = pos
    document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
    const line = getSelectedLine()
    if (!line.isDrag) return
    const pos = getEvPos(ev)
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y
    moveLine(dx, dy)
    gStartPos = pos
    renderMeme()
}

function renderMeme() {
    const memeImage = getSelectedMemeImg()
    const img = new Image();
    const meme = getMeme()
    const selectedLine = getSelectedLine()

    img.src = memeImage;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        meme.lines.forEach(line => {
            renderText(line.txt, line.width, line.height, line.color, line.strokeColor, line.size)
            if (selectedLine === line) {
                renderRect()
            }
        })
    }
}


function onSwitchLine() {
    switchLine()
    const line = getSelectedLine()

    const textboxEl = document.querySelector('.user-text-box')
    if (!line) {
        // if no lines delete the text in textbox
        textboxEl.value = ''
        return
    }

    // if primary text use placeholder and not the present text
    line.txt === 'insert text here' ?
        textboxEl.value = '' : textboxEl.value = line.txt

    // prevents virtual keyboard opening on mobile as it hurts UX 
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) textboxEl.focus()

    document.querySelector('.text-color').value = line.color

    renderMeme()

}

function onNewText(text) {
    const meme = getMeme()
    if (!meme.lines.length) onAddLine()
    setLineTxt(text)
    renderMeme()
}

function renderText(txt, x, y, color, strokeColor, size) {
    const meme = getMeme()

    // BUGFIX:when no lines present and added back the strokeColor changes
    if (!strokeColor) strokeColor = '#000000';

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
    const meme = getMeme()
    if (meme.lines.length === 1) onSwitchLine()
    addLine()
    renderMeme()
}

function reloadImgNoRect() {
    const memeImage = getSelectedMemeImg()
    const img = new Image();
    const meme = getMeme()
    img.src = memeImage;

    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    meme.lines.forEach(line => {
        renderText(line.txt, line.width, line.height, line.color, line.strokeColor, line.size)
    })
}

function onDownload(el) {
    reloadImgNoRect()
    const data = gElCanvas.toDataURL()
    el.href = data
    el.download = 'meme.jpg'
    renderMeme()
}

function onShare() {
    reloadImgNoRect()
    uploadImg()
}

function getEvPos(ev) {
    let pos = {
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

function renderRect() {
    const line = getSelectedLine()
    if (!line.txt) return
    const textStartX = line.width - gCtx.measureText(line.txt).width / 2
    const textEndX = gCtx.measureText(line.txt).width
    const textStartY = line.height - gCtx.measureText(line.txt).actualBoundingBoxAscent
    const textEndY = line.height - textStartY

    gCtx.beginPath();
    gCtx.rect(textStartX - 4, textStartY - 4, textEndX + 10, textEndY + 10);
    gCtx.strokeStyle = 'red';
    gCtx.stroke();
    gCtx.closePath()
}