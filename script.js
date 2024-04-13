const menu = document.querySelector(".nav-links")
function changeActive(event){
    const newActive = event.target
    const oldActive = menu.querySelector('.nav-link_active')
    if (newActive.classList.contains('nav-link')){
        newActive.classList.add('nav-link_active')
        oldActive.classList.remove('nav-link_active')
    }
}
menu.addEventListener('click',changeActive)


window.addEventListener('scroll',()=>{
    console.log('hello')
})
