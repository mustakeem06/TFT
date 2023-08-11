// =% HAMMBURGER TOGGLE 
const showMenu=()=>{
    document.getElementById('navMenu').classList.toggle('showMenu')
}
const closeMenu=()=>{
    document.getElementById('navMenu').classList.toggle('showMenu')   
}




// =% SHOW CATEGORY DROPDOWN

const showDropDownCategory=(e)=>{
    let dropDown=document.getElementById('CategoryDropDownId')
    dropDown.classList.toggle('showDropDown')
    let leftArrow=document.getElementById('leftArrow')
    leftArrow.classList.toggle('rotateDown')
}




// =% BANNER CAROUSEL

let bannerCarouselContainer = document.getElementById('bannerCarouselContainer')
let direction = -1;
const newLaunchesleftScroll = () => {
    direction = -1;
    bannerCarouselContainer.style.transition = 'none';
    bannerCarouselContainer.prepend(bannerCarouselContainer.lastElementChild);
    bannerCarouselContainer.style.transform = `translate(-${100}%, 0)`;
    setTimeout(() => {
        bannerCarouselContainer.style.transition = 'transform 1s ease';
        bannerCarouselContainer.style.transform = 'translate(0, 0)';
    });
}

const newLaunchesrightScroll = () => {
    direction = 1;
    bannerCarouselContainer.style.transform = `translate(-${100}%, 0)`;
}

const transFunction = () => {
        if (direction === 1) {
            bannerCarouselContainer.style.transition = 'none';
            bannerCarouselContainer.appendChild(bannerCarouselContainer.firstElementChild);
            bannerCarouselContainer.style.transform = 'translate(0, 0)';
            setTimeout(() => {
                bannerCarouselContainer.style.transition = 'transform 1s ease';
            });
        }
    
}
bannerCarouselContainer.addEventListener('transitionend', transFunction);

setInterval(() => {
    newLaunchesrightScroll()
}, 2000);