let currentColor = 'black',
    canDraw = false,
    initialmouseclickpositionX = 0,
    initialmouseclickpositionY = 0,
    sizeRow = 5,
    clearnow = false,
    endmouseclickpositionX = 0,
    endmouseclickpositionY = 0;

const   screen = document.querySelector('#tela'),
        ctx = screen.getContext('2d'),
        bottonclearScreen = document.querySelector('.controls-img'),
        selectionSize = document.querySelector('.controls-select #select'),
        colorInput = document.querySelector('.controls-input #color'),
        bottoncleartotal = document.querySelector('.cleartotal img');


// events
screen.addEventListener('mousedown', mouseDownEvent)
screen.addEventListener('mousemove', mousemMoveEvent)
screen.addEventListener('mouseup', mouseUpEvente)
colorInput.addEventListener('change', colorSelection)
selectionSize.addEventListener('change', sizeSelection)
bottonclearScreen.addEventListener('click', cleardrawdetails)
bottoncleartotal.addEventListener('click', cleardrawdetailstotal)

//funtions
function colorSelection() {
    currentColor = colorInput.value
  
}

function sizeSelection() {
    sizeRow = selectionSize.value
}

function mouseDownEvent(mouselocationclick) {

    canDraw =  clearnow == false? true : false;
    
    initialmouseclickpositionX = mouselocationclick.offsetX
    initialmouseclickpositionY = mouselocationclick.offsetY  

}

function mousemMoveEvent(mouseloction) {

    endmouseclickpositionX = mouseloction.offsetX
    endmouseclickpositionY = mouseloction.offsetY

    if(canDraw) {
      Draw()
    } else if(clearnow){
        cleardrawdetails()
    }

   
}

function mouseUpEvente() {

    canDraw = false
    clearnow = false
}

function Draw() {
    screen.style.cursor = 'crosshair'
    ctx.beginPath()
    ctx.lineWidth = sizeRow
    ctx.lineJoin = "round"
    ctx.moveTo(initialmouseclickpositionX, initialmouseclickpositionY)
    ctx.lineTo(endmouseclickpositionX, endmouseclickpositionY)
    ctx.closePath()
    ctx.strokeStyle = currentColor
    ctx.stroke()

    initialmouseclickpositionX = endmouseclickpositionX
    initialmouseclickpositionY = endmouseclickpositionY
}

function cleardrawdetails() { 

    clearnow = true
    ctx.setTransform(1, 0,0,1,0,0)
    ctx.clearRect(endmouseclickpositionX, endmouseclickpositionY, sizeRow , sizeRow)
    screen.style.cursor = 'cell'
    
                
}

function cleardrawdetailstotal() { 
  
    ctx.setTransform(1, 0,0,1,0,0)
    ctx.clearRect(0, 0,ctx.canvas.width, ctx.canvas.height)

                
}



selectvalues()
function selectvalues() {

    const values = [ 5, 6, 7,8,9,10,11,12,14,16,
                     18,20,22,24,26,28,36,48,72
    ]

    if(selectionSize.querySelector('option') == null) {
        for(let valuesindex in values ) {

            selectionSize.appendChild(new Option(values[valuesindex], 
                values[valuesindex]))

        }
    }
}

