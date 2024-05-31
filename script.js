let html = document.getElementById('htli')
let css = document.getElementById('csli')
let js = document.getElementById('jsli')

let box1 = document.getElementById('html')
let box2 = document.getElementById('css')
let box3 = document.getElementById('js')

html.addEventListener('click',()=>{
    box1.style.display = 'flex'
    box2.style.display = 'none'
    box3.style.display = 'none'
})

css.addEventListener('click',()=>{
    box1.style.display = 'none'
    box2.style.display = 'flex'
    box3.style.display = 'none'
})

js.addEventListener('click',()=>{
    box1.style.display = 'none'
    box2.style.display = 'none'
    box3.style.display = 'flex'
})