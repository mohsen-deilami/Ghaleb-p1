const navBtn=document.querySelector('.nav__btn');
const navMenu=document.querySelector('.nav-menu');
let isNavOpen=false;
navBtn.addEventListener('click',function()
{
    if(isNavOpen){
        navBtn.classList.remove('nav__btn--open');
        navMenu.classList.remove('nav-menu--open')
        isNavOpen=false;
        
    }
    else
    {
        navBtn.classList.add("nav__btn--open");
        navMenu.classList.add('nav-menu--open')
        isNavOpen=true;
       
    }
})