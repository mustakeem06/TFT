const showMenu=()=>{
    document.getElementById('navMenu').classList.toggle('showMenu')
}


const closeMenu=()=>{
    document.getElementById('navMenu').classList.toggle('showMenu')   
}




// =* SHOW CATEGORY DROPDOWN

const showDropDownCategory=(e)=>{
    let dropDown=document.getElementById('CategoryDropDownId')
    dropDown.classList.toggle('showDropDown')
    let leftArrow=document.getElementById('leftArrow')
    leftArrow.classList.toggle('rotateDown')
}