(function(){
    const overlay = document.querySelector('.overlay');
const imageList = document.querySelectorAll('img');
let currentFixedImage;
imageList.forEach(el => el.addEventListener('click', addFixedClasses));
overlay.addEventListener('click', removeFixedClasses);

function addFixedClasses(e) {
    const image = e.target;
    const imageWidth = image.width;
    const imageHeight = image.height;
    
    overlay.classList.add('overlay-visible');
    image.classList.add('fixed-image');
    
    image.style.marginLeft = (-imageWidth / 2) + 'px';
    image.style.marginTop = (-imageHeight / 2) + 'px';
    image.style.cursor = 'default';
    
    
    currentFixedImage = image;
}

function removeFixedClasses(e) {
    overlay.classList.remove('overlay-visible');
    currentFixedImage.classList.remove('fixed-image');
    currentFixedImage.style.marginLeft = '';
    currentFixedImage.style.marginTop = '';
    currentFixedImage.style.cursor = 'pointer';
}
})();



