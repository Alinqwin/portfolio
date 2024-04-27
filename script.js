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
    let h = document.documentElement.clientHeight;
    let sectionNumber = 0
    if (window.scrollY>=h*4){
        sectionNumber = 5
    }
    else if(window.scrollY>=h*3){
        sectionNumber = 4
    }
    else if(window.scrollY>=h*2){
        sectionNumber = 3
    }
    else if(window.scrollY>=h*1){
        sectionNumber = 2
    }
    else {
        sectionNumber = 1
    }
    const newActive = menu.children[sectionNumber-1]
    const oldActive = menu.querySelector('.nav-link_active')
    if (newActive!=oldActive){
        newActive.classList.add('nav-link_active')
        oldActive.classList.remove('nav-link_active')

    }
})
let menuButton = document.querySelector('.menu_button')
let mobileMenu = document.querySelector('.mobile_menu')
menuButton.onclick = ()=>{
    mobileMenu.classList.toggle('hidden')
    body.classList.toggle('scroll')
    menuButton.querySelectorAll('img').forEach((img)=>{
        img.classList.toggle('hidden')
    })
}
let body = document.querySelector('body')
function changeMobileActive(event){
    const newActive = event.target
    const oldActive = mobileMenu.querySelector('.nav-link_active')
    if (newActive.classList.contains('nav-link')){
        newActive.classList.add('nav-link_active')
        oldActive.classList.remove('nav-link_active')
        mobileMenu.classList.toggle('hidden')
        body.classList.toggle('scroll')
    }
}
mobileMenu.onclick = changeMobileActive