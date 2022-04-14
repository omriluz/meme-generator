'use strict'

// get canvas
let gElCanvas = document.querySelector('canvas')
let gCtx = gElCanvas.getContext('2d')

renderMeme()

function renderMeme() {
    let meme = getMeme()
        // console.log('meme', meme);
    let exampleText = 'insert text here'

    // takes meme chosen and displays on controller
    let img = new Image();
    img.addEventListener("load", function() {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        renderText(exampleText, gElCanvas.width / 2, gElCanvas.height / 8)
        renderText(exampleText, gElCanvas.width / 2, gElCanvas.height / 1.05)
    })
    img.src = meme;

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