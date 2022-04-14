'use strict'

// get canvas
let gElCanvas = document.querySelector('canvas')
let gCtx = gElCanvas.getContext('2d')


function initMemeEditor() {
    document.querySelector('body').style.backgroundColor = '#21252b'
        // addEventListeners()
    document.querySelector('.meme-editor').style.display = 'block'
    renderMeme()
}

function addEventListeners() {

    // add event listeners here
}

function renderMeme() {
    let memeImage = getSelectedMemeImg()
    let meme = getMeme()
        // let exampleText = 'insert text here'

    let img = new Image();
    img.addEventListener("load", function() {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        renderText(meme.lines[meme.selectedLineIdx].txt, gElCanvas.width / 2, gElCanvas.height / 8)
        renderText(meme.lines[1].txt, gElCanvas.width / 2, gElCanvas.height / 1.05)
    })
    img.src = memeImage;

}


function onNewText(text) {
    let meme = getMeme()
    meme.lines[meme.selectedLineIdx].txt = text
    renderMeme()
}

function renderText(txt, x, y) {
    gCtx.textAlign = 'center';
    gCtx.lineWidth = 2;
    gCtx.fillStyle = 'white';
    gCtx.font = '50px Impact';
    gCtx.fillText(txt, x, y);
    gCtx.strokeStyle = 'black';
    gCtx.strokeText(txt, x, y);
}