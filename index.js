let selectedColor = 'blue'
const painting = document.querySelector('.painting')

let palette = document.querySelectorAll('.color-choice')
for(let i = 0; i < palette.length; i++){
    palette[i].addEventListener('click', function(){
        selectedColor = palette[i].id
    })
}

painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor
})

painting.addEventListener('dblclick', function(e){
    e.target.style.backgroundColor = 'white'
})

const clearPage = document.querySelector('.clr-button')
let paintPix = document.querySelectorAll('.pixel')
clearPage.addEventListener('click', function(){
    for(let i = 0; i < paintPix.length; i++){
        paintPix[i].style.backgroundColor = 'white'
    }
})
